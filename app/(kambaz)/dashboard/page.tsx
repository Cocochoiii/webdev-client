// The Dashboard shows every course I am enrolled in
// For A1 I keep three courses so Run checks can reach every course page
import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
      <div id="wd-dashboard-courses">
        <CourseCard
          id="1234"
          title="CS1234 React JS"
          subtitle="Full Stack software developer"
          image="/images/reactjs.jpg"
        />
        <CourseCard
          id="5610"
          title="CS5610 Web Development"
          subtitle="Full Stack Web Development"
          image="/images/course1.jpg"
        />
        <CourseCard
          id="5520"
          title="CS5520 Mobile Application Development"
          subtitle="Mobile Development"
          image="/images/course2.jpg"
        />
      </div>
    </div>
  );
}
