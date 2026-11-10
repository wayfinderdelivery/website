import type { Metadata } from "next";
import { docMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  DocArticle,
  Section,
  SubHeading,
  Steps,
  Step,
  Callout,
  List,
  UI,
  Table,
} from "@/components/docs/Prose";

export const metadata: Metadata = docMetadata(
  "delivery-zones",
  "Create Wayfinder delivery zones by searching a region, drawing on the map, or entering postal codes, and set up pickup stores."
);

export default function DeliveryZones() {
  return (
    <DocArticle slug="delivery-zones">
      <Section id="overview" title="What is a delivery zone?">
        <p>
          A delivery zone is an area you deliver to, with a name and a price.
          When a customer drops a pin on the map, Wayfinder checks which zone
          it falls in. That decides whether you can deliver there and how much
          to charge.
        </p>
        <p>
          Zones are listed on the <UI>Delivery Zones &amp; Rates</UI> page.
          If <UI>Show Delivery Zone Boundaries</UI> is on in the Map block,
          customers see your zones on the map too.
        </p>
      </Section>

      <Section id="create" title="Create a zone">
        <Steps>
          <Step title="Open Delivery Zones & Rates">
            <p>Click the button to add a new zone. The <UI>Delivery Zone</UI> window opens.</p>
          </Step>
          <Step title="Name it">
            <p>
              Enter a <UI>Zone Name</UI> such as &ldquo;Downtown&rdquo; or
              &ldquo;Within 10 km&rdquo;. Customers see this name next to the
              rate at checkout.
            </p>
          </Step>
          <Step title="Define the area">
            <p>Use one of the three tabs, described below.</p>
          </Step>
          <Step title="Set a rate and save">
            <p>
              Enter a <UI>Rate Name</UI> (e.g. &ldquo;Local Delivery&rdquo;) and a{" "}
              <UI>Price</UI>, then save. See{" "}
              <Link href="/docs/shipping-rates" className="text-blue-600 hover:underline">
                Shipping Rates
              </Link>{" "}
              for how this shows up at checkout.
            </p>
          </Step>
        </Steps>
      </Section>

      <Section id="methods" title="Three ways to define an area">
        <Table
          head={["Tab", "Best for", "How it works"]}
          rows={[
            [
              <UI key="s">Search by Location</UI>,
              "Whole cities, suburbs, or regions",
              "Search for a place name and Wayfinder uses its official boundary as the zone.",
            ],
            [
              <UI key="d">Draw on Map</UI>,
              "Custom areas that don't follow city lines",
              "Click points around the area on the map to draw your own shape.",
            ],
            [
              <UI key="p">Postal Codes</UI>,
              "Delivering by ZIP or postcode",
              "Pick a country and enter one code per line, or separate them with commas.",
            ],
          ]}
        />

        <SubHeading>Postal code zones</SubHeading>
        <List>
          <li>
            Matching uses the code itself, so it works in any country. A
            shorter prefix matches every code that starts with it (for example,{" "}
            <strong>H1A</strong> matches <strong>H1A 0A1</strong>).
          </li>
          <li>
            After you save, Wayfinder fetches the map outline for each code in
            the background. You&rsquo;ll see &ldquo;Processing postal code map
            data&hellip;&rdquo; while that runs. Long lists can take a minute.
          </li>
          <li>
            Detailed outlines are drawn for the United States (ZIP codes),
            Canada (the first three characters, e.g. <strong>H1A</strong>) and
            Australia (postcodes). Elsewhere, Wayfinder shows an approximate
            location, but rate matching still uses the exact code.
          </li>
        </List>
      </Section>

      <Section id="manage" title="Edit or delete zones">
        <p>
          Click a zone on the <UI>Delivery Zones &amp; Rates</UI> page to change
          its name, area, or price. Use the delete action to remove it.
          Changes apply to new checkouts straight away.
        </p>
        <Callout type="tip">
          <p>
            Zones can overlap. If a customer&rsquo;s pin is inside two zones,
            they&rsquo;ll see both rates at checkout and can pick one. This lets
            you offer, say, a cheap &ldquo;Standard&rdquo; and a pricier
            &ldquo;Express&rdquo; option over the same area.
          </p>
        </Callout>
      </Section>

      <Section id="product-rules" title="Product rules">
        <p>
          Product rules change how specific products are treated in a single
          zone. Use them to stop certain products being delivered to an area,
          or to deliver certain products there for free. Products without a
          rule get the zone&rsquo;s normal rate.
        </p>

        <Table
          head={["Rule", "What happens in this zone", "Example"]}
          rows={[
            [
              <UI key="e">Excluded</UI>,
              "The product can't be delivered here. If it's in the cart when the customer confirms a location in this zone, the location is rejected.",
              "Frozen or fragile items only delivered close to the store",
            ],
            [
              <UI key="f">Free</UI>,
              "The product ships free in this zone. If every item in the cart is Free, the customer gets free delivery.",
              "Free local delivery on bulky items like furniture",
            ],
          ]}
        />

        <SubHeading>Add a rule</SubHeading>
        <Steps>
          <Step title="Open the zone">
            <p>
              On <UI>Delivery Zones &amp; Rates</UI>, create a zone or click an
              existing one to edit it.
            </p>
          </Step>
          <Step title="Find the product">
            <p>
              Scroll to <UI>Product Rules</UI> and start typing in{" "}
              <UI>Add product</UI>. Choose the product from the results.
            </p>
          </Step>
          <Step title="Choose Excluded or Free">
            <p>
              The product is added as <UI>Excluded</UI>. Use the dropdown next
              to it to switch it to <UI>Free</UI>. Click <UI>Remove</UI> to
              delete a rule.
            </p>
          </Step>
          <Step title="Save the zone">
            <p>Rules take effect as soon as the zone is saved.</p>
          </Step>
        </Steps>
        <p>
          Rules apply to the whole product, including all of its variants. To
          treat a product differently in several areas, add a rule to each of
          those zones.
        </p>

        <SubHeading>What customers see</SubHeading>
        <List>
          <li>
            <strong>Excluded:</strong> when the customer confirms a location
            in the zone, the map shows{" "}
            <em>&ldquo;Product name is not available for delivery to this
            area.&rdquo;</em> They can remove the product or choose a
            different location.
          </li>
          <li>
            <strong>Free, whole cart:</strong> checkout shows a single{" "}
            <strong>Free Delivery</strong> option instead of the zone&rsquo;s
            rate.
          </li>
          <li>
            <strong>Free, mixed cart:</strong> if even one item isn&rsquo;t
            Free, the customer pays the zone&rsquo;s normal rate. The rate
            isn&rsquo;t reduced.
          </li>
        </List>

        <Callout type="warning" title="Make exclusions stick">
          <p>
            Exclusions are checked when the customer confirms a location on
            the Wayfinder map. To stop customers skipping the map and checking
            out anyway, turn on <UI>Make location selection mandatory</UI> in{" "}
            <UI>Map Settings</UI>.
          </p>
        </Callout>

        <SubHeading>Overlapping zones</SubHeading>
        <p>
          If a location is inside more than one zone and the rules disagree,
          the stricter one wins: <UI>Excluded</UI> beats <UI>Free</UI>, which
          beats no rule.
        </p>

        <Callout type="info" title="Custom per-product prices">
          <p>
            Product rules can exclude a product or make it free, but they
            can&rsquo;t set a different price for one product. To charge
            more for some deliveries, create an extra zone with its own rate,
            e.g. a pricier zone over the same area for large-item delivery.
          </p>
        </Callout>
      </Section>

      <Section id="outside" title="When a customer is outside every zone">
        <p>
          When a pin lands outside all your zones, the map shows your{" "}
          <UI>Location Unavailable Message</UI>, which defaults to
          &ldquo;This address is outside our delivery zone&rdquo;. You can change it in{" "}
          <UI>Map Settings</UI>. Wayfinder won&rsquo;t offer any of its
          delivery rates for that address.
        </p>
      </Section>

      <Section id="pickup" title="Pickup stores">
        <p>
          If customers can also collect orders in person, add your store
          locations as pickup pins. See the{" "}
          <Link href="/docs/pickup-zones" className="text-blue-600 hover:underline">
            Pickup Zones guide
          </Link>
          .
        </p>
      </Section>
    </DocArticle>
  );
}
