// This is my own student profile form
export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Text fields</h5>
      <label htmlFor="wd-your-first-name">First name:</label>
      <input type="text" defaultValue="Coco" id="wd-your-first-name" />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input type="text" defaultValue="Choi" id="wd-your-last-name" />
      <br />
      <label htmlFor="wd-your-student-id">Student ID:</label>
      <input
        type="password"
        placeholder="student ID"
        id="wd-your-student-id"
      />
      <br />

      <h5>Text box</h5>
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={6}
        defaultValue="I am a graduate student at Northeastern. I am on a Co-op at Amazon right now, so I see large systems every day, but I only touch a small part of them. In this class I want to build a whole web app on my own, from the screen the user clicks to the data in the database."
      />
      <br />

      <h5>Radio buttons</h5>
      <label>Class standing:</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />
      <label>Am I on Co-op this term?</label>
      <br />
      <input
        type="radio"
        name="your-coop"
        id="wd-your-on-coop"
        defaultChecked
      />
      <label htmlFor="wd-your-on-coop">Yes, I am at Amazon</label>
      <br />
      <input type="radio" name="your-coop" id="wd-your-no-coop" />
      <label htmlFor="wd-your-no-coop">No, classes only</label>
      <br />

      <h5>Checkboxes</h5>
      <label>What I care about:</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-typescript"
        defaultChecked
      />
      <label htmlFor="wd-your-typescript">TypeScript</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-react"
        defaultChecked
      />
      <label htmlFor="wd-your-react">React and Next.js</label>
      <br />
      <input type="checkbox" name="your-interests" id="wd-your-cloud" />
      <label htmlFor="wd-your-cloud">Cloud and AWS</label>
      <br />
      <input type="checkbox" name="your-interests" id="wd-your-design" />
      <label htmlFor="wd-your-design">User interface design</label>
      <br />

      <h5>Dropdowns</h5>
      <label htmlFor="wd-your-major">My major: </label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
        <option value="CY">Cybersecurity</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics I want to go deeper on: </label>
      <br />
      <select multiple id="wd-your-topics" defaultValue={["REACT", "MONGO"]}>
        <option value="HTML">HTML and CSS</option>
        <option value="REACT">React and Next.js</option>
        <option value="NODE">Node and Express</option>
        <option value="MONGO">MongoDB</option>
      </select>
      <br />

      <h5>Typed fields</h5>
      <label htmlFor="wd-your-email">School email: </label>
      <input
        type="email"
        defaultValue="choi.coco@northeastern.edu"
        id="wd-your-email"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        type="number"
        defaultValue="2027"
        min={2026}
        max={2035}
        id="wd-your-grad-year"
      />
      <br />
      <label htmlFor="wd-your-start-date">Co-op start date: </label>
      <input
        type="date"
        defaultValue="2026-07-06"
        min="2000-01-01"
        max="2035-12-31"
        id="wd-your-start-date"
      />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited I am about this course (0 to 10):
      </label>
      <input
        type="range"
        defaultValue="9"
        min="0"
        max="10"
        id="wd-your-excitement"
      />
      <br />

      <h5>Buttons</h5>
      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
