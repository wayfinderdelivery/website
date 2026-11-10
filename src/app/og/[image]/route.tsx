import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { OG_PAGES } from "@/lib/seo";

// Pre-render every image at build time (required for `output: "export"`).
// Using a route with a real ".png" filename, rather than the opengraph-image
// file convention, guarantees GitHub Pages serves them as image/png.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return OG_PAGES.map((page) => ({ image: `${page.slug}.png` }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ image: string }> }
) {
  const { image } = await params;
  const page = OG_PAGES.find((p) => `${p.slug}.png` === image);
  if (!page) return new Response("Not found", { status: 404 });

  const root = process.cwd();
  const [logo, dmSansMedium, dmSansExtraBold] = await Promise.all([
    readFile(join(root, "public/logo.png"), "base64"),
    // DM Sans (SIL Open Font License), same heading font as the site.
    readFile(join(root, "src/assets/fonts/DMSans-500.ttf")),
    readFile(join(root, "src/assets/fonts/DMSans-800.ttf")),
  ]);
  const isHome = page.slug === "home";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #eff6ff 0%, #dbeafe 55%, #bfdbfe 100%)",
          fontFamily: "DM Sans",
          position: "relative",
        }}
      >
        {/* Decorative map pin, bottom right */}
        <svg
          width="360"
          height="360"
          viewBox="0 0 20 20"
          style={{ position: "absolute", right: -40, bottom: -60, opacity: 0.12 }}
        >
          <path
            fill="#2563eb"
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>

        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${logo}`}
            width={72}
            height={72}
            style={{ borderRadius: 18 }}
            alt=""
          />
          <div style={{ fontSize: 40, fontWeight: 800, color: "#0f172a" }}>
            Wayfinder
          </div>
        </div>

        {/* Title block */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 18px",
              borderRadius: 999,
              background: "#2563eb",
              color: "white",
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            {page.eyebrow}
          </div>
          <div
            style={{
              fontSize: isHome ? 72 : 88,
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {page.title}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 32,
              fontWeight: 500,
              color: "#475569",
              lineHeight: 1.35,
            }}
          >
            {page.subtitle}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", fontSize: 26, color: "#2563eb", fontWeight: 800 }}>
          wayfinder.delivery
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "DM Sans", data: dmSansMedium, weight: 500, style: "normal" },
        { name: "DM Sans", data: dmSansExtraBold, weight: 800, style: "normal" },
      ],
    }
  );
}
