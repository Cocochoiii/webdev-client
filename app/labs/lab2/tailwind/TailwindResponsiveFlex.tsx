// The boxes stack in a column, then md:flex-row puts them side by side
export default function TailwindResponsiveFlex() {
  return (
    <div
      id="wd-tailwind-responsive-flex"
      className="flex flex-col md:flex-row gap-4"
    >
      <div className="bg-red-500 p-4 text-white">One</div>
      <div className="bg-green-500 p-4 text-white">Two</div>
      <div className="bg-blue-500 p-4 text-white">Three</div>
    </div>
  );
}
