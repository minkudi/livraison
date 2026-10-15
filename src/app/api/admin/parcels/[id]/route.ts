import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { updateParcel } from "@/lib/parcel-db";
import { notificationLocaleIsValid } from "@/lib/parcel-status";

export async function GET(
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
      emailLogs: { orderBy: { createdAt: "desc" }, take: 30 },
    },
  });
  if (!parcel) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ parcel });
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await context.params;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const notificationLocale =
    typeof body.notificationLocale === "string" && notificationLocaleIsValid(body.notificationLocale)
      ? body.notificationLocale
      : undefined;

  const parcel = await updateParcel(id, {
    recipientEmail: typeof body.recipientEmail === "string" ? body.recipientEmail : undefined,
    notificationLocale,
    destination: typeof body.destination === "string" ? body.destination : undefined,
    estimatedDelivery:
      typeof body.estimatedDelivery === "string" ? body.estimatedDelivery : undefined,
    autoNotify: typeof body.autoNotify === "boolean" ? body.autoNotify : undefined,
    statusTitle: typeof body.statusTitle === "string" ? body.statusTitle : undefined,
    statusDetail: typeof body.statusDetail === "string" ? body.statusDetail : undefined,
  });

  return NextResponse.json({ parcel });
}
