const NavbarCreatePost = () => {
  return (
    <nav className="bg-white border-b border-slate-200 text-gray-500">
      <div className="flex py-3 px-4 items-center max-w-7xl mx-auto">
        <div className="flex-1">
          <div className="flex gap-x-5">
            <div className="py-2 px-4 text-sm rounded-md">menu2</div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-x-3">
            <button className="py-2 px-4 text-sm rounded-md bg-slate-200 hover:bg-slate-300 transition-all">Save draft</button>
            <button className="py-2 px-4 text-sm text-white rounded-md bg-sky-600 hover:bg-sky-700 transition-all">Publish</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarCreatePost;