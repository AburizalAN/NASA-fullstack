import { RiArrowRightDoubleFill } from "react-icons/ri";

const Projects = () => {
  return (
    <section className="max-w-6xl m-auto">
      <h2 className="font-semibold mb-3">Projects</h2>
      <h1 className="mb-9 font-bold">{"Somethings I've Built"}</h1>
      <div className="grid grid-cols-2 gap-6">
        {[...Array(4)].map((item, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <div className="h-[300px] w-full bg-gray-200">
            </div>
            <div className="p-6 bg-white">
              <h3 className="font-bold mb-3">Personal Finance App</h3>
              <p className="text-gray-500">{"This is a personal finance app that I built using Next.js and Redux SAGA. It is a simple app that allows you to track your expenses and incomes. It's responsive and works on mobile devices."}</p>
              <div className="flex flex-shrink-0 flex-wrap gap-3 mt-4">
                <div className="text-indigo-400 text-sm px-3 py-1 bg-indigo-50 rounded-md border-indigo-300 border">
                  Typescript
                </div>
                <div className="text-indigo-400 text-sm px-3 py-1 bg-indigo-50 rounded-md border-indigo-300 border">
                  Next.js
                </div>
                <div className="text-indigo-400 text-sm px-3 py-1 bg-indigo-50 rounded-md border-indigo-300 border">
                  PWA
                </div>
                <div className="text-indigo-400 text-sm px-3 py-1 bg-indigo-50 rounded-md border-indigo-300 border">
                  Material UI
                </div>
                <div className="text-indigo-400 text-sm px-3 py-1 bg-indigo-50 rounded-md border-indigo-300 border">
                  Styled Components
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <a className="no-underline cursor-pointer font-semibold text-indigo-600 flex items-center gap-x-2">
                  <span>View Website</span>
                  <span><RiArrowRightDoubleFill /></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;