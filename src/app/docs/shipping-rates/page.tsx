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
  ExtLink,
} from "@/components/docs/Prose";

export const metadata: Metadata = docMetadata(
  "shipping-rates",
  "Charge a different delivery price for each Wayfinder zone using Shopify's Carrier Calculated Shipping."
);

export default function ShippingRates() {
  return (
    <DocArticle slug="shipping-rates">
      <Section id="how" title="How it works">
        <p>
          Wayfinder sends its prices to checkout using Shopify&rsquo;s{" "}
          <strong>Carrier Calculated Shipping</strong>, the same system used for
          live rates from carriers like UPS or FedEx. When a customer reaches
          the shipping step:
        </p>
        <Steps>
          <Step title="Shopify asks Wayfinder for rates">
            <p>
              Wayfinder uses the pin the customer dropped on the map. If there
              isn&rsquo;t one, it uses the shipping address entered at checkout.
            </p>
          </Step>
          <Step title="Wayfinder finds matching zones">
            <p>
              It checks the location against every drawn zone and the address
              against every postal code zone.
            </p>
          </Step>
          <Step title="Matching rates are shown at checkout">
            <p>
              Each matching zone adds one option, using the zone&rsquo;s{" "}
              <UI>Rate Name</UI> and <UI>Price</UI> with the zone name
              underneath.
            </p>
          </Step>
        </Steps>
      </Section>

      <Section id="enable" title="Enable carrier-calculated rates">
        <Steps>
          <Step title="Open Delivery Zones & Rates in Wayfinder">
            <p>
              Find the <UI>Carrier Service Status</UI> panel at the top of the
              page.
            </p>
          </Step>
          <Step title="Click Install">
            <p>
              Wayfinder registers itself as a shipping carrier on your store.
              When it&rsquo;s done, the panel shows that the carrier service
              is active.
            </p>
          </Step>
          <Step title="Add Wayfinder to your shipping profile">
            <p>
              Installing the carrier service doesn&rsquo;t show it at checkout
              yet. You still need to add it to a shipping profile, as shown{" "}
              <a href="#shipping-profile" className="text-blue-600 hover:underline">
                below
              </a>
              .
            </p>
          </Step>
        </Steps>
        <Callout type="warning" title="Shopify plan requirement">
          <p>
            Carrier Calculated Shipping is included with Shopify Advanced and
            Plus. On other plans you may need to add it to your subscription
            or switch to annual billing. If the install fails, contact Shopify
            Support and ask them to turn on the{" "}
            <em>Carrier Calculated Shipping</em> feature.{" "}
            <ExtLink href="https://help.shopify.com/en/manual/shipping/setting-up-and-managing-your-shipping/enabling-shipping-carriers">
              Shopify&rsquo;s guide
            </ExtLink>
            .
          </p>
        </Callout>
        <p>
          You can create and edit zones before you install the carrier service.
          Until it&rsquo;s installed, though, their prices won&rsquo;t appear at
          checkout.
        </p>
      </Section>

      <Section id="shipping-profile" title="Add Wayfinder to your shipping profile">
        <p>
          Shopify only shows carrier rates in the shipping profiles and
          shipping zones you add them to. Do this once after installing the
          carrier service. Until you do, Wayfinder&rsquo;s rates won&rsquo;t
          show at checkout, even if your delivery zones are set up correctly.
        </p>

        <Callout type="info" title="Two kinds of “zones”">
          <p>
            Shopify&rsquo;s <strong>shipping zones</strong> are broad regions,
            such as &ldquo;United States&rdquo; or &ldquo;Domestic&rdquo;.
            Wayfinder&rsquo;s <strong>delivery zones</strong> are the precise
            areas you draw in the app. Add Wayfinder to the Shopify shipping
            zone that contains your Wayfinder delivery zones. Wayfinder then
            decides which of its rates apply to each address.
          </p>
        </Callout>

        <Steps>
          <Step title="Open shipping settings">
            <p>
              In Shopify admin, click <UI>Settings</UI> (bottom left), then{" "}
              <UI>Shipping and delivery</UI>.
            </p>
          </Step>
          <Step title="Open your shipping profile">
            <p>
              Under <UI>Shipping</UI>, find <UI>General shipping rates</UI>{" "}
              (the default profile, which covers all products) and click{" "}
              <UI>Manage</UI>.
            </p>
          </Step>
          <Step title="Find the right shipping zone">
            <p>
              Scroll to <UI>Shipping zones</UI> and find the zone for the
              country or region you deliver in. If you don&rsquo;t have one,
              click <UI>Create zone</UI>, name it (e.g. &ldquo;Local&rdquo;),
              select your country or states/provinces, and click{" "}
              <UI>Done</UI>.
            </p>
          </Step>
          <Step title="Add a carrier rate">
            <p>
              In that zone, click <UI>Add rate</UI>. Choose{" "}
              <UI>Use carrier or app to calculate rates</UI>.
            </p>
          </Step>
          <Step title="Choose Wayfinder">
            <p>
              In the <UI>Shipping carrier</UI> dropdown, select{" "}
              <strong>Wayfinder</strong>.
            </p>
            <p>
              Under services, make sure Wayfinder&rsquo;s services are
              selected, including any option to automatically include new
              services. Wayfinder names its rates after your delivery zones,
              so new zones you create later will show up without coming back
              here.
            </p>
          </Step>
          <Step title="(Optional) Add a handling fee">
            <p>
              Shopify lets you add a percentage and/or flat fee on top of every
              Wayfinder rate. Leave it blank to charge exactly the prices set
              in Wayfinder.
            </p>
          </Step>
          <Step title="Save">
            <p>
              Click <UI>Done</UI>, then <UI>Save</UI> at the top of the
              page.
            </p>
          </Step>
        </Steps>

        <SubHeading>If you use more than one shipping profile</SubHeading>
        <p>
          If some products are in a <strong>custom shipping profile</strong>{" "}
          (listed under <UI>Custom shipping rates</UI>), repeat the steps for
          each profile containing products you deliver locally. A cart with
          products from several profiles only gets rates that every profile
          offers. So if one profile is missing Wayfinder, its rates
          won&rsquo;t show for that cart.
        </p>

        <SubHeading>Should I keep my other rates?</SubHeading>
        <List>
          <li>
            <strong>Delivery only, no shipping:</strong> remove any other
            rates in that shipping zone. Customers will then only see
            Wayfinder rates, and addresses outside your delivery zones will
            have no delivery option.
          </li>
          <li>
            <strong>Delivery and shipping:</strong> keep your normal rates.
            Customers inside a Wayfinder zone see both; everyone else sees
            only your normal rates.
          </li>
          <li>
            Shopify&rsquo;s own <UI>Local delivery</UI> (under{" "}
            <UI>Shipping and delivery → Local delivery</UI>) is separate from
            Wayfinder. If both are on, customers may see two local delivery
            options, so you&rsquo;ll usually want to turn Shopify&rsquo;s off.
          </li>
        </List>

        <SubHeading>Test it</SubHeading>
        <Steps>
          <Step title="Drop a pin inside one of your zones">
            <p>
              On your storefront, add a product to the cart, open the
              Wayfinder map, and confirm a location inside a delivery zone.
            </p>
          </Step>
          <Step title="Go to checkout">
            <p>
              Enter a matching shipping address. In the shipping method step,
              you should see your zone&rsquo;s <UI>Rate Name</UI> and price,
              with the zone name underneath.
            </p>
          </Step>
          <Step title="Try an address outside your zones">
            <p>
              Wayfinder&rsquo;s rates should disappear. Only your other
              Shopify rates, if any, will show.
            </p>
          </Step>
        </Steps>
      </Section>

      <Section id="pricing" title="Setting prices">
        <List>
          <li>
            Each zone has a <strong>flat price</strong>. Set it to{" "}
            <strong>0</strong> to offer free delivery in that zone.
          </li>
          <li>
            To make specific products free, or stop them being delivered to a
            zone, add{" "}
            <Link href="/docs/delivery-zones#product-rules" className="text-blue-600 hover:underline">
              Product Rules
            </Link>{" "}
            to the zone.
          </li>
          <li>
            <Link href="/docs/pickup-zones" className="text-blue-600 hover:underline">
              Pickup stores
            </Link>{" "}
            can have their own price, shown as &ldquo;Store name &mdash;
            Pickup&rdquo;.
          </li>
          <li>
            For distance-based pricing, draw zones in rings (e.g. 0&ndash;5 km,
            5&ndash;10 km), each with its own price.
          </li>
        </List>
      </Section>

      <Section id="outside" title="Addresses outside your zones">
        <p>
          If an address isn&rsquo;t in any zone, Wayfinder returns no rates.
          The customer will only see the other shipping methods you&rsquo;ve
          set up in Shopify. If you have none for that area, they won&rsquo;t
          be able to check out with delivery, which is usually what you want
          for local-only delivery.
        </p>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting">
        <List>
          <li>
            <strong>No Wayfinder rates at checkout:</strong> check that the
            carrier service is installed, that Wayfinder is{" "}
            <a href="#shipping-profile" className="text-blue-600 hover:underline">
              added to your shipping profile
            </a>{" "}
            (including any custom profiles), and that the test address really is inside
            one of your zones.
          </li>
          <li>
            <strong>Wrong zone matched:</strong> make sure the customer
            confirmed their pin on the map. Without a pin, Wayfinder falls back
            to Shopify&rsquo;s estimate of the address, which can be less
            precise.
          </li>
          <li>
            <strong>Still stuck?</strong>{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact us
            </Link>{" "}
            with your store URL and a test address.
          </li>
        </List>
      </Section>
    </DocArticle>
  );
}
