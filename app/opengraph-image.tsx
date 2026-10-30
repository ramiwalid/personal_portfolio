import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "#08080a",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 28, color: "#8a8a93", letterSpacing: 4, textTransform: "uppercase" }}>
          {profile.role}
        </div>
        <div style={{ fontSize: 128, fontWeight: 700, marginTop: 16, letterSpacing: -4 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 34, color: "#c4c4cc", marginTop: 24, maxWidth: 900, lineHeight: 1.35 }}>
          {profile.tagline}
        </div>
        <div style={{ fontSize: 26, color: "#8a8a93", marginTop: 48 }}>ramiwalid.com</div>
      </div>
    ),
    size,
  );
}
