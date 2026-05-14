import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getContent, setContent, getAllContent } from "@/lib/content";
import { defaultContent } from "@/lib/default-content";

export async function GET(request: Request) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  if (key) {
    const value = await getContent(key);
    const fallback = defaultContent[key] ?? null;
    return NextResponse.json({ key, value: value ?? fallback });
  }

  const all = await getAllContent();
  const merged: Record<string, unknown> = {};
  for (const k of Object.keys(defaultContent)) {
    merged[k] = all[k] ?? defaultContent[k];
  }
  for (const k of Object.keys(all)) {
    if (!(k in merged)) merged[k] = all[k];
  }
  return NextResponse.json(merged);
}

export async function POST(request: Request) {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { key, value } = (await request.json()) as {
      key?: string;
      value?: unknown;
    };

    if (!key || value === undefined) {
      return NextResponse.json(
        { error: "key and value required" },
        { status: 400 }
      );
    }

    const ok = await setContent(key, value);
    if (!ok) {
      return NextResponse.json(
        { error: "Failed to save" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Ошибка сохранения" },
      { status: 500 }
    );
  }
}
