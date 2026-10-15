import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { sendParcelStatusEmail } from "@/lib/email/send-status-email";

export async function POST(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await context.params;

  const parcel = await prisma.parcel.findUnique({
    where: { id },
    include: {
      events: { orderBy: { sortOrder: "asc" } },
      emailLogs: { orderBy: { createdAt: "desc" }, take: 5 },
    },
  });
  if (!parcel) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const email = await sendParcelStatusEmail(parcel);
  if (!email.ok) {
    return NextResponse.json({ error: email.error ?? "send failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true, id: email.id });
}
