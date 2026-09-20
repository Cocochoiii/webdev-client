// Grid classes lay out children in columns with gaps
export default function TailwindGrids() {
  return (
    <div>
      <h3 className="mt-6 text-3xl font-bold">4 Columns Grid</h3>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className="text-center bg-blue-300 p-3">
            {String(i + 1).padStart(2, "0")}
          </div>
        ))}
      </div>
      <div id="wd-tailwind-grid-system" className="mt-6">
        <h2>Grid system</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-red-500 text-white">
            <h3>Left half</h3>
          </div>
          <div className="bg-blue-500 text-white">
            <h3>Right half</h3>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-2">
          <div className="col-span-4 bg-yellow-500">
            <h3>One third</h3>
          </div>
          <div className="col-span-8 bg-green-500 text-white">
            <h3>Two thirds</h3>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-2">
          <div className="col-span-2 bg-black text-white">
            <h3>Sidebar</h3>
          </div>
          <div className="col-span-8 bg-gray-500 text-white">
            <h3>Main content</h3>
          </div>
          <div className="col-span-2 bg-blue-400">
            <h3>Sidebar</h3>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-2">
          <div className="col-span-4 bg-teal-500 text-white">
            <h3>My equal third</h3>
          </div>
          <div className="col-span-4 bg-teal-600 text-white">
            <h3>My equal third</h3>
          </div>
          <div className="col-span-4 bg-teal-700 text-white">
            <h3>My equal third</h3>
          </div>
        </div>
        <div id="wd-ai-grid" className="grid grid-cols-12 gap-2 mt-2">
          <div className="col-span-3 bg-orange-500 text-white">
            <h3>Sample quarter</h3>
          </div>
          <div className="col-span-9 bg-indigo-500 text-white">
            <h3>Sample three quarters</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
