// Axios asks the server for the welcome message without leaving the page
"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchWelcomeOnClick = async () => {
    try {
      const message = await client.fetchWelcomeMessage();
      setWelcomeOnClick(message);
      setErrorMessage("");
    } catch {
      setErrorMessage("Unable to reach the server.");
    }
  };
  const fetchWelcomeOnLoad = async () => {
    try {
      const welcome = await client.fetchWelcomeMessage();
      setWelcomeOnLoad(welcome);
      setErrorMessage("");
    } catch {
      setErrorMessage("Unable to reach the server.");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []);
  return (
    <div id="wd-http-client">
      <h3>HTTP Client</h3>
      {errorMessage && (
        <p id="wd-http-client-error" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <h4>Requesting on Click</h4>
      <button
        type="button"
        onClick={fetchWelcomeOnClick}
        id="wd-fetch-welcome-click"
        className="me-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Fetch Welcome
      </button>
      <p>
        Response from server: <b id="wd-welcome-on-click">{welcomeOnClick}</b>
      </p>
      <h4>Requesting on Load</h4>
      <p>
        Response from server: <b id="wd-welcome-on-load">{welcomeOnLoad}</b>
        {loading && <span className="text-neutral-500">Loading...</span>}
      </p>
    </div>
  );
}
