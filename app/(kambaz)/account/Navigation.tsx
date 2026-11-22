// The account menu shows Profile when signed in and Users for admins
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";
import "../kambaz.css";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? currentUser.role === "ADMIN"
      ? (["profile", "users"] as const)
      : (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  const labels = {
    signin: "Signin",
    signup: "Signup",
    profile: "Profile",
    users: "Users",
  };
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {links.map((link) => (
        <Link
          key={link}
          href={`/account/${link}`}
          className={
            pathname === `/account/${link}`
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {labels[link]}
        </Link>
      ))}
    </div>
  );
}
