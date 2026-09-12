// The anchor tag makes links to other pages
export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />

      <a href="https://developer.mozilla.org" id="wd-your-link">
        MDN Web Docs
      </a>
      <br />
      <a
        href="https://github.com/Cocochoiii"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        My GitHub profile
      </a>
      <br />

      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}
