import Image from "next/image";

interface Feature {
  screenshot: string;
  alt: string;
  number: string;
  title: string;
  description: string;
  tag: string;
}

const features: Feature[] = [
  {
    screenshot: "/screenshots/screenshot5.webp",
    alt: "Embed the Wayfinder map block in Shopify theme editor",
    number: "01",
    tag: "Theme Integration",
    title: "Embed the Map Anywhere",
    description:
      "Drag and drop the Wayfinder map block into any page of your Shopify theme - cart, product, or custom pages. No code needed.",
  },
  {
    screenshot: "/screenshots/screenshot1.webp",
    alt: "Create delivery zones on the map",
    number: "02",
    tag: "Delivery Zones",
    title: "Define Delivery Zones",
    description:
      "Draw precise delivery boundaries on the map to control where you deliver and prevent out-of-range orders from being placed.",
  },
  {
    screenshot: "/screenshots/screenshot2.webp",
    alt: "Zone-based shipping rates shown at checkout",
    number: "03",
    tag: "Shipping Rates",
    title: "Zone-Based Shipping Rates",
    description:
      "Charge different delivery fees per zone. Rates surface automatically at checkout via Shopify's Carrier Calculated Shipping API.",
  },
  {
    screenshot: "/screenshots/screenshot3.webp",
    alt: "Customize map colors and style",
    number: "04",
    tag: "Customization",
    title: "Customize Your Map Style",
    description:
      "Match the map to your brand with full control over colors, height, width, and border styles for a seamless storefront experience.",
  },
  {
    screenshot: "/screenshots/screenshot4.webp",
    alt: "Order details showing customer latitude and longitude",
    number: "05",
    tag: "Order Management",
    title: "Order-Level Location Tracking",
    description:
      "Customer coordinates and a direct map link appear on every order in your Shopify admin for fast, accurate fulfillment.",
  },
  {
    screenshot: "/screenshots/screenshot6.webp",
    alt: "GPS coordinates captured as product customization",
    number: "06",
    tag: "Product Customization",
    title: "GPS Coordinates as Product Notes",
    description:
      "Capture customer GPS coordinates as a product customization - perfect for jewelry engravings, personalized prints, and location-based gifts.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-5 tracking-wide uppercase">
            Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything you need for{" "}
            <span className="text-blue-600">precise local delivery</span>
          </h2>
          <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From interactive maps to zone-based rates, Wayfinder gives you every
            tool to deliver smarter - right out of the box.
          </p>
        </div>

        {/* Alternating feature rows */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {features.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={feature.number}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-4 tracking-wide uppercase">
                    {feature.tag}
                  </div>
                  <p className="text-8xl font-extrabold text-blue-50 leading-none select-none -mb-6">
                    {feature.number}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-slate-500 leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>

                {/* Screenshot */}
                <div className="flex-1 min-w-0 w-full">
                  <div className="relative">
                    {/* Background tint */}
                    <div className="absolute -inset-6 bg-gradient-to-br from-blue-50/80 to-transparent rounded-3xl" />
                    <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-blue-100/60 ring-1 ring-blue-100 hover:shadow-2xl hover:shadow-blue-200 hover:-translate-y-1.5 transition-all duration-300">
                      <Image
                        src={feature.screenshot}
                        alt={feature.alt}
                        width={1456}
                        height={816}
                        className="w-full h-auto"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
