// This is the main layout for the whole app
import type { ReactNode } from "react";
// import "./globals.css";

export const metadata = {
  title: "Kambaz",
  description: "CS5610 Web Development - Assignment 1",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
