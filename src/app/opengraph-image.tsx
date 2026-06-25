import { ImageResponse } from "next/og";
import { brand } from "@/constants/site";
import { monogramSvg } from "@/lib/monogram";

// Edge runtime avoids the Node fileURLToPath crash caused by the "&"/spaces
// in this project's folder path when @vercel/og loads its font assets.
export const runtime = "edge";

export const alt = `${brand.name} — Premium Web Design & Development`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Monogram with a white "A" (sits on the dark OG background), as a data URI.
  const logoDataUri = `data:image/svg+xml;base64,${btoa(
    monogramSvg({ a: "#ffffff" })
  )}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle at 78% 25%, rgba(37,99,235,0.55) 0%, rgba(5,5,5,0) 50%), radial-gradient(circle at 12% 95%, rgba(29,78,216,0.45) 0%, rgba(5,5,5,0) 45%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        {/* monogram */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoDataUri}
          width={170}
          height={130}
          alt=""
          style={{ marginBottom: "34px" }}
        />

        {/* badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 24,
            color: "#93c5fd",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#3b82f6",
            }}
          />
          Premium Web Design & Development
        </div>

        {/* brand name */}
        <div
          style={{
            display: "flex",
            fontSize: 120,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-4px",
          }}
        >
          {brand.shortName}
        </div>

        {/* tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 38,
            color: "rgba(255,255,255,0.65)",
            marginTop: "24px",
            maxWidth: "850px",
          }}
        >
          {brand.tagline}
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "60px",
          }}
        >
          {["Websites", "Landing Pages", "Ecommerce", "Web Apps"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: 24,
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "999px",
                padding: "10px 24px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
