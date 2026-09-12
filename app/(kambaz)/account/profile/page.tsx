// The Profile screen shows my user information
import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        defaultValue="coco"
        placeholder="username"
        className="wd-username"
      />
      <br />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password"
      />
      <br />
      <input defaultValue="Coco" placeholder="First Name" id="wd-firstname" />
      <br />
      <input defaultValue="Choi" placeholder="Last Name" id="wd-lastname" />
      <br />
      <input defaultValue="2000-03-28" type="date" id="wd-dob" />
      <br />
      <input defaultValue="choi.coco@northeastern.edu" type="email" id="wd-email" />
      <br />
      <select defaultValue="STUDENT" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link href="/account/signin">Sign out</Link>
    </div>
  );
}
