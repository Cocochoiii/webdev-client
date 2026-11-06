// The People screen shows the users enrolled in this course
"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { FaPlus, FaUserCircle } from "react-icons/fa";
import * as db from "../../../../database";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";
import { emptyUser } from "../../../../account/AccountContext";
export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = String(cid);
  const [users, setUsers] = useState(db.users);
  const [user, setUser] = useState(emptyUser);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const enrolled = users.filter((usr) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === usr._id && enrollment.course === courseId,
    ),
  );
  const addUser = () => {
    const newUser = { ...user, _id: crypto.randomUUID() };
    setUsers([...users, newUser]);
    enroll(newUser._id, courseId);
    setUser(emptyUser);
  };
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <input
          placeholder="First Name"
          id="wd-people-first-name"
          className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <input
          placeholder="Last Name"
          id="wd-people-last-name"
          className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <select
          id="wd-people-role"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        >
          <option value="STUDENT">Student</option>
          <option value="TA">TA</option>
          <option value="FACULTY">Faculty</option>
        </select>
        <button
          type="button"
          id="wd-add-people-click"
          className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          onClick={addUser}
        >
          <FaPlus /> People
        </button>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((usr) => (
            <tr key={usr._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{usr.firstName}</span>{" "}
                <span className="wd-last-name">{usr.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{usr.loginId}</td>
              <td className="wd-section p-2">{usr.section}</td>
              <td className="wd-role p-2">{usr.role}</td>
              <td className="wd-last-activity p-2">{usr.lastActivity}</td>
              <td className="wd-total-activity p-2">{usr.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
