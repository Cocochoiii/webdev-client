// The Dashboard shows my courses as cards in a responsive grid
import "@/app/labs/lab2/tailwind/utilities.css";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-3xl font-semibold">
        Dashboard
      </h1>
      <hr className="my-3" />
      <h2 id="wd-dashboard-published" className="text-2xl">
        Published Courses (12)
      </h2>
      <hr className="my-3" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <CourseCard
          id="5610"
          title="CS5610 Web Development"
          subtitle="Full Stack Web Development. My favorite class this Fall - I use it at my Amazon internship too."
          image="/images/course1.jpg"
        />
        <CourseCard
          id="5520"
          title="CS5520 Mobile Application Development"
          subtitle="Mobile Development"
          image="/images/course2.jpg"
        />
        <CourseCard
          id="5004"
          title="CS5004 Object Oriented Design"
          subtitle="Object Oriented Design in Java"
          image="/images/course3.jpg"
        />
        <CourseCard
          id="5200"
          title="CS5200 Database Management Systems"
          subtitle="Relational Database Systems"
          image="/images/course4.jpg"
        />
        <CourseCard
          id="5800"
          title="CS5800 Algorithms"
          subtitle="Algorithm Design and Analysis"
          image="/images/course5.jpg"
        />
        <CourseCard
          id="6620"
          title="CS6620 Fundamentals of Cloud Computing"
          subtitle="Cloud Computing"
          image="/images/course6.jpg"
        />
        <CourseCard
          id="6510"
          title="CS6510 Advanced Software Development"
          subtitle="Large Scale Software Projects"
          image="/images/course7.jpg"
        />
        <CourseCard
          id="5700"
          title="CS5700 Computer Networks"
          subtitle="Internet Protocols"
          image="/images/course8.jpg"
        />
        <CourseCard
          id="6140"
          title="CS6140 Machine Learning"
          subtitle="Supervised and Unsupervised Learning"
          image="/images/course9.jpg"
        />
        <CourseCard
          id="5100"
          title="CS5100 Foundations of Artificial Intelligence"
          subtitle="Search, Logic and Learning"
          image="/images/course10.jpg"
        />
        <CourseCard
          id="6650"
          title="CS6650 Building Scalable Distributed Systems"
          subtitle="Scalable Systems"
          image="/images/course11.jpg"
        />
        <CourseCard
          id="9999"
          title="CS9999 Sample Course"
          subtitle="Assistant-generated sample - not my course"
          image="/images/reactjs.jpg"
        />
      </div>
    </div>
  );
}
