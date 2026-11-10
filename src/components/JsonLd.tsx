/**
 * Renders schema.org structured data. Content comes from constants in
 * src/lib/seo.ts (never user input); "<" is escaped so no string can close
 * the script tag.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
