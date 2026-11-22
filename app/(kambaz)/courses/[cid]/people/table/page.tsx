// The People screen lists, adds, edits, and removes this course's users
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaCheckCircle, FaPencilAlt, FaPlus, FaTrash, FaUserCircle } from "react-icons/fa";
import * as client from "../../../../account/client";
import * as coursesClient from "../../../client";
import { emptyUser, type User } from "../../../../account/AccountContext";
const roles = ["STUDENT", "TA", "FACULTY"];
export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = String(cid);
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState(emptyUser);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchUsers = async () => {
    try {
      const users = await client.findUsersForCourse(courseId);
      setUsers(users);
    } catch {
      setErrorMessage("Unable to load the people. Is the server running?");
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [courseId]);
  const addUser = async () => {
    try {
      const newUser = await client.createUser(user);
      await coursesClient.enrollUserInCourse(newUser._id, courseId);
      setUsers([...users, newUser]);
      setUser(emptyUser);
    } catch {
      setErrorMessage("The server did not add that person. Try again.");
    }
  };
  const editUser = (usr: User) => {
    setUsers(users.map((u) => (u._id === usr._id ? usr : u)));
  };
  const updateUser = async (usr: User) => {
    try {
      const saved = await client.updateUser(usr);
      setUsers(users.map((u) => (u._id === usr._id ? saved : u)));
      setEditingId(null);
    } catch {
      setErrorMessage("The server did not save that person. Try again.");
    }
  };
  const deleteUser = async (userId: string) => {
    try {
      await client.deleteUser(userId);
      setUsers(users.filter((u) => u._id !== userId));
    } catch {
      setErrorMessage("The server did not remove that person. Try again.");
    }
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
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
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
      {errorMessage && (
        <p id="wd-people-error" className="mb-3 rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((usr) => (
            <tr key={usr._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                {editingId === usr._id ? (
                  <span className="inline-flex gap-1">
                    <input
                      className="wd-first-name w-28 rounded border border-neutral-300 px-2 py-0.5"
                      value={usr.firstName}
                      onChange={(e) => editUser({ ...usr, firstName: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") updateUser(usr);
                      }}
                    />
                    <input
                      className="wd-last-name w-28 rounded border border-neutral-300 px-2 py-0.5"
                      value={usr.lastName}
                      onChange={(e) => editUser({ ...usr, lastName: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") updateUser(usr);
                      }}
                    />
                  </span>
                ) : (
                  <span>
                    <span className="wd-first-name">{usr.firstName}</span>{" "}
                    <span className="wd-last-name">{usr.lastName}</span>
                  </span>
                )}
              </td>
              <td className="wd-login-id p-2">{usr.loginId}</td>
              <td className="wd-section p-2">{usr.section}</td>
              <td className="wd-role p-2">
                {editingId === usr._id ? (
                  <select
                    className="rounded border border-neutral-300 bg-white px-2 py-0.5"
                    value={usr.role}
                    onChange={(e) => editUser({ ...usr, role: e.target.value })}
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                ) : (
                  usr.role
                )}
              </td>
              <td className="wd-last-activity p-2">{usr.lastActivity}</td>
              <td className="wd-total-activity p-2">{usr.totalActivity}</td>
              <td className="p-2 text-nowrap">
                {editingId === usr._id ? (
                  <FaCheckCircle
                    id="wd-save-people-click"
                    className="me-2 inline cursor-pointer text-green-600"
                    onClick={() => updateUser(usr)}
                    title="Save"
                  />
                ) : (
                  <FaPencilAlt
                    id="wd-edit-people-click"
                    className="me-2 inline cursor-pointer text-blue-600"
                    onClick={() => setEditingId(usr._id)}
                    title="Edit"
                  />
                )}
                <FaTrash
                  id="wd-delete-people-click"
                  className="inline cursor-pointer text-red-600"
                  onClick={() => deleteUser(usr._id)}
                  title="Delete"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
