// The Assignment Editor is a labeled form styled with Tailwind
import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-2xl">
      <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
        Assignment Name
      </label>
      <input
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <textarea
        id="wd-description"
        cols={40}
        rows={8}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel. The landing page should include your full name and section, links to each lab, a link to the Kambaz application, and links to all relevant source code repositories."
      />
      <div className="mb-4">
        <label htmlFor="wd-points" className="mb-1 block text-sm font-medium">
          Points
        </label>
        <input
          id="wd-points"
          defaultValue={100}
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-group" className="mb-1 block text-sm font-medium">
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="wd-display-grade-as"
          className="mb-1 block text-sm font-medium"
        >
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="wd-submission-type"
          className="mb-1 block text-sm font-medium"
        >
          Submission Type
        </label>
        <select
          id="wd-submission-type"
          defaultValue="ONLINE"
          className="mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="ONLINE">Online</option>
          <option value="ON_PAPER">On Paper</option>
        </select>
        <div className="rounded border border-neutral-300 p-3">
          <div className="mb-2 text-sm font-medium">Online Entry Options</div>
          <input type="checkbox" id="wd-text-entry" defaultChecked />{" "}
          <label htmlFor="wd-text-entry">Text Entry</label>
          <br />
          <input type="checkbox" id="wd-website-url" defaultChecked />{" "}
          <label htmlFor="wd-website-url">Website URL</label>
          <br />
          <input type="checkbox" id="wd-media-recordings" />{" "}
          <label htmlFor="wd-media-recordings">Media Recordings</label>
          <br />
          <input type="checkbox" id="wd-student-annotation" />{" "}
          <label htmlFor="wd-student-annotation">Student Annotation</label>
          <br />
          <input type="checkbox" id="wd-file-upload" />{" "}
          <label htmlFor="wd-file-upload">File Uploads</label>
        </div>
      </div>
      <div className="mb-4 rounded border border-neutral-300 p-3">
        <label htmlFor="wd-assign-to" className="mb-1 block text-sm font-medium">
          Assign to
        </label>
        <input
          id="wd-assign-to"
          type="text"
          defaultValue="Everyone"
          className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
        />
        <label htmlFor="wd-due-date" className="mb-1 block text-sm font-medium">
          Due
        </label>
        <input
          id="wd-due-date"
          type="date"
          defaultValue="2026-09-27"
          className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
        />
        <div className="flex gap-3">
          <div className="min-w-0 flex-1">
            <label
              htmlFor="wd-available-from"
              className="mb-1 block text-sm font-medium"
            >
              Available from
            </label>
            <input
              id="wd-available-from"
              type="date"
              defaultValue="2026-09-08"
              className="w-full rounded border border-neutral-300 px-3 py-2"
            />
          </div>
          <div className="min-w-0 flex-1">
            <label
              htmlFor="wd-available-until"
              className="mb-1 block text-sm font-medium"
            >
              Until
            </label>
            <input
              id="wd-available-until"
              type="date"
              defaultValue="2026-12-11"
              className="w-full rounded border border-neutral-300 px-3 py-2"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="wd-ai-editor-notes"
          className="mb-1 block text-sm font-medium"
        >
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          rows={3}
          className="w-full rounded border border-neutral-300 px-3 py-2"
          defaultValue="This sample field was added the same way as the fields above."
        />
      </div>
      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
