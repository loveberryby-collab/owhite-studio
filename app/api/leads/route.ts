import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { Resend } from "resend";

interface LeadPayload {
  name: string;
  contact: string;
  project_type?: string;
  message: string;
  budget?: string;
}

interface LeadData {
  name: string;
  contact: string;
  project_type: string | null;
  message: string;
  budget: string | null;
}

const NOTIFICATION_EMAIL = "5543514@gmail.com";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

async function sendNotification(lead: LeadData) {
  const resend = getResend();
  if (!resend) return;

  const projectType = lead.project_type || "Не указан";
  const budget = lead.budget || "Не указан";

  try {
    await resend.emails.send({
      from: "OWhite Studio <onboarding@resend.dev>",
      to: NOTIFICATION_EMAIL,
      subject: `Заявка — ${projectType}`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Имя</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(lead.name)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Контакт</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(lead.contact)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Тип проекта</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(projectType)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Описание</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(lead.message)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Бюджет</td><td style="padding:8px">${escapeHtml(budget)}</td></tr>
        </table>
      `,
    });
  } catch (err) {
    console.error("Email notification error:", err);
  }
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

    const lead: LeadData = {
      name: body.name.trim(),
      contact: body.contact.trim(),
      project_type: body.project_type?.trim() || null,
      message: body.message.trim(),
      budget: body.budget?.trim() || null,
    };

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("leads").insert(lead);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Ошибка сохранения заявки" },
        { status: 500 }
      );
    }

    await sendNotification(lead);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Ошибка обработки запроса" },
      { status: 500 }
    );
  }
}
