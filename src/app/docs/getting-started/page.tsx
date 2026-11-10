import type { Metadata } from "next";
import { PLAN, TRIAL_LABEL } from "@/lib/pricing";
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
  ExtLink,
} from "@/components/docs/Prose";
import { SHOPIFY_URL } from "@/lib/docs";

export const metadata: Metadata = docMetadata(
  "getting-started",
  "Install Wayfinder on Shopify, add the Map block to your theme, and start capturing precise customer delivery locations."
);

export default function GettingStarted() {
  return (
    <DocArticle slug="getting-started">
      <Section id="install" title="1. Install the app">
        <Steps>
          <Step title="Install from the Shopify App Store">
            <p>
              Open <ExtLink href={SHOPIFY_URL}>Wayfinder on the Shopify App Store</ExtLink>{" "}
              and click <UI>Install</UI>. You&rsquo;ll land on the Wayfinder
              home page inside your Shopify admin.
            </p>
          </Step>
          <Step title="Start your free trial">
            <p>
              Open <UI>Pricing Plans</UI> and start the {TRIAL_LABEL} of the{" "}
              {PLAN.name} plan. The storefront map only appears once a plan is
              active, so do this before testing on your store.
            </p>
          </Step>
        </Steps>
        <p>Inside the app you&rsquo;ll find these pages in the sidebar:</p>
        <Table
          head={["Page", "What it's for"]}
          rows={[
            [<UI key="h">Home</UI>, "Setup checklist, tutorial video, and FAQ."],
            [<UI key="m">Map Settings</UI>, "Map provider, text labels, and how coordinates are attached to orders."],
            [<UI key="d">Delivery Zones &amp; Rates</UI>, "Draw delivery areas and set a price for each one."],
            [<UI key="p">Pickup Zones &amp; Stores</UI>, <>Add store locations customers can pick up from (<Link key="pl" href="/docs/pickup-zones" className="text-blue-600 hover:underline">guide</Link>).</>],
            [<UI key="pp">Pricing Plans</UI>, "Manage your subscription."],
          ]}
        />
      </Section>

      <Section id="add-block" title="2. Add the Map block to your theme">
        <p>
          Wayfinder shows customers a map through a theme app block. Put it on
          your <strong>cart page</strong> to get one location per order, or on
          your <strong>product page</strong> to get one location per product.
        </p>
        <Steps>
          <Step title="Open the theme editor">
            <p>
              In Shopify admin, go to <UI>Online Store → Themes</UI> and click{" "}
              <UI>Customize</UI> on your live theme.
            </p>
          </Step>
          <Step title="Go to your cart (or product) template">
            <p>Use the page selector at the top of the editor to switch templates.</p>
          </Step>
          <Step title="Add the block">
            <p>
              Click <UI>Add block</UI>, open the <UI>Apps</UI> tab and choose{" "}
              <UI>Wayfinder → Map</UI>. Drag it where you want it, usually just
              above the checkout button.
            </p>
          </Step>
          <Step title="Save">
            <p>Click <UI>Save</UI>, then preview your store to see the map.</p>
          </Step>
        </Steps>
        <Callout type="tip">
          <p>
            The block&rsquo;s settings in the theme editor control how it
            looks: pin and button colors, map width and height, a separate
            mobile height, and toggles such as <UI>Show Delivery Zone Boundaries</UI>,{" "}
            <UI>Enable Pickup or Local Delivery Buttons</UI> and{" "}
            <UI>Enable Requested Date Picker</UI>. See{" "}
            <Link href="/docs/map-customization" className="font-semibold underline">
              Map Customization
            </Link>{" "}
            for every option.
          </p>
        </Callout>
      </Section>

      <Section id="map-settings" title="3. Configure Map Settings">
        <p>
          Back in the Wayfinder app, open <UI>Map Settings</UI>.
        </p>
        <SubHeading>Choose a map provider</SubHeading>
        <List>
          <li>
            <strong>Wayfinder Map</strong> is free and needs no API key. It&rsquo;s
            the easiest way to start.
          </li>
          <li>
            <strong>Google Maps</strong> needs your own Google Cloud API key with
            the <em>Maps JavaScript</em>, <em>Places</em> and <em>Geocoding</em> APIs
            enabled.{" "}
            <a href="#google-api-key" className="text-blue-600 hover:underline">
              See how to create one
            </a>
            .
          </li>
        </List>

        <SubHeading>Choose how coordinates are attached</SubHeading>
        <p>
          Pick <UI>one set of coordinates per order</UI> if the block is on your
          cart page, or <UI>per product</UI> if it&rsquo;s on your product pages.
          This should match where you placed the block in step 2.
        </p>

        <SubHeading>Optional settings</SubHeading>
        <List>
          <li><UI>Make location selection mandatory</UI>: customers must confirm a location before they can check out.</li>
          <li><UI>Make requested delivery/pickup date mandatory</UI>: used together with the date picker block setting.</li>
          <li><UI>Use customer browser location as default location</UI>: centers the map on the customer if they allow location access.</li>
          <li><UI>Restrict address search to your store&rsquo;s country</UI>: keeps search results local.</li>
          <li><UI>Coordinate format</UI>: Decimal Degrees (e.g. <Code>40.7128, -74.0060</Code>) or DMS.</li>
        </List>
        <p>
          You can also rewrite every customer-facing label, including the
          headline, instructions, button text, and the message shown when a
          location is outside your delivery area.
        </p>
      </Section>

      <Section id="google-api-key" title="Optional: use your own Google Maps API key">
        <p>
          Skip this section if you&rsquo;re using the free Wayfinder Map. To
          use Google Maps instead, create an API key in Google Cloud and paste
          it into Wayfinder. It takes about 10 minutes.
        </p>

        <Callout type="info" title="About Google billing">
          <p>
            Google requires a billing account on every Maps project, even if
            you stay within its free monthly usage. Most small stores
            don&rsquo;t go over it, but check{" "}
            <ExtLink href="https://mapsplatform.google.com/pricing/">
              Google Maps Platform pricing
            </ExtLink>{" "}
            and set a budget alert (covered below) so there are no surprises.
          </p>
        </Callout>

        <SubHeading>Create the key</SubHeading>
        <Steps>
          <Step title="Create a Google Cloud project">
            <p>
              Go to the{" "}
              <ExtLink href="https://console.cloud.google.com/">
                Google Cloud Console
              </ExtLink>{" "}
              and sign in. Click the project picker at the top, then{" "}
              <UI>New Project</UI>. Name it (e.g. &ldquo;My Store
              Maps&rdquo;) and click <UI>Create</UI>.
            </p>
          </Step>
          <Step title="Turn on billing">
            <p>
              Open <UI>Billing</UI> from the menu and link a billing account to
              the project. Without it, the map shows a &ldquo;For development
              purposes only&rdquo; watermark and search won&rsquo;t work.
            </p>
          </Step>
          <Step title="Enable the three APIs">
            <p>
              Go to <UI>APIs &amp; Services → Library</UI>. Search for each of
              these and click <UI>Enable</UI>:
            </p>
            <List>
              <li><strong>Maps JavaScript API</strong>: draws the map.</li>
              <li><strong>Places API</strong>: powers the address search box.</li>
              <li><strong>Geocoding API</strong>: turns addresses into coordinates and back.</li>
            </List>
          </Step>
          <Step title="Create the API key">
            <p>
              Go to <UI>APIs &amp; Services → Credentials</UI>, click{" "}
              <UI>Create credentials → API key</UI>, and copy the key it shows
              you. It starts with <Code>AIza</Code>.
            </p>
          </Step>
        </Steps>

        <SubHeading>Restrict the key</SubHeading>
        <p>
          The key is visible in your storefront&rsquo;s page source, as with
          every Google Maps site. Restrictions make sure only your store can
          use it, so nobody else can run up your bill.
        </p>
        <Steps>
          <Step title="Limit which APIs it can use">
            <p>
              On the Credentials page, click the key&rsquo;s name. Under{" "}
              <UI>API restrictions</UI>, choose <UI>Restrict key</UI> and tick
              only <strong>Maps JavaScript API</strong>,{" "}
              <strong>Places API</strong>, and <strong>Geocoding API</strong>.
            </p>
          </Step>
          <Step title="Limit which websites can use it">
            <p>
              Under <UI>Application restrictions</UI>, choose{" "}
              <UI>Websites</UI> and add each address your store uses:
            </p>
            <div className="rounded-xl bg-slate-900 text-slate-100 font-mono text-[13px] px-5 py-4 space-y-1 overflow-x-auto">
              <div>https://yourstore.com/*</div>
              <div>https://*.yourstore.com/*</div>
              <div>https://your-store.myshopify.com/*</div>
            </div>
            <p>
              Replace these with your own domain and your{" "}
              <Code>.myshopify.com</Code> address, found under{" "}
              <UI>Settings → Domains</UI>. Click <UI>Save</UI>. Changes can
              take a few minutes to apply.
            </p>
          </Step>
          <Step title="Set a budget alert">
            <p>
              In <UI>Billing → Budgets &amp; alerts</UI>, create a small
              monthly budget (e.g. $10) so Google emails you if usage ever
              climbs.
            </p>
          </Step>
        </Steps>

        <Callout type="warning" title="Using the Checkout Location Picker?">
          <p>
            Address search inside checkout calls Google&rsquo;s Geocoding
            service directly, and Google doesn&rsquo;t accept website-restricted
            keys for that. If you use the checkout picker, set{" "}
            <UI>Application restrictions</UI> to <UI>None</UI>. Keep the API
            restrictions and the budget alert in place to protect the key.
          </p>
        </Callout>

        <SubHeading>Add the key to Wayfinder</SubHeading>
        <Steps>
          <Step title="Paste it into Map Settings">
            <p>
              In Wayfinder, open <UI>Map Settings</UI>, select{" "}
              <UI>Google Maps</UI>, paste the key into{" "}
              <UI>Insert your Google Cloud API Key here</UI>, and click{" "}
              <UI>Save</UI>.
            </p>
          </Step>
          <Step title="Test it on your store">
            <p>
              Open your cart or product page. The Google map should load, and
              typing in the search box should suggest addresses.
            </p>
          </Step>
        </Steps>

        <SubHeading>Troubleshooting</SubHeading>
        <Table
          head={["What you see", "How to fix it"]}
          rows={[
            [
              "“This page can't load Google Maps correctly”",
              "Billing isn't turned on, or the key was pasted incorrectly. Check both, then reload.",
            ],
            [
              "“For development purposes only” watermark",
              "Link a billing account to the project (step 2).",
            ],
            [
              <>Map loads but search shows no suggestions</>,
              <>Enable <strong>Places API</strong> and make sure it&rsquo;s allowed in the key&rsquo;s API restrictions.</>,
            ],
            [
              <><Code>RefererNotAllowedMapError</Code> in the browser console</>,
              "The address you're viewing isn't in the key's website list. Add it, including the .myshopify.com address.",
            ],
            [
              <><Code>ApiNotActivatedMapError</Code> in the browser console</>,
              "One of the three APIs isn't enabled. Go back to step 3.",
            ],
          ]}
        />
        <p>
          Still stuck?{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact us
          </Link>{" "}
          and we&rsquo;ll help you get it working.
        </p>
      </Section>

      <Section id="orders" title="4. Find locations on your orders">
        <p>
          When a customer confirms a location, Wayfinder saves it on the order.
          Open any order in Shopify admin and look under{" "}
          <UI>Additional details</UI>:
        </p>
        <Table
          head={["Field", "Example"]}
          rows={[
            [<Code key="a">Wayfinder Address</Code>, "123 Main St, Springfield"],
            [<Code key="la">Latitude</Code>, "39.7817"],
            [<Code key="lo">Longitude</Code>, "-89.6501"],
            [<Code key="l">Link to Map</Code>, "Opens the exact pin in Google Maps"],
            [<Code key="p">Pickup Store</Code>, "Only set if the customer chose pickup"],
          ]}
        />
        <p>
          Drivers can tap <UI>Link to Map</UI> to navigate straight to the
          pin, even if the street address is vague or new.
        </p>
      </Section>

      <Section id="checkout" title="Optional: checkout location picker">
        <p>
          On Shopify plans that support checkout extensions, you can also add
          the <UI>Checkout Location Picker</UI> block in the checkout editor (
          <UI>Settings → Checkout → Customize</UI>). Customers drop a pin
          during checkout, and their shipping address is filled in for them.
        </p>
      </Section>

      <Callout type="info" title="Next step">
        <p>
          The map is live. Next, tell Wayfinder where you deliver by{" "}
          <Link href="/docs/delivery-zones" className="font-semibold underline">
            creating delivery zones
          </Link>
          .
        </p>
      </Callout>
    </DocArticle>
  );
}
