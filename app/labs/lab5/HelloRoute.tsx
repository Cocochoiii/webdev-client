// This fetches the next.js route handler on the same origin
"use client";
import { useEffect, useState } from "react";
export default function HelloRoute() {
  const [message, setMessage] = useState({});
  const fetchHello = async () => {
    const response = await fetch("/api/lab5/hello");
    setMessage(await response.json());
  };
  useEffect(() => {
    fetchHello();
  }, []);
  return (
    <div id="wd-hello-route">
      <h3>GET /api/lab5/hello (Next.js Route Handler)</h3>
      <pre id="wd-hello-route-message">{JSON.stringify(message, null, 2)}</pre>
    </div>
  );
}
