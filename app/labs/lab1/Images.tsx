// The image tag shows pictures from the web or from my project
export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />

      One of my boarding dogs. We stopped by the pond after our walk:
      <br />
      <img
        id="wd-your-image"
        src="/images/dogs.jpg"
        width="300px"
        alt="Me with a golden retriever I was boarding, next to a pond in Boston"
      />
      <br />
      My own two cats. The orange one always hugs the silver one:
      <br />
      <img
        id="wd-your-cats"
        src="/images/cats.jpg"
        width="300px"
        alt="My two British Shorthair cats hugging each other"
      />
      <br />
    </div>
  );
}
