// Flex lines up children in a row without floats
export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white">Column 3</div>
      </div>
      <h3>Grow</h3>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-flex-grow-1 wd-bg-color-red wd-fg-color-white">
          Column 3
        </div>
      </div>
      <h3>Fixed width column</h3>
      <div className="wd-flex-row-container">
        <div className="wd-width-75px wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-flex-grow-1 wd-bg-color-red wd-fg-color-white">
          Column 3
        </div>
      </div>
      <h3>My own row</h3>
      <div className="wd-flex-row-container">
        <div className="wd-flex-grow-1 wd-bg-color-green wd-fg-color-white">
          My column grows
        </div>
        <div className="wd-width-75px wd-bg-color-yellow">Pinned</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Natural</div>
      </div>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-width-75px wd-bg-color-yellow">Pinned</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Natural</div>
        <div className="wd-flex-grow-1 wd-bg-color-red wd-fg-color-white">
          Sample stretch
        </div>
      </div>
    </div>
  );
}
