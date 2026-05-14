import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { setContent, getAllContent } from "@/lib/content";
import { defaultContent } from "@/lib/default-content";

export async function POST() {
  const isAuth = await isAdminAuthenticated();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const existing = await getAllContent();
  let seeded = 0;

  for (const [key, value] of Object.entries(defaultContent)) {
    if (!(key in existing)) {
      await setContent(key, value);
      seeded++;
    }
  }

  return NextResponse.json({ success: true, seeded });
}
