import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Master Prince — Full Stack Developer & Applied AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#F3F1EC",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: "#246bb8",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 24, color: "#246bb8", fontWeight: 600, letterSpacing: 2 }}>
            AVAILABLE FOR FREELANCE WORK
          </div>
        </div>
        <div style={{ fontSize: 96, color: "#2D2A26", fontWeight: 700, lineHeight: 1.05, display: "flex" }}>
          Master Prince
        </div>
        <div style={{ fontSize: 38, color: "#2D2A26", marginTop: 24, display: "flex", maxWidth: 950 }}>
          Full Stack Developer &amp; Applied AI Engineer
        </div>
        <div style={{ fontSize: 26, color: "#5c584f", marginTop: 20, display: "flex", maxWidth: 900 }}>
          AI systems, multi-agent automation, and full-stack products — built in Delhi.
        </div>
      </div>
    ),
    { ...size }
  );
}
