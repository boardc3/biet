import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

/**
 * Share image for every page: Biet's portrait beside the page's line, set in
 * Bodoni. This is what iMessage, WhatsApp, LinkedIn, X and Facebook show. Pages request it as /og?line=Their%20line.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const line = (searchParams.get("line") ?? "An ongoing installation.").slice(0, 80);
  const font = await readFile(path.join(process.cwd(), "src/fonts/og/BodoniModa-Regular.woff"));
  const sans = await readFile(path.join(process.cwd(), "src/fonts/og/Jost-Regular.woff"));
  const portrait = await readFile(path.join(process.cwd(), "src/fonts/og/portrait.jpg"));
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  const rings = [
    { inset: 0, bg: "#efe7ee" },
    { inset: 30, bg: "#e8d8e8" },
    { inset: 60, bg: "#e2c4de" },
    { inset: 90, bg: "#ecb9c6" },
  ];

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f6f1ed", color: "#2a1823", position: "relative" }}>
        <div style={{ position: "absolute", right: 40, top: -30, width: 560, height: 690, display: "flex" }}>
          {rings.map((r) => (
            <div
              key={r.inset}
              style={{
                position: "absolute",
                left: r.inset,
                right: r.inset,
                top: r.inset,
                bottom: r.inset,
                borderRadius: "50%",
                background: r.bg,
              }}
            />
          ))}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portraitSrc}
          alt=""
          width={380}
          height={475}
          style={{
            position: "absolute",
            right: 130,
            top: 78,
            width: 380,
            height: 475,
            objectFit: "cover",
            borderTopLeftRadius: 190,
            borderTopRightRadius: 190,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", width: 660 }}>
          <div style={{ display: "flex", fontFamily: "Jost", fontSize: 30 }}>Biet Simkin</div>
          <div style={{ display: "flex", fontFamily: "Bodoni Moda", fontSize: line.length > 30 ? 58 : line.length > 18 ? 72 : 88, lineHeight: 1.04, letterSpacing: -1.5 }}>
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
