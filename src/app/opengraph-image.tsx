import { ImageResponse } from "next/og";
import { site } from "@/data/site-content";

export const alt = "Raízes em Movimento · NEABI IFPE Campus Garanhuns";
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
          background: "#1c1b1a",
          color: "#f2e6d6",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", right: 70, top: 70, width: 330, height: 300, background: "#1f6b4c", display: "flex" }} />
        <div style={{ position: "absolute", right: 150, top: 250, width: 300, height: 260, background: "#a33e2b", display: "flex" }} />
        <div style={{ position: "absolute", right: 240, top: 120, width: 170, height: 170, borderRadius: 9999, background: "#1c1b1a", border: "4px solid #f2e6d6", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 54, height: 54, borderRadius: 9999, background: "#f2b705", display: "flex" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 80px", width: 720 }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 26, fontWeight: 700, letterSpacing: 4, color: "#f2b705" }}>
            <div style={{ width: 60, height: 5, background: "#f2b705", marginRight: 18, display: "flex" }} />
            20 DE NOVEMBRO
          </div>
          <div style={{ fontSize: 104, fontWeight: 900, lineHeight: 0.95, marginTop: 24, textTransform: "uppercase" }}>
            {site.name}
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, marginTop: 34 }}>
            {`${site.org} · ${site.campus}`}
          </div>
        </div>
        <div style={{ position: "absolute", left: 0, bottom: 0, width: "100%", height: 14, background: "#f2b705", display: "flex" }} />
      </div>
    ),
    size,
  );
}
