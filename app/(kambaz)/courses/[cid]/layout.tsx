// The course layout asks the server for the course name
"use client";
import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import * as client from "../client";
import { type Course } from "../client";
import { useAccountContext } from "../../account/AccountContext";
export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const { currentUser } = useAccountContext();
  const router = useRouter();
  const [course, setCourse] = useState<Course | undefined>(undefined);
  const [showCourseNav, setShowCourseNav] = useState(true);
  const fetchCourse = async () => {
    try {
      const courses: Course[] = await client.fetchAllCourses();
      setCourse(courses.find((c) => c._id === courseId));
      if (currentUser) {
        const myCourses: Course[] = await client.findMyCourses();
        if (!myCourses.some((c) => c._id === courseId)) {
          router.push("/dashboard");
        }
      }
    } catch {
      setCourse(undefined);
    }
  };
  useEffect(() => {
    fetchCourse();
  }, [courseId, currentUser]);
  return (
    <div id="wd-courses">
      <h2 className="text-2xl font-semibold text-red-600">
        <FaAlignJustify
          className="me-4 mb-1 inline cursor-pointer text-xl"
          onClick={() => setShowCourseNav(!showCourseNav)}
          title="Toggle course navigation"
        />
        <Breadcrumb course={course} />
        <span className="ms-2 text-base text-neutral-500">({course?._id})</span>
      </h2>
      <hr className="my-3" />
      <div className="flex gap-4">
        {showCourseNav ? (
          <div className="hidden w-[140px] shrink-0 md:block">
            <CourseNavigation cid={courseId} />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
