// The background-color property fills the area behind the content
export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>
      <p className="wd-bg-color-yellow wd-fg-color-black">
        This is my own block. The yellow background with dark text stays easy
        to read.
      </p>
      <p id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
        This sample block also stacks a yellow background with black text.
      </p>
    </div>
  );
}
