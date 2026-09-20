// The box model has four layers: content, padding, border, and margin
export default function BoxModel() {
  return (
    <div id="wd-css-box-model">
      <h2>Box model</h2>
      <div className="wd-box-model-margin">
        margin
        <div className="wd-box-model-border">
          border
          <div className="wd-box-model-padding">
            padding
            <div className="wd-box-model-content">content</div>
          </div>
        </div>
      </div>
      <h3>box-sizing</h3>
      <div className="wd-box-sizing-demo">
        <div className="wd-box-sizing-content">
          content-box: width 200px plus padding and border
        </div>
        <div className="wd-box-sizing-border">
          border-box: width 200px includes padding and border
        </div>
        {/* border-box keeps the declared 200px width on screen */}
        <div className="wd-box-sizing-border">
          Sample third box: same width, padding, and border as the others
        </div>
      </div>
    </div>
  );
}
