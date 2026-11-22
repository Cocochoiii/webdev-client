// Lab 6 talks to the server that keeps its data in MongoDB
import Link from "next/link";
import Connection from "./Connection";
import Todos from "./Todos";
export default function Lab6() {
  return (
    <div id="wd-lab6">
      <h2>Lab 6</h2>
      <Connection />
      <hr />
      <Todos />
      <hr />
      <h3>Users</h3>
      <p>
        The admin Users screen finds, filters, creates, updates, and deletes the
        users collection. Sign in as <code>nick_fury</code> and open{" "}
        <Link id="wd-lab6-users-link" href="/account/users" className="text-blue-700 underline">
          Account &gt; Users
        </Link>
        .
      </p>
    </div>
  );
}
