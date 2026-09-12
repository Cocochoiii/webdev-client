// The Assignments screen lists the work for one course
import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input
        placeholder="Search for Assignments"
        id="wd-search-assignment"
      />{" "}
      <button type="button" id="wd-add-assignment-group">+ Group</button>{" "}
      <button type="button" id="wd-add-assignment">+ Assignment</button>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button type="button">+</button>
      </h3>
      <ul id="wd-assignment-list">
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
      </ul>
    </div>
  );
}
