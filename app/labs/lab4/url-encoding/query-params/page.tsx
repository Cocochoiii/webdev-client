// Suspense lets the query calculator wait for the URL
import { Suspense } from "react";
import QueryCalculator from "./QueryCalculator";
export default function QueryCalculatorPage() {
  return (
    <Suspense fallback={<p>Loading calculator…</p>}>
      <QueryCalculator />
    </Suspense>
  );
}
