import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    const { buildLiveNewsPayload } = await import("@/lib/live-news");
    const payload = await buildLiveNewsPayload();
    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("[api/news/live] Failed to build live news payload", error);
    return NextResponse.json({ error: "Unable to fetch live news." }, { status: 500 });
  }
}
