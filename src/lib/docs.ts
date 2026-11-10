export interface DocPage {
  slug: string;
  title: string;
  description: string;
  icon: "book" | "map" | "cash" | "store" | "brush" | "question";
}

export const DOC_PAGES: DocPage[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description:
      "Install Wayfinder and add the map block to your Shopify theme in under 5 minutes.",
    icon: "book",
  },
  {
    slug: "map-customization",
    title: "Map Customization",
    description:
      "Match the map to your theme: colors, sizes, mobile layout, the date picker, and every display option.",
    icon: "brush",
  },
  {
    slug: "delivery-zones",
    title: "Delivery Zones",
    description:
      "Learn how to draw, edit, and manage delivery zones directly on the map.",
    icon: "map",
  },
  {
    slug: "pickup-zones",
    title: "Pickup Zones",
    description:
      "Add your store locations as map pins customers can select for pickup.",
    icon: "store",
  },
  {
    slug: "shipping-rates",
    title: "Shipping Rates",
    description:
      "Configure zone-based rates with Shopify's Carrier Calculated Shipping API.",
    icon: "cash",
  },
  {
    slug: "faq",
    title: "FAQ",
    description:
      "Quick answers about themes, API keys, Shopify plans, and what Wayfinder can do.",
    icon: "question",
  },
];

export const docHref = (slug: string) => `/docs/${slug}`;

export const SHOPIFY_URL = "https://apps.shopify.com/customer-gps-coordinates";
export const CONTACT_EMAIL = "contact@wayfinder.delivery";
