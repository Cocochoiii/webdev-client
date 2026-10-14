// var, let, and const declare variables and constants
export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let name = "Coco";
  const greeting = "Hi, I am " + name + " and I hike with my dogs";
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <br />
      name = {name}
      <br />
      greeting = {greeting}
      <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
