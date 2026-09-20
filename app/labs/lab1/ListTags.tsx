// Ordered lists use numbers and unordered lists use bullets
export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>

      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>

      My favorite recipe, Hong Kong style har gow (shrimp dumplings):
      <ol id="wd-your-favorite-recipe">
        <li>Chop the shrimp and mix it with bamboo shoots, sesame oil, and white pepper.</li>
        <li>Stir boiling water into wheat starch to make the dough, then knead it warm.</li>
        <li>Roll the dough thin and cut small round wrappers.</li>
        <li>Spoon in the filling and fold the pleats on one side only.</li>
        <li>Steam for six minutes on high heat, until the wrapper turns clear.</li>
        <li>Eat them right away with hot jasmine tea.</li>
      </ol>

      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>

      My own favorite books (in no particular order)
      <ul id="wd-your-books">
        <li>The Odyssey</li>
        <li>Project Hail Mary</li>
        <li>Norwegian Wood</li>
        <li>The Little Prince</li>
      </ul>

      HTML tags from this chapter
      <ul id="wd-ai-html-tags">
        <li>h1 - the largest heading</li>
        <li>p - a paragraph of text</li>
        <li>ol - a numbered list</li>
        <li>ul - a bulleted list</li>
        <li>table - rows and columns of data</li>
      </ul>
    </div>
  );
}
