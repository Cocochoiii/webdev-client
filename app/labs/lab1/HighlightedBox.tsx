// Children let my component wrap any markup
import type { ReactNode } from "react";

function HighlightedBox({
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
  children,
}: {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </div>
  );
}

export default function HighlightedBoxLab() {
  return (
    <div id="wd-highlighted-box">
      <h3>Highlighted Box</h3>
      <HighlightedBox
        backgroundColor="lavender"
        borderColor="purple"
        borderWidth={3}
        borderRadius={12}
      >
        <h4>Callout</h4>
        <p>
          This box wraps <strong>any</strong> children — headings, paragraphs,
          lists, and more.
        </p>
        <ul>
          <li>backgroundColor</li>
          <li>borderColor</li>
          <li>borderWidth</li>
          <li>borderRadius</li>
        </ul>
      </HighlightedBox>

      <HighlightedBox
        backgroundColor="#e8f5e9"
        borderColor="green"
        borderWidth={2}
        borderRadius={20}
      >
        <p>A second box with different style props wrapping different content.</p>
      </HighlightedBox>

      <HighlightedBox
        backgroundColor="#fffde7"
        borderColor="goldenrod"
        borderWidth={4}
        borderRadius={4}
      >
        <h4>Coco Choi - my goals for CS5610</h4>
        <ul>
          <li>Write clean HTML first, and add the styling later.</li>
          <li>Build one full stack feature by myself, from the screen to the database.</li>
          <li>Use what I learn here in my Amazon internship.</li>
          <li>Deploy every assignment before the weekend ends.</li>
        </ul>
      </HighlightedBox>

      <HighlightedBox backgroundColor="honeydew" borderColor="seagreen">
        <h4>Sample nested content</h4>
        <ul>
          <li>p</li>
          <li>table</li>
          <li>form</li>
        </ul>
      </HighlightedBox>
    </div>
  );
}
