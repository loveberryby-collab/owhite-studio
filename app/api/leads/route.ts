import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

interface LeadPayload {
  name: string;
  contact: string;
  project_type?: string;
  message: string;
  budget?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    if (!body.name?.trim() || !body.contact?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: "Имя, контакт и описание задачи обязательны" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("leads").insert({
      name: body.name.trim(),
      contact: body.contact.trim(),
      project_type: body.project_type?.trim() || null,
      message: body.message.trim(),
      budget: body.budget?.trim() || null,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Ошибка сохранения заявки" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Ошибка обработки запроса" },
      { status: 500 }
    );
  }
}
