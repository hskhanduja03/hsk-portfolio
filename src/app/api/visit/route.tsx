import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const db = new PrismaClient();
  try {
    const siteName = "portfolio";

    // Try to find the record
    let data = await db.siteAnalytics.findUnique({
      where: { siteName },
    });

    if(!data)return;
    const newVisitCount = data.visitors + 1;

    await db.siteAnalytics.update({
      where: { siteName },
      data: { visitors: newVisitCount },
    });

    return NextResponse.json({
      success: true,
      visitor: newVisitCount,
    });
  } catch (e: any) {
    return NextResponse.json({
      success: false,
      message: `${e}`,
    });
  } finally {
    await db.$disconnect();
  }
}
