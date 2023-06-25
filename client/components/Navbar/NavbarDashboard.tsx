const NavbarDashboard = () => {
  return (
    <nav className="bg-white border-b border-slate-200 text-gray-500">
      <div className="flex py-3 px-4 items-center w-full mx-auto">
        <div className="flex-1">
          
        </div>
        <div className="">
          <div className="flex gap-x-3">
            <button className="btn">Save draft</button>
            <button className="btn btn-primary">Publish</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarDashboard;