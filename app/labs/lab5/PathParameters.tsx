// The two numbers go into the path of the link
"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <input
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        id="wd-path-parameter-a"
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        id="wd-path-parameter-b"
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <a
        id="wd-path-parameter-add"
        className="mb-2 block w-full max-w-sm rounded bg-blue-600 px-3 py-1.5 text-center text-sm text-white no-underline"
        href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        id="wd-path-parameter-subtract"
        className="mb-2 block w-full max-w-sm rounded bg-red-600 px-3 py-1.5 text-center text-sm text-white no-underline"
        href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
      >
        Subtract {a} - {b}
      </a>
      <a
        id="wd-path-parameter-multiply"
        className="mb-2 block w-full max-w-sm rounded bg-green-600 px-3 py-1.5 text-center text-sm text-white no-underline"
        href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
      >
        Multiply {a} × {b}
      </a>
      <a
        id="wd-path-parameter-divide"
        className="mb-2 block w-full max-w-sm rounded bg-yellow-400 px-3 py-1.5 text-center text-sm no-underline"
        href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
      >
        Divide {a} ÷ {b}
      </a>
    </div>
  );
}
