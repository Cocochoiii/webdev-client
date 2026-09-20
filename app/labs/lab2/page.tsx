// Lab 2 practices CSS selectors and imports one component for each topic
import "./index.css";
import Link from "next/link";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <p>
        <Link href="/labs/lab2/tailwind" id="wd-tailwind-link">
          Tailwind samples for Lab 2
        </Link>
      </p>

      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and
        you should avoid using the style attribute
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        This is my own paragraph. I set a green background and yellow text
        with the style attribute, right on this one element.
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        This sample paragraph uses a style attribute for a purple background
        and white text.
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the
          same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        <p id="wd-id-selector-3">
          This is my own third paragraph. It has a dark green background and
          white text from its own ID rule.
        </p>
        <p id="wd-ai-id-selector">
          This sample paragraph has a teal background from one more ID rule.
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-your-class">
          This is my own class. A paragraph and a heading share this pink
          look.
        </p>
        <h4 className="wd-your-class">My heading shares the pink look too</h4>
        <p className="wd-ai-class-selector">
          This sample class gives an orange look to a paragraph and a heading.
        </p>
        <h4 className="wd-ai-class-selector">
          Sample heading with the orange look
        </h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places
            in the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
              <br />
              <span className="wd-your-selector-5">
                This is my own span. It turns purple because it is a
                descendant of selector 1.
              </span>
              <br />
              <span className="wd-ai-selector-5">
                This sample span turns dark blue with its own descendant rule.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div id="wd-css-cascade">
        <h3>Cascade</h3>
        {/* My own test: the mark tag rule, the class, and the id all set a
            background. The id wins, so the text below is red. */}
        <p>
          <mark id="wd-your-cascade" className="wd-your-cascade">
            My own cascade test: the id rule wins, so I am red.
          </mark>
        </p>
        {/* Sample: tag green, class yellow, id red. The id should win. */}
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          Sample cascade test: the p tag says green, the class says yellow,
          and the id says red. The id is the most specific, so I am red.
        </p>
      </div>

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}
