// The two numbers and the operation go after the question mark
"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        id="wd-query-parameter-a"
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        id="wd-query-parameter-b"
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <a
        id="wd-query-parameter-add"
        className="mb-2 block w-full max-w-sm rounded bg-blue-600 px-3 py-1.5 text-center text-sm text-white no-underline"
        href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
        target="_blank"
        rel="noreferrer"
      >
        Add {a} + {b}
      </a>
      <a
        id="wd-query-parameter-subtract"
        className="mb-2 block w-full max-w-sm rounded bg-red-600 px-3 py-1.5 text-center text-sm text-white no-underline"
        href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
        target="_blank"
        rel="noreferrer"
      >
        Subtract {a} - {b}
      </a>
      <a
        id="wd-query-parameter-multiply"
        className="mb-2 block w-full max-w-sm rounded bg-green-600 px-3 py-1.5 text-center text-sm text-white no-underline"
        href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
        target="_blank"
        rel="noreferrer"
      >
        Multiply {a} × {b}
      </a>
      <a
        id="wd-query-parameter-divide"
        className="mb-2 block w-full max-w-sm rounded bg-yellow-400 px-3 py-1.5 text-center text-sm no-underline"
        href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
        target="_blank"
        rel="noreferrer"
      >
        Divide {a} ÷ {b}
      </a>
    </div>
  );
}
