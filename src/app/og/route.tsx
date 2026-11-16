import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

/**
 * Share image for every page: the page's line set in Bodoni over the dawn
 * light. Pages request it as /og?line=Their%20line.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const line = (searchParams.get("line") ?? "An ongoing installation.").slice(0, 80);
  const font = await readFile(path.join(process.cwd(), "src/fonts/og/BodoniModa-Regular.woff"));
  const sans = await readFile(path.join(process.cwd(), "src/fonts/og/Jost-Regular.woff"));

  const rings = [
    { inset: 0, bg: "linear-gradient(180deg, #efe7ee, #f2e2e2 55%, #f5e8de)" },
    { inset: 46, bg: "linear-gradient(180deg, #e4d9ec, #f0d2d8 55%, #f7dfcd)" },
    { inset: 92, bg: "linear-gradient(180deg, #d3c5e6, #ecb9c6 55%, #f8d0b4)" },
    { inset: 138, bg: "linear-gradient(180deg, #bfaedd, #e597ae 52%, #f8c3a0)" },
    { inset: 184, bg: "linear-gradient(180deg, #fde6cf, #fff8ee 55%, #f4bcb2)" },
  ];

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f6f1ed", color: "#2a1823", position: "relative" }}>
        <div style={{ position: "absolute", right: 70, top: 20, width: 472, height: 590, display: "flex" }}>
          {rings.map((r) => (
            <div
              key={r.inset}
              style={{
                position: "absolute",
                left: r.inset * 0.8,
                right: r.inset * 0.8,
                top: r.inset,
                bottom: r.inset,
                borderRadius: "50%",
                backgroundImage: r.bg,
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", width: 760 }}>
          <div style={{ display: "flex", fontFamily: "Jost", fontSize: 30 }}>Biet Simkin</div>
          <div style={{ display: "flex", fontFamily: "Bodoni Moda", fontSize: line.length > 34 ? 68 : 88, lineHeight: 1.04, letterSpacing: -1.5 }}>
            {line}
          </div>
          <div style={{ display: "flex", fontFamily: "Jost", fontSize: 24, color: "#6e5a66" }}>
            Spiritual teacher, best-selling author, artist
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Bodoni Moda", data: font, weight: 400, style: "normal" },
        { name: "Jost", data: sans, weight: 400, style: "normal" },
      ],
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=604800" },
    },
  );
}
