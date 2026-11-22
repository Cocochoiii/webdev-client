// The Users screen lets an admin find, filter, create, and open users
"use client";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import PeopleTable from "../../courses/[cid]/people/Table";
import * as client from "../client";
import { type User } from "../AccountContext";
export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };
  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };
  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User ${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div id="wd-users">
      <h3 className="flex items-center justify-between">
        Users
        <button
          type="button"
          onClick={createUser}
          id="wd-add-people"
          className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          <FaPlus /> Users
        </button>
      </h3>
      <input
        className="wd-filter-by-name me-2 mb-2 w-1/4 rounded border border-neutral-300 px-2 py-1"
        placeholder="Search people"
        value={name}
        onChange={(e) => filterUsersByName(e.target.value)}
      />
      <select
        value={role}
        onChange={(e) => filterUsersByRole(e.target.value)}
        className="wd-select-role mb-2 w-1/4 rounded border border-neutral-300 bg-white px-2 py-1"
      >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
