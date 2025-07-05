import { NextResponse } from "next/server";

export async function GET() {
  const resumeLink =
    process.env.RESUME_LINK ||
    "https://drive.google.com/file/d/your-default-resume-id/view";

  return NextResponse.redirect(resumeLink, 302);
}
