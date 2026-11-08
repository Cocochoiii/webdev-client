// The calculator sends a, b, and the operation to the next.js route handler
"use client";
import { useState } from "react";
const symbol = (op: string) => {
  if (op === "add") return "+";
  if (op === "subtract") return "-";
  if (op === "multiply") return "×";
  return "÷";
};
export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const calculate = async (op = operation) => {
    const response = await fetch(`/api/lab5/calculator?a=${a}&b=${b}&operation=${op}`);
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
      setResult("");
      return;
    }
    setError("");
    setResult(`${data.a} ${symbol(op)} ${data.b} = ${data.result}`);
  };
  return (
    <div id="wd-calculator-next" className="max-w-sm">
      <h3>Calculator (Next.js Web API)</h3>
      <label htmlFor="wd-calculator-a">A:</label>
      <input
        id="wd-calculator-a"
        type="number"
        placeholder="A"
        className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <label htmlFor="wd-calculator-b">B:</label>
      <input
        id="wd-calculator-b"
        type="number"
        placeholder="B"
        className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <label htmlFor="wd-calculator-operation">Operation:</label>
      <select
        id="wd-calculator-operation"
        className="mb-2 block w-full rounded border border-neutral-300 bg-white px-3 py-1.5"
        value={operation}
        onChange={(e) => {
          setOperation(e.target.value);
          calculate(e.target.value);
        }}
      >
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
      </select>
      <button
        type="button"
        id="wd-calculator-calculate"
        onClick={() => calculate()}
        className="mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Calculate
      </button>
      <input
        id="wd-calculator-result"
        readOnly
        className="mb-2 block w-full rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5"
        value={result}
      />
      {error && (
        <p id="wd-calculator-error" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {error}
        </p>
      )}
    </div>
  );
}
