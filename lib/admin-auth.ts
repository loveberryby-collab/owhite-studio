import { cookies } from "next/headers";
import { getSupabaseAdmin } from "./supabase";

const DEFAULT_PASSWORD = "olka5543514";

async function getAdminPassword(): Promise<string> {
  try {
    const supabase = getSupabaseAdmin();
    const { data } = await supabase
      .from("site_content")
      .select("value")
      .eq("key", "admin_password")
      .single();
    if (data?.value) return data.value as string;
  } catch {
    // table may not exist yet
  }
  return DEFAULT_PASSWORD;
}

export async function verifyPassword(password: string): Promise<boolean> {
  const stored = await getAdminPassword();
  return password === stored;
}

export async function changePassword(
  oldPassword: string,
  newPassword: string
): Promise<boolean> {
  const isValid = await verifyPassword(oldPassword);
  if (!isValid) return false;

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("site_content")
    .upsert(
      {
        key: "admin_password",
        value: newPassword,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key" }
    );

  return !error;
}

function makeToken(password: string): string {
  return Buffer.from(`admin:${password}:${Date.now()}`).toString("base64");
}

function extractPasswordFromToken(token: string): string | null {
  try {
    const decoded = Buffer.from(token, "base64").toString();
    const firstColon = decoded.indexOf(":");
    const lastColon = decoded.lastIndexOf(":");
    if (firstColon > 0 && lastColon > firstColon) {
      const prefix = decoded.slice(0, firstColon);
      if (prefix === "admin") return decoded.slice(firstColon + 1, lastColon);
    }
  } catch {
    // invalid token
  }
  return null;
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) return false;

  const tokenPassword = extractPasswordFromToken(token);
  if (!tokenPassword) return false;

  const stored = await getAdminPassword();
  return tokenPassword === stored;
}

export function createAuthToken(password: string): string {
  return makeToken(password);
}
