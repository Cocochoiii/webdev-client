// The Modules screen nests weeks, lessons, and content items
import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div>
      <button type="button">Collapse All</button>{" "}
      <button type="button">View Progress</button>{" "}
      <select defaultValue="publish-all">
        <option value="publish-all">Publish All</option>
      </select>{" "}
      <button type="button">+ Module</button>
      <ul id="wd-modules">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to the course</li>
            <li className="wd-content-item">Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to Web Development</li>
            <li className="wd-content-item">Creating an HTTP server with Node.js</li>
            <li className="wd-content-item">Creating a React Application</li>
          </Lesson>
        </Module>

        <Module title="Week 2 - CSS and Tailwind">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Learn how to style pages with CSS</li>
            <li className="wd-content-item">Learn the CSS box model</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 3 - Styling With CSS
            </li>
          </Lesson>
        </Module>

        <Module title="Week 3 - React Components">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Learn JavaScript basics</li>
            <li className="wd-content-item">Build reusable React components</li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to JavaScript</li>
            <li className="wd-content-item">Introduction to React</li>
          </Lesson>
        </Module>

        <Module title="Week 4 - Node.js and Express">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Create an HTTP server with Node.js</li>
            <li className="wd-content-item">Implement RESTful Web APIs</li>
          </Lesson>
        </Module>

        <Module title="Week 5 - MongoDB">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Model data with MongoDB</li>
            <li className="wd-content-item">Connect a Web API to a database</li>
          </Lesson>
        </Module>
      </ul>
    </div>
  );
}
