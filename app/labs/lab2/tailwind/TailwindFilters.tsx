// Filter classes blur, gray out, or brighten an image
export default function TailwindFilters() {
  const src = "/images/reactjs.jpg";
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 mt-8">Filters</h2>
      <h3>Blurs</h3>
      <div className="flex">
        <img className="blur-none w-1/4" src={src} alt="blur none" />
        <img className="blur-sm w-1/4" src={src} alt="blur sm" />
        <img className="blur-lg w-1/4" src={src} alt="blur lg" />
        <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
      </div>
      <h3>My contrast row</h3>
      <div className="flex">
        <img className="contrast-50 w-1/4" src={src} alt="contrast 50" />
        <img className="contrast-100 w-1/4" src={src} alt="contrast 100" />
        <img className="contrast-150 w-1/4" src={src} alt="contrast 150" />
        <img className="contrast-200 w-1/4" src={src} alt="contrast 200" />
      </div>
      <h3>Grayscale and brightness</h3>
      <div id="wd-ai-filters" className="flex">
        <img className="grayscale w-1/4" src={src} alt="grayscale" />
        <img className="grayscale-0 w-1/4" src={src} alt="grayscale 0" />
        <img className="brightness-50 w-1/4" src={src} alt="brightness 50" />
        <img className="brightness-150 w-1/4" src={src} alt="brightness 150" />
      </div>
    </div>
  );
}
