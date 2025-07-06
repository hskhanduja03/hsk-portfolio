import { NextResponse } from "next/server";

export async function GET() {
  const resumeLink =
    process.env.RESUME_LINK ||
    "https://drive.google.com/file/d/1iEV5MRAxVPCnq37HSsAzjTni9xT0waT6/view";

  return NextResponse.redirect(resumeLink, 302);
}
