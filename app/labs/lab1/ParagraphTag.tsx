// The paragraph tag adds vertical space around text
export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default browsers
        render them as one contiguous piece of text as shown here on the
        right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph tag
        to tell browsers to render the gaps.
      </p>

      <p id="wd-p-your-1">
        My name is Coco Choi. On most weekends I board dogs at my home, so my
        living room is usually full of paws and toys. When the weather is good I
        drive the dogs out for a hike, and we walk until everyone is tired. My
        two cats watch all of this from the top of the shelf.
      </p>
      <p id="wd-p-your-2">
        This Fall I am an intern at Amazon, and I take CS5610 because I want to
        build a whole web app by myself. At work I see big systems, but I only
        touch one small part. In this class I write the user interface, the
        server, and the database, so I can finally see how all the pieces fit
        together.
      </p>

      <p id="wd-ai-p">
        Wrapping text in a paragraph tag creates vertical spacing because the
        browser treats the paragraph as a block element. Block elements add
        margin above and below their content by default.
      </p>
    </div>
  );
}
