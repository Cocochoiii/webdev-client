// The assignment loads from the server and the title saves back with axios
"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
type Assignment = {
  id?: number;
  title?: string;
  description?: string;
  due?: string;
  completed?: boolean;
  score?: number;
};
export default function WorkingWithRemoteObjectsAsync() {
  const [assignment, setAssignment] = useState<Assignment>({});
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchAssignment = async () => {
    try {
      setAssignment(await client.fetchAssignment());
      setErrorMessage("");
    } catch {
      setErrorMessage("Unable to load the assignment from the server.");
    }
    setLoading(false);
  };
  const updateTitle = async () => {
    try {
      setAssignment(await client.updateTitle(encodeURIComponent(assignment.title ?? "")));
      setErrorMessage("");
    } catch {
      setErrorMessage("The server did not save the title. Try again.");
    }
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      {errorMessage && (
        <p id="wd-async-object-error" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      {loading && <p className="text-neutral-500">Loading the assignment from the server...</p>}
      <h4>Assignment</h4>
      <input
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        id="wd-assignment-title-async"
        value={assignment.title ?? ""}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <textarea
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        id="wd-assignment-description-async"
        rows={2}
        value={assignment.description ?? ""}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
      />
      <input
        type="date"
        className="mb-2 block rounded border border-neutral-300 px-3 py-1.5"
        id="wd-assignment-due-async"
        value={assignment.due ?? ""}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
      />
      <label className="mb-2 flex items-center gap-2">
        <input
          type="checkbox"
          id="wd-assignment-completed-async"
          checked={assignment.completed ?? false}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        />
        Completed
      </label>
      <button
        type="button"
        onClick={updateTitle}
        id="wd-update-assignment-title-async"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
    </div>
  );
}
