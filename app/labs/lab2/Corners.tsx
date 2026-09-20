// The border-radius property rounds the corners
export default function Corners() {
  return (
    <div id="wd-css-corners">
      <h3>Rounded corners</h3>
      <p className="wd-rounded-corners-top wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners on the top
      </p>
      <p className="wd-rounded-corners-bottom wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners at the bottom
      </p>
      <p className="wd-rounded-corners-all-around wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners all around
      </p>
      <p className="wd-rounded-corners-inline wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Different rounded corners
      </p>
      <p className="wd-rounded-corners-right wd-border-thin wd-border-red wd-border-solid wd-padding-fat">
        My own box rounds only the right corners with a bigger radius
      </p>
      <p
        id="wd-ai-corners"
        className="wd-ai-rounded-left wd-border-thin wd-border-blue wd-border-solid wd-padding-fat"
      >
        Sample box rounds only the left corners
      </p>
    </div>
  );
}
