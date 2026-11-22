// This asks the server whether Mongoose is connected to the database
"use client";
import { useState } from "react";
import * as client from "./client";
export default function Connection() {
  const [status, setStatus] = useState("Click to read the connection status.");
  const readStatus = async () => {
    try {
      const { connected } = await client.fetchConnectionStatus();
      setStatus(connected ? "Connected to MongoDB." : "Not connected to MongoDB.");
    } catch {
      setStatus("Unable to reach the server.");
    }
  };
  return (
    <div id="wd-lab6-connection">
      <h3>MongoDB Connection</h3>
      <p>
        The server reads <code>DATABASE_CONNECTION_STRING</code> from its{" "}
        <code>.env</code> file and connects with Mongoose when it starts.
      </p>
      <button
        type="button"
        onClick={readStatus}
        id="wd-read-connection-status"
        className="me-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Read connection status
      </button>
      <span id="wd-connection-status">{status}</span>
    </div>
  );
}
