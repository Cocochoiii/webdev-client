// The Assignments screen has a search box, buttons, and the list
import "@/app/labs/lab2/tailwind/utilities.css";
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="rounded border border-neutral-300 py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="inline-flex items-center gap-1 rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
          >
            <FaPlus /> Group
          </button>
          <button
            id="wd-add-assignment"
            type="button"
            className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      <h3
        id="wd-assignments-title"
        className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
      >
        <span>ASSIGNMENTS 40% of Total</span>
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-2 py-0.5 text-sm"
        >
          <FaPlus />
        </button>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        <AssignmentItem
          cid={cid}
          aid="101"
          title="A1 - ENV + HTML"
          details="Multiple Modules | Not available until Sep 8 at 12:00am | Due Sep 27 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="102"
          title="A2 - CSS + TAILWIND"
          details="Multiple Modules | Not available until Sep 28 at 12:00am | Due Oct 11 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="103"
          title="A3 - JAVASCRIPT + REACT"
          details="Multiple Modules | Not available until Oct 12 at 12:00am | Due Oct 25 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="104"
          title="A4 - STATE + REDUX"
          details="Multiple Modules | Not available until Oct 26 at 12:00am | Due Nov 8 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="105"
          title="A5 - NODE + EXPRESS"
          details="Multiple Modules | Not available until Nov 9 at 12:00am | Due Nov 22 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="106"
          title="A6 - MONGO + DEPLOY"
          details="Multiple Modules | Not available until Nov 23 at 12:00am | Due Dec 6 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="107"
          title="A7 - MY EXTRA PRACTICE"
          details="My own practice run before the final | Due Dec 8 at 11:59pm | 50 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="ai-a"
          title="A9 - Sample assignment"
          details="Multiple Modules | Not available until Dec 9 at 12:00am | Due Dec 15 at 11:59pm | 100 pts"
        />
      </ul>
    </div>
  );
}
