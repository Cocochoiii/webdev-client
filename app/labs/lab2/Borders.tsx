// Border classes mix a width, a style, and a color
export default function Borders() {
  return (
    <div id="wd-css-borders">
      <h2>Borders</h2>
      <p className="wd-border-fat wd-border-red wd-border-solid">
        Solid fat red border
      </p>
      <p className="wd-border-thin wd-border-blue wd-border-dashed">
        Dashed thin blue border
      </p>
      <p className="wd-border-fat wd-border-blue wd-border-dashed">
        My own mix: dashed fat blue border
      </p>
      <p
        id="wd-ai-border"
        className="wd-border-fat wd-border-dashed wd-border-yellow"
      >
        Sample mix: dashed fat yellow border
      </p>
    </div>
  );
}
