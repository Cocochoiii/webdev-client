// The People screen lists the users enrolled in this course
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "../Table";
import * as client from "../../../client";
import { type User } from "../../../../account/AccountContext";
export default function People() {
  const { cid } = useParams();
  const courseId = String(cid);
  const [users, setUsers] = useState<User[]>([]);
  const fetchUsers = async () => {
    setUsers(await client.findUsersForCourse(courseId));
  };
  useEffect(() => {
    fetchUsers();
  }, [courseId]);
  return <PeopleTable users={users} fetchUsers={fetchUsers} />;
}
