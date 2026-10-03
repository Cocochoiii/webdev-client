// The Tailwind sub-lab shows utility classes one topic at a time
import "./index.css";
import Link from "next/link";
import TailwindSpacing from "./TailwindSpacing";
import TailwindTypography from "./TailwindTypography";
import TailwindBackgroundColors from "./TailwindBackgroundColors";
import TailwindResponsiveBreakpoint from "./TailwindResponsiveBreakpoint";
import TailwindResponsiveShowHide from "./TailwindResponsiveShowHide";
import TailwindResponsiveFlex from "./TailwindResponsiveFlex";
import TailwindResponsiveGrid from "./TailwindResponsiveGrid";
import TailwindResponsiveSpacingText from "./TailwindResponsiveSpacingText";
import TailwindResponsiveDesign from "./TailwindResponsiveDesign";
import TailwindFilters from "./TailwindFilters";
import TailwindGrids from "./TailwindGrids";

export default function TailwindLab() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Tailwind CSS</h1>
      <p className="mb-8">
        <Link href="/labs/lab2" className="text-blue-600 underline">
          Back to Lab 2
        </Link>
      </p>
      <TailwindSpacing />
      <hr className="my-8" />
      <TailwindTypography />
      <hr className="my-8" />
      <TailwindBackgroundColors />
      <hr className="my-8" />
      <TailwindResponsiveBreakpoint />
      <hr className="my-8" />
      <TailwindResponsiveShowHide />
      <hr className="my-8" />
      <TailwindResponsiveFlex />
      <hr className="my-8" />
      <TailwindResponsiveGrid />
      <hr className="my-8" />
      <TailwindResponsiveSpacingText />
      <hr className="my-8" />
      <TailwindResponsiveDesign />
      <hr className="my-8" />
      <TailwindFilters />
      <hr className="my-8" />
      <TailwindGrids />
    </div>
  );
}
