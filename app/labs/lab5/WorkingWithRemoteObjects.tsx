// These links read and change one assignment and one module on the server
"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
const link = "me-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";
const input = "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";
export default function WorkingWithRemoteObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "M501",
    name: "Introduction to Node.js",
    description: "Learn Express HTTP routes",
    course: "CS5610",
  });
  return (
    <div id="wd-working-with-remote-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className={link} href={ASSIGNMENT_API_URL} target="_blank" rel="noreferrer">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className={link} href={`${ASSIGNMENT_API_URL}/title`} target="_blank" rel="noreferrer">
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className={link}
        href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`}
        target="_blank"
        rel="noreferrer"
      >
        Update Title
      </a>
      <input
        className={input}
        id="wd-assignment-title"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <a
        id="wd-update-assignment-score"
        className={link}
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
        target="_blank"
        rel="noreferrer"
      >
        Update Score
      </a>
      <input
        className={input}
        id="wd-assignment-score"
        type="number"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) || 0 })
        }
      />
      <a
        id="wd-update-assignment-completed"
        className={link}
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        target="_blank"
        rel="noreferrer"
      >
        Update Completed
      </a>
      <label className="mb-2 flex items-center gap-2">
        <input
          type="checkbox"
          id="wd-assignment-completed"
          checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        />
        Completed
      </label>
      <h4>Module (On Your Own)</h4>
      <a id="wd-retrieve-module" className={link} href={MODULE_API_URL} target="_blank" rel="noreferrer">
        Get Module
      </a>
      <a id="wd-retrieve-module-name" className={link} href={`${MODULE_API_URL}/name`} target="_blank" rel="noreferrer">
        Get Module Name
      </a>
      <br />
      <a
        id="wd-update-module-name"
        className={`${link} mt-2`}
        href={`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`}
        target="_blank"
        rel="noreferrer"
      >
        Update Module Name
      </a>
      <input
        className={input}
        id="wd-module-name"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        id="wd-update-module-description"
        className={link}
        href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`}
        target="_blank"
        rel="noreferrer"
      >
        Update Module Description
      </a>
      <input
        className={input}
        id="wd-module-description"
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
    </div>
  );
}
