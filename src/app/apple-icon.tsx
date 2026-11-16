import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f6f1ed" }}>
        <div style={{ width: 116, height: 144, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: "linear-gradient(180deg, #d3c5e6, #ecb9c6 55%, #f8d0b4)" }}>
          <div style={{ width: 78, height: 100, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: "linear-gradient(180deg, #a08bd0, #d9718c 52%, #f0a680)" }}>
            <div style={{ width: 42, height: 56, borderRadius: "50%", background: "#fff3e4" }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
