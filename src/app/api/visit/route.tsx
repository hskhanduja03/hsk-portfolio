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

    if (!data) {
      data = await db.siteAnalytics.create({
        data: {
          siteName,
          visitors: 500,
        },
      });

      return NextResponse.json({
        success: true,
        visitor: 1,
      });
    }

    // If it exists, update the visitor count
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
