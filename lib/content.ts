import { getSupabaseAdmin } from "./supabase";

export async function getContent<T>(key: string): Promise<T | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("site_content")
    .select("value")
    .eq("key", key)
    .single();

  if (error || !data) return null;
  return data.value as T;
}

export async function setContent<T>(key: string, value: T): Promise<boolean> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("site_content")
    .upsert(
      { key, value, updated_at: new Date().toISOString() },
      { onConflict: "key" }
    );

  return !error;
}

export async function getAllContent(): Promise<Record<string, unknown>> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("site_content")
    .select("key, value");

  if (error || !data) return {};

  const result: Record<string, unknown> = {};
  for (const row of data) {
    result[row.key] = row.value;
  }
  return result;
}
