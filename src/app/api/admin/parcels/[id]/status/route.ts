import { NextResponse } from "next/server";
import type { ParcelStatus } from "@/lib/admin-order-spec";
import { requireAdminSession } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { setParcelStatus } from "@/lib/parcel-db";
import { parcelStatusIsValid } from "@/lib/parcel-status";
import { maybeAutoNotifyAfterStatus, sendParcelStatusEmail } from "@/lib/email/send-status-email";

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await context.params;

  let body: { status?: string; sendEmail?: boolean; refreshCopy?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const statusRaw = body.status ?? "";
  if (!parcelStatusIsValid(statusRaw)) {
    return NextResponse.json({ error: "Statut invalide" }, { status: 400 });
  }

  const before = await prisma.parcel.findUnique({ where: { id } });
  if (!before) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const previousStatus = before.status as ParcelStatus;

  const parcel = await setParcelStatus(id, statusRaw, { refreshCopy: body.refreshCopy !== false });
  if (!parcel) return NextResponse.json({ error: "Update failed" }, { status: 500 });

  let emailResult = null;
  if (body.sendEmail === true) {
    emailResult = await sendParcelStatusEmail(parcel);
  } else {
    emailResult = await maybeAutoNotifyAfterStatus(parcel, previousStatus);
  }

  return NextResponse.json({ parcel, email: emailResult });
}
