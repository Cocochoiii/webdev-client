// Breakpoint prefixes like md: only apply on wider screens
export default function TailwindResponsiveDesign() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 mt-8">Responsive Design</h2>
      <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/images/dogs.jpg"
              alt="A golden retriever I walk by a pond in Boston"
            />
          </div>
          <div className="p-8 lg:p-12">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              My Weekend Plan
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              Hiking with the Dogs
            </a>
            <p className="mt-2 text-gray-500">
              On a narrow screen this card stacks the photo on top. On a wide
              screen the photo moves beside the text. I take the dogs out on
              Saturday morning, and my two cats guard the apartment while we
              are gone.
            </p>
          </div>
        </div>
      </div>
      <div
        id="wd-ai-responsive"
        className="mx-auto mt-6 max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl md:bg-indigo-50"
      >
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/images/reactjs.jpg"
              alt="ReactJS logo"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Professional Courses
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              Rocket Propulsion Fundamentals
            </a>
            <p className="mt-2 text-gray-500">
              An in-depth study of the fundamentals of rocket propulsion. This
              sample card turns light indigo at the md breakpoint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
