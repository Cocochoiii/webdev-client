// The class name can come from a variable or a ternary
import "./Classes.css";
export default function Classes() {
  const color = "blue";
  const dangerous = true;
  const weekend = true;
  const shade = "green";
  return (
    <div id="wd-classes">
      <h2>Classes</h2>
      <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
        Yellow background
      </div>
      <div className="wd-bg-blue wd-fg-black wd-padding-10px">
        Blue background
      </div>
      <div className="wd-bg-red wd-fg-black wd-padding-10px">
        Red background
      </div>
      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        Dynamic Blue background
      </div>
      <div
        className={`${dangerous ? "wd-bg-red" : "wd-bg-green"} wd-fg-black wd-padding-10px`}
      >
        Dangerous background
      </div>
      <div
        className={`${weekend ? "wd-bg-green" : "wd-bg-yellow"} wd-fg-black wd-padding-10px`}
      >
        {weekend ? "Green" : "Yellow"} background for a weekend hike
      </div>
      <div className={`wd-bg-${shade} wd-fg-black wd-padding-10px`}>
        Dynamic Green background
      </div>
      <hr />
    </div>
  );
}
