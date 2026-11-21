// The Dashboard loads courses from the server and saves every change
"use client";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";
import { type Course } from "../courses/client";
import { useAccountContext } from "../account/AccountContext";
const emptyCourse: Course = {
  _id: "0",
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
  department: "D123",
  credits: 4,
  description: "New Description",
  image: "/images/reactjs.jpg",
  term: "Fall 2026",
};
export default function Dashboard() {
  const { currentUser } = useAccountContext();
  const [courses, setCourses] = useState<Course[]>([]);
  const [myCourses, setMyCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const allCourses = await client.fetchAllCourses();
      if (currentUser) {
        const enrolledCourses = await client.findMyCourses();
        setMyCourses(enrolledCourses);
        setCourses(showAllCourses ? allCourses : enrolledCourses);
      } else {
        setMyCourses([]);
        setCourses(allCourses);
      }
      setErrorMessage("");
    } catch {
      setCourses([]);
      setErrorMessage("Unable to load the courses. Is the server running?");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser, showAllCourses]);
  const addCourse = async () => {
    setSaving(true);
    try {
      await client.createCourse(course);
      await fetchCourses();
    } catch {
      setErrorMessage("The server did not save that change. Try again.");
    }
    setSaving(false);
  };
  const updateCourse = async () => {
    setSaving(true);
    try {
      await client.updateCourse(course);
      await fetchCourses();
    } catch {
      setErrorMessage("The server did not save that change. Try again.");
    }
    setSaving(false);
  };
  const deleteCourse = async (courseId: string) => {
    setSaving(true);
    try {
      await client.deleteCourse(courseId);
      await fetchCourses();
    } catch {
      setErrorMessage("The server did not save that change. Try again.");
    }
    setSaving(false);
  };
  const enroll = async (courseId: string) => {
    setSaving(true);
    try {
      await client.enrollIntoCourse(courseId);
      await fetchCourses();
    } catch {
      setErrorMessage("The server did not save that change. Try again.");
    }
    setSaving(false);
  };
  const unenroll = async (courseId: string) => {
    setSaving(true);
    try {
      await client.unenrollFromCourse(courseId);
      await fetchCourses();
    } catch {
      setErrorMessage("The server did not save that change. Try again.");
    }
    setSaving(false);
  };
  const isEnrolled = (courseId: string) =>
    myCourses.some((c) => c._id === courseId);
  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser && (
          <button
            type="button"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            id="wd-enrollments-toggle"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </button>
        )}
      </div>
      <hr />
      {errorMessage && (
        <p id="wd-dashboard-error" className="my-2 rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
          id="wd-add-new-course-click"
          onClick={addCourse}
          disabled={saving}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium disabled:opacity-50"
          id="wd-update-course-click"
          onClick={updateCourse}
          disabled={saving}
        >
          Update
        </button>
        {saving && <span className="text-sm text-neutral-500">Saving...</span>}
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        type="date"
        className="mb-3 block rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      {loading && (
        <p id="wd-dashboard-loading" className="my-2 text-neutral-500">
          Loading courses from the server...
        </p>
      )}
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            onDelete={() => deleteCourse(c._id)}
            signedIn={currentUser !== null}
            enrolled={isEnrolled(c._id)}
            onEnroll={() => enroll(c._id)}
            onUnenroll={() => unenroll(c._id)}
            saving={saving}
          />
        ))}
      </div>
    </div>
  );
}
