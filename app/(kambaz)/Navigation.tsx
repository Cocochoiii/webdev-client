// The Kambaz sidebar is a fixed black column of icon tiles
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import "@/app/labs/lab2/tailwind/utilities.css";

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] overflow-y-auto bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center"
      >
        <img
          src="/images/NEU.png"
          width="75px"
          alt="Northeastern University"
          className="inline-block"
        />
      </a>
      <Link
        href="/account"
        id="wd-account-link"
        className={
          pathname.startsWith("/account")
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <FaRegCircleUser
          className={
            pathname.startsWith("/account")
              ? "inline-block text-3xl text-red-600"
              : "inline-block text-3xl text-white"
          }
        />
        <br />
        Account
      </Link>
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className={
          pathname === "/dashboard"
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Dashboard
      </Link>
      <Link
        href="/dashboard"
        id="wd-course-link"
        className={
          pathname.startsWith("/courses")
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <LiaBookSolid className="inline-block text-3xl text-red-600" />
        <br />
        Courses
      </Link>
      <Link
        href="/calendar"
        id="wd-calendar-link"
        className={
          pathname.startsWith("/calendar")
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <IoCalendarOutline className="inline-block text-3xl text-red-600" />
        <br />
        Calendar
      </Link>
      <Link
        href="/inbox"
        id="wd-inbox-link"
        className={
          pathname.startsWith("/inbox")
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <FaInbox className="inline-block text-3xl text-red-600" />
        <br />
        Inbox
      </Link>
      <Link
        href="/labs"
        id="wd-labs-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaBook className="inline-block text-3xl text-red-600" />
        <br />
        Labs
      </Link>
      <Link
        href="/labs"
        id="wd-ai-nav-help"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaCircleQuestion className="inline-block text-3xl text-red-600" />
        <br />
        Help
      </Link>
    </nav>
  );
}
