// People Details shows one user and lets me edit or delete them
"use client";
import { useEffect, useState } from "react";
import { FaCheck, FaPencilAlt, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import * as client from "../../../account/client";
import { type User } from "../../../account/AccountContext";
const roles = ["STUDENT", "TA", "FACULTY", "ADMIN"];
export default function PeopleDetails({
  uid,
  onClose,
}: {
  uid: string | null;
  onClose: () => void;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);
  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
    setName(`${user.firstName} ${user.lastName}`);
    setEmail(user.email);
    setRole(user.role);
  };
  const saveUser = async () => {
    if (!user) return;
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName, email, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    onClose();
  };
  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    onClose();
  };
  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid || !user) return null;
  return (
    <div className="wd-people-details fixed top-0 end-0 bottom-0 z-20 w-full max-w-sm bg-white p-4 shadow">
      <button type="button" onClick={onClose} className="wd-close-details absolute end-2 top-2">
        <IoCloseSharp className="text-3xl" />
      </button>
      <div className="mt-2 text-center">
        <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
      </div>
      <hr />
      <div className="wd-name text-lg text-red-700">
        {!editing && (
          <FaPencilAlt
            onClick={() => setEditing(true)}
            className="wd-edit float-end cursor-pointer"
          />
        )}
        {editing && (
          <FaCheck onClick={saveUser} className="wd-save float-end cursor-pointer" />
        )}
        {!editing && (
          <span className="cursor-pointer" onClick={() => setEditing(true)}>
            {user.firstName} {user.lastName}
          </span>
        )}
        {editing && (
          <input
            className="wd-edit-name w-3/4 rounded border border-neutral-300 px-2 py-1 text-base text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveUser();
            }}
          />
        )}
      </div>
      <b>Roles:</b>{" "}
      {editing ? (
        <select
          className="wd-edit-role rounded border border-neutral-300 px-2 py-0.5"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          {roles.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <span className="wd-roles">{user.role}</span>
      )}
      <br />
      <b>Email:</b>{" "}
      {editing ? (
        <input
          type="email"
          className="wd-edit-email w-2/3 rounded border border-neutral-300 px-2 py-0.5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") saveUser();
          }}
        />
      ) : (
        <span className="wd-email">{user.email}</span>
      )}
      <br />
      <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span>
      <br />
      <b>Section:</b> <span className="wd-section">{user.section}</span>
      <br />
      <b>Total Activity:</b>{" "}
      <span className="wd-total-activity">{user.totalActivity}</span>
      <hr />
      <button
        type="button"
        onClick={() => deleteUser(uid)}
        className="wd-delete float-end rounded bg-red-600 px-3 py-1 text-sm text-white"
      >
        Delete
      </button>
      <button
        type="button"
        onClick={onClose}
        className="wd-cancel float-end me-2 rounded bg-neutral-200 px-3 py-1 text-sm"
      >
        Cancel
      </button>
    </div>
  );
}
