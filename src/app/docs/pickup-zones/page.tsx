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
  Code,
  UI,
  Table,
} from "@/components/docs/Prose";

export const metadata: Metadata = docMetadata(
  "pickup-zones",
  "Add store locations to Wayfinder so customers can choose in-store pickup by selecting a store pin on the map."
);

export default function PickupZones() {
  return (
    <DocArticle slug="pickup-zones">
      <Section id="overview" title="How pickup works">
        <p>
          Pickup zones let customers collect orders from one of your stores
          instead of getting them delivered. Each store is a pin on the map:
        </p>
        <Steps>
          <Step title="The customer switches to pickup">
            <p>
              A <strong>Delivery / Pickup</strong> switcher appears above the
              map. Choosing pickup hides your delivery zones and zooms the map
              to your store pins.
            </p>
          </Step>
          <Step title="They choose a store">
            <p>
              Tapping a pin shows the store&rsquo;s name, address, and pickup
              price (or &ldquo;Free pickup&rdquo;). They click{" "}
              <UI>Select for pickup</UI>.
            </p>
          </Step>
          <Step title="Checkout offers that store">
            <p>
              At checkout, the only shipping option is{" "}
              <strong>&ldquo;Store name &mdash; Pickup&rdquo;</strong> with the
              store&rsquo;s address underneath, at the price you set.
            </p>
          </Step>
        </Steps>
      </Section>

      <Section id="add-store" title="Add a pickup store">
        <Steps>
          <Step title="Open Pickup Zones & Stores">
            <p>
              In the Wayfinder app, open <UI>Pickup Zones &amp; Stores</UI>{" "}
              from the sidebar and click <UI>Add Store</UI>.
            </p>
          </Step>
          <Step title="Enter a store name">
            <p>
              Customers see the <UI>Store Name</UI> on the map and at checkout,
              so make it clear, e.g. &ldquo;Downtown Toronto Store&rdquo;.
            </p>
          </Step>
          <Step title="Search for the address">
            <p>
              Type into <UI>Store Address</UI> and pick the right result. A
              map preview shows exactly where the pin will go. Check it before
              saving, since customers will use it for directions.
            </p>
          </Step>
          <Step title="Set a pickup rate (optional)">
            <p>
              Enter a <UI>Pickup Rate</UI> in your store currency, or leave it
              blank for free pickup.
            </p>
          </Step>
          <Step title="Save">
            <p>
              The store appears under <UI>Your Pickup Zones</UI>. Once you have
              at least one store, a <UI>Store Locations</UI> map shows all your
              pins together.
            </p>
          </Step>
        </Steps>
        <p>
          To change a store&rsquo;s name, address, or rate, click{" "}
          <UI>Edit</UI> next to it. To remove it, click <UI>Delete</UI> and
          confirm. Changes show on your storefront right away.
        </p>
      </Section>

      <Section id="storefront" title="Show pickup on your storefront">
        <p>
          Pickup is turned on in the Map block in your theme editor (
          <UI>Online Store → Themes → Customize</UI>, then select the
          Wayfinder <UI>Map</UI> block):
        </p>
        <Table
          head={["Block setting", "What it does"]}
          rows={[
            [
              <UI key="a">Enable Pickup or Local Delivery Buttons</UI>,
              <>
                <strong>Required.</strong> Adds the Delivery / Pickup switcher
                above the map. Without it, customers can&rsquo;t reach pickup.
              </>,
            ],
            [
              <UI key="b">Show Pickup Locations in Delivery Mode</UI>,
              "Also shows store pins while the customer is in delivery mode. Off by default, so pins only appear after switching to pickup.",
            ],
            [
              <UI key="c">Pickup Store Pin Color</UI>,
              <>
                Color of the store pins and the <UI>Select for pickup</UI>{" "}
                button. Default <Code>#e85d04</Code> (orange), so they stand
                out from the delivery pin.
              </>,
            ],
            [
              <UI key="d">Delivery or Pickup Selection → Headline Alignment</UI>,
              "Alignment of the headline above the switcher.",
            ],
          ]}
        />
        <p>
          The switcher&rsquo;s wording can be changed in{" "}
          <UI>Map Settings</UI> with <UI>Delivery &amp; Pickup Headline</UI>,{" "}
          <UI>Local Delivery Text</UI>, and <UI>Pickup Text</UI> (default
          &ldquo;Pick Up&rdquo;).
        </p>
        <Callout type="tip">
          <p>
            If <UI>Hide Map Canvas</UI> is turned on in the block, customers
            in pickup mode see a list of your stores instead of a map, each
            with its own <UI>Select for pickup</UI> button.
          </p>
        </Callout>
      </Section>

      <Section id="checkout" title="Pickup at checkout">
        <p>
          Pickup rates use the same carrier service as delivery rates. Both
          are needed before pickup shows at checkout:
        </p>
        <List>
          <li>
            The Wayfinder carrier service is installed. The{" "}
            <UI>Carrier Service Status</UI> panel is on the Pickup Zones &amp;
            Stores page too.
          </li>
          <li>
            Wayfinder is{" "}
            <Link href="/docs/shipping-rates#shipping-profile" className="text-blue-600 hover:underline">
              added to your Shopify shipping profile
            </Link>{" "}
            for the region your stores are in.
          </li>
        </List>
        <p>
          When a pickup store is selected, Wayfinder returns only that
          store&rsquo;s pickup rate, not your delivery zone rates. Customers who
          change their mind can switch back to delivery, which clears the
          selected store.
        </p>
        <Callout type="warning" title="Using Shopify's built-in Local pickup too?">
          <p>
            Shopify&rsquo;s own <UI>Local pickup</UI> (under{" "}
            <UI>Settings → Shipping and delivery</UI>) is separate from
            Wayfinder. If both are on, customers may see pickup twice at
            checkout. Most merchants turn Shopify&rsquo;s off once Wayfinder
            pickup is set up.
          </p>
        </Callout>
      </Section>

      <Section id="orders" title="Pickup on your orders">
        <p>
          The customer&rsquo;s pickup store is saved on the order under{" "}
          <UI>Additional details</UI>:
        </p>
        <Table
          head={["Field", "Value"]}
          rows={[
            [<Code key="p">Pickup Store</Code>, "The store name the customer chose"],
            [<Code key="a">Wayfinder Address</Code>, "That store's address"],
            [<Code key="l">Link to Map</Code>, "Google Maps link to the store"],
          ]}
        />
        <p>
          <Code>Latitude</Code> and <Code>Longitude</Code> are left empty for
          pickup orders, since there&rsquo;s no delivery location. If you use
          the date picker, the customer&rsquo;s requested pickup date is saved
          too.
        </p>

        <SubHeading>Can I limit pickup to certain areas?</SubHeading>
        <p>
          Not yet. Every store is available to every customer who switches
          to pickup. To limit where you <em>deliver</em>, use{" "}
          <Link href="/docs/delivery-zones" className="text-blue-600 hover:underline">
            delivery zones
          </Link>
          .
        </p>
      </Section>
    </DocArticle>
  );
}
