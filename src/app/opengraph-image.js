import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "EA Towing tow truck with 24/7 towing and roadside assistance details";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const [truckData, logoData] = await Promise.all([
    readFile(join(process.cwd(), "src/app/truck.png"), "base64"),
    readFile(join(process.cwd(), "src/app/ea_towing_logo.png"), "base64"),
  ]);

  const truckSrc = `data:image/png;base64,${truckData}`;
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#111827",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <img
          src={truckSrc}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            inset: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(15, 23, 42, 0.94) 0%, rgba(15, 23, 42, 0.74) 46%, rgba(15, 23, 42, 0.24) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "690px",
            height: "100%",
            padding: "58px 64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
            <img
              src={logoSrc}
              alt=""
              style={{ width: "104px", height: "104px", objectFit: "contain" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1,
                textTransform: "uppercase",
                fontWeight: 900,
              }}
            >
              <span style={{ fontSize: "54px", letterSpacing: "0" }}>
                EA Towing
              </span>
              <span
                style={{
                  color: "#ff8c00",
                  fontSize: "25px",
                  marginTop: "10px",
                }}
              >
                Greater Toronto Area
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textTransform: "uppercase",
              fontWeight: 900,
              lineHeight: 0.92,
            }}
          >
            <span style={{ color: "#ff8c00", fontSize: "82px" }}>
              24/7 Towing
            </span>
            <span style={{ fontSize: "74px" }}>& Recovery</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              fontWeight: 800,
            }}
          >
            <div style={{ fontSize: "30px" }}>
              Roadside assistance when you need it most
            </div>
            <div
              style={{
                alignSelf: "flex-start",
                background: "#ff8c00",
                color: "#623200",
                padding: "16px 24px",
                fontSize: "38px",
                fontWeight: 900,
              }}
            >
              Call 647 772 2895
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
