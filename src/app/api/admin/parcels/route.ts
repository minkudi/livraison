import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/admin-auth";
import { createParcel, listParcels } from "@/lib/parcel-db";
import { notificationLocaleIsValid, parcelStatusIsValid } from "@/lib/parcel-status";
import { sendParcelStatusEmail } from "@/lib/email/send-status-email";

export async function GET() {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const parcels = await listParcels();
  return NextResponse.json({ parcels });
}

export async function POST(request: Request) {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const recipientEmail = typeof body.recipientEmail === "string" ? body.recipientEmail : "";
  const notificationLocale = typeof body.notificationLocale === "string" ? body.notificationLocale : "";
  const destination = typeof body.destination === "string" ? body.destination : "";
  const estimatedDelivery =
    typeof body.estimatedDelivery === "string" ? body.estimatedDelivery : undefined;
  const autoNotify = body.autoNotify === true;
  const sendWelcome = body.sendEmail === true;
  const statusRaw = typeof body.status === "string" ? body.status : "processing";

  if (!recipientEmail.includes("@")) {
    return NextResponse.json({ error: "E-mail destinataire invalide" }, { status: 400 });
  }
  if (!notificationLocaleIsValid(notificationLocale)) {
    return NextResponse.json({ error: "Langue notification invalide" }, { status: 400 });
  }
  const status = parcelStatusIsValid(statusRaw) ? statusRaw : "processing";

  const parcel = await createParcel({
    recipientEmail,
    notificationLocale,
    destination,
    estimatedDelivery,
    autoNotify,
    status,
  });

  if (sendWelcome) {
    const full = await import("@/lib/parcel-db").then((m) =>
      m.getParcelByTracking(parcel.trackingNumber),
    );
    if (full) await sendParcelStatusEmail(full);
  }

  return NextResponse.json({ parcel });
}
