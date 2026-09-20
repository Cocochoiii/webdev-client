// This layout puts the fixed Kambaz sidebar beside every screen
import "@/app/labs/lab2/tailwind/utilities.css";
import "./kambaz.css";
import type { ReactNode } from "react";
import KambazNavigation from "./Navigation";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz" className="font-sans">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">{children}</div>
    </div>
  );
}
