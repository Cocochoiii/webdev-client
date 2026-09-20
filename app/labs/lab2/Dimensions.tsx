// The width and height properties size an element
export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div className="wd-dimension-wide wd-bg-color-green wd-fg-color-white">
          My own wide box keeps this size even with all of these extra words
        </div>
        <div id="wd-ai-dimension" className="wd-ai-dimension-box wd-bg-color-yellow">
          This sample box has a long sentence so the declared 120 by 60 size
          is easy to see
        </div>
      </div>
    </div>
  );
}
