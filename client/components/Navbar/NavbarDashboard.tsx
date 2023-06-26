import { BiSearch } from "react-icons/bi";

const NavbarDashboard = () => {
  return (
    <nav className="bg-white border-b border-slate-200 text-gray-500">
      <div className="flex py-4 px-6 items-center w-full mx-auto">
        <div className="ml-auto">
          <div className="input shadow-none flex items-center bg-slate-100">
            <div className="pr-3 border-r text-gray-400"><BiSearch /></div>
            <input className="outline-none ml-3 bg-transparent" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarDashboard;