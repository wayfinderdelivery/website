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
  "map-customization",
  "Customize the Wayfinder map on your Shopify store: colors, map size, mobile height, the delivery date picker, and display options."
);

function Swatch({ color }: { color: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span
        className="inline-block w-4 h-4 rounded border border-slate-300"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <Code>{color}</Code>
    </span>
  );
}

const On = () => <span className="font-medium text-emerald-700">On</span>;
const Off = () => <span className="text-slate-400">Off</span>;

export default function MapCustomization() {
  return (
    <DocArticle slug="map-customization">
      <Section id="where" title="Where to customize">
        <p>Wayfinder&rsquo;s look and behavior are set in two places:</p>
        <Table
          head={["Where", "What you change there"]}
          rows={[
            [
              <>
                <UI>Theme editor</UI> &rarr; Wayfinder <UI>Map</UI> block
              </>,
              "Colors, map size, mobile height, which buttons show, the date picker, and pickup display.",
            ],
            [
              <>
                Wayfinder app &rarr; <UI>Map Settings</UI>
              </>,
              "All the wording customers see, the map provider, the coordinate format, and which steps are required.",
            ],
          ]}
        />
        <Steps>
          <Step title="Open the theme editor">
            <p>
              In Shopify admin, go to <UI>Online Store → Themes</UI> and click{" "}
              <UI>Customize</UI>.
            </p>
          </Step>
          <Step title="Go to the page with the map">
            <p>
              Use the page selector at the top to open your cart or product
              template, wherever you{" "}
              <Link href="/docs/getting-started#add-block" className="text-blue-600 hover:underline">
                added the block
              </Link>
              .
            </p>
          </Step>
          <Step title="Select the Map block">
            <p>
              Click <UI>Map</UI> in the left sidebar. Its settings open on the
              right, and changes preview live. Click <UI>Save</UI> when
              you&rsquo;re done.
            </p>
          </Step>
        </Steps>
      </Section>

      <Section id="display" title="Display options">
        <p>
          These switches are in the <UI>Map Settings</UI> group at the top of
          the block.
        </p>
        <Table
          head={["Setting", "Default", "What it does"]}
          rows={[
            [<UI key="1">Display Location Coordinates</UI>, <Off key="d" />, "Shows a card under the map with the customer's latitude and longitude."],
            [<UI key="2">Disable My Location Button</UI>, <Off key="d" />, "Hides the button that finds the customer using their device's GPS."],
            [<UI key="3">Disable Satellite/Map Button</UI>, <Off key="d" />, "Hides the switch between standard and satellite view."],
            [<UI key="4">Enable Pickup or Local Delivery Buttons</UI>, <Off key="d" />, <>Adds a Delivery / Pickup switcher. See <Link key="l" href="/docs/pickup-zones" className="text-blue-600 hover:underline">Pickup Zones</Link>.</>],
            [<UI key="5">Show Delivery Zone Boundaries</UI>, <On key="d" />, "Draws your delivery zones on the map so customers can see where you deliver."],
            [<UI key="6">Show Pickup Locations in Delivery Mode</UI>, <Off key="d" />, "Shows store pins in delivery mode too, not just after switching to pickup."],
            [<UI key="7">Auto-fill shipping address from Wayfinder location</UI>, <On key="d" />, "Fills in the checkout shipping address from the confirmed location. Customers can still edit it."],
            [<UI key="8">Hide Map Canvas</UI>, <Off key="d" />, "Hides the map itself but keeps address search and zone checks. Good for a compact layout."],
          ]}
        />
        <Callout type="tip" title="Want just an address box?">
          <p>
            Turn on <UI>Hide Map Canvas</UI> to show only the search field.
            Wayfinder still checks the address against your delivery zones,
            and in pickup mode it lists your stores instead of showing pins.
          </p>
        </Callout>
      </Section>

      <Section id="colors" title="Colors">
        <p>
          Match the map to your brand in the <UI>Map Style</UI> group. The
          defaults are neutral black and white, so most themes look fine
          without changes.
        </p>
        <Table
          head={["Setting", "Default", "Used for"]}
          rows={[
            [<UI key="1">My Location Button Color</UI>, <Swatch key="s" color="#000000" />, "Background of the “Use My Location” button"],
            [<UI key="2">My Location Text Color</UI>, <Swatch key="s" color="#FFFFFF" />, "Text on that button"],
            [<UI key="3">Map/Satellite Active Button Color</UI>, <Swatch key="s" color="#e2e2e2" />, "Highlight on the selected view (map or satellite)"],
            [<UI key="4">Map/Satellite Active Text Color</UI>, <Swatch key="s" color="#000000" />, "Text on the selected view button"],
            [<UI key="5">Map/Satellite Inactive Text Color</UI>, <Swatch key="s" color="#000000" />, "Text on the other view button"],
            [<UI key="6">Confirm Location Button Color</UI>, <Swatch key="s" color="#000000" />, "Background of the “Confirm Location” button"],
            [<UI key="7">Confirm Location Text Color</UI>, <Swatch key="s" color="#FFFFFF" />, "Text on that button"],
            [<UI key="8">Map Pin Color</UI>, <Swatch key="s" color="#389DFB" />, "The customer's delivery pin"],
            [<UI key="9">Delivery Zone Border Color</UI>, <Swatch key="s" color="#2c6ecb" />, "Outline of your delivery zones"],
            [<UI key="10">Pickup Store Pin Color</UI>, <Swatch key="s" color="#e85d04" />, "Store pins and the “Select for pickup” button"],
          ]}
        />
        <Callout type="tip">
          <p>
            Give the confirm button your theme&rsquo;s main button color so it
            reads as the next step. Keep the pickup pin color clearly different
            from the delivery pin so customers can tell them apart.
          </p>
        </Callout>
      </Section>

      <Section id="layout" title="Size and layout">
        <Table
          head={["Setting", "Default", "What it does"]}
          rows={[
            [<UI key="1">Headline Alignment</UI>, "Center", "Alignment of the headline above the map."],
            [<UI key="2">Instructions Alignment</UI>, "Center", "Alignment of the instructions text."],
            [<UI key="3">Default Map Width %</UI>, "80%", "Map width as a share of the space the block sits in."],
            [<UI key="4">Default Map Height %</UI>, "55%", "Map height on desktop."],
            [<UI key="5">Coordinates Card Width %</UI>, "60%", "Width of the coordinates card, if it's turned on."],
            [<UI key="6">Mobile Map Height %</UI>, "80%", <>Map height on phones, set separately from desktop (in the <UI>Mobile View</UI> group).</>],
          ]}
        />
        <p>
          After changing sizes, use the device toggle at the top of the theme
          editor to check both desktop and mobile. A taller mobile map is
          easier to drag with a thumb. Just leave enough room below it for the
          confirm button.
        </p>
      </Section>

      <Section id="date-picker" title="Requested date picker">
        <p>
          Let customers choose when they&rsquo;d like their delivery or
          pickup. Turn on <UI>Enable Requested Date Picker</UI> in the{" "}
          <UI>Date Picker</UI> group.
        </p>
        <List>
          <li>
            Customers see <strong>Today</strong>, <strong>Tomorrow</strong>, and{" "}
            <strong>Pick a Date</strong>, which opens a calendar. Past dates
            can&rsquo;t be chosen.
          </li>
          <li>
            The choice is saved on the order under <UI>Additional details</UI>{" "}
            as <Code>Requested Delivery Date</Code> or{" "}
            <Code>Requested Pickup Date</Code>.
          </li>
          <li>
            <UI>Date Button Color</UI> (default <Swatch color="#000000" />)
            sets the button border and fill. <UI>Date Button Text Color</UI>{" "}
            (default <Swatch color="#FFFFFF" />) sets the text on the
            selected button.
          </li>
          <li>
            To make choosing a date required before checkout, turn on{" "}
            <UI>Make requested delivery/pickup date mandatory</UI> in
            Wayfinder&rsquo;s <UI>Map Settings</UI>.
          </li>
        </List>
      </Section>

      <Section id="wording" title="Wording">
        <p>
          Every piece of text customers see can be changed in Wayfinder&rsquo;s{" "}
          <UI>Map Settings</UI>, for example to match your brand&rsquo;s voice
          or to translate it.
        </p>
        <Table
          head={["Field", "Default"]}
          rows={[
            [<UI key="1">Headline</UI>, "Delivery Location"],
            [<UI key="2">Instructions</UI>, <span key="e" className="text-slate-400">(empty)</span>],
            [<UI key="3">Search Bar Text</UI>, "Enter Address to Search Location"],
            [<UI key="4">My Location Text</UI>, "Use My Location"],
            [<UI key="5">Confirm Location Button Text</UI>, "Confirm Location"],
            [<UI key="6">Confirm Message</UI>, "Location Confirmed"],
            [<UI key="7">Location Unavailable Message</UI>, "This address is outside our delivery zone"],
            [<UI key="8">Change Location Text</UI>, "Change Location"],
            [<UI key="9">Delivery &amp; Pickup Headline</UI>, "Select Your Delivery Method"],
            [<UI key="10">Local Delivery Text</UI>, "Local Delivery"],
            [<UI key="11">Pickup Text</UI>, "Pick Up"],
          ]}
        />
        <SubHeading>Other Map Settings that change the experience</SubHeading>
        <List>
          <li>
            <UI>Use customer browser location as default location</UI>: starts
            the map at the customer&rsquo;s position if they allow it.
          </li>
          <li>
            <UI>Restrict address search to your store&rsquo;s country</UI>:
            keeps search results in your country.
          </li>
          <li>
            <UI>Coordinate format</UI>: Decimal Degrees or DMS (degrees,
            minutes, seconds) for the coordinates saved on orders.
          </li>
        </List>
      </Section>
    </DocArticle>
  );
}
