import { BiHomeAlt, BiFolderOpen, BiChevronRight } from "react-icons/bi";

const SidebarDashboard = () => {
  return (
    <div className='w-[300px] p-4 bg-blue-700 text-white'>
      <ul className="flex flex-col gap-y-[4px] text-sm font-semibold">
        <li className="p-2 rounded-md bg-blue-800 flex items-center cursor-pointer">
          <div className="mr-3 text-gray-100">
            <BiHomeAlt size={24} />
          </div>
          <div className="flex-1">Dashboard</div>
          {/* <BiChevronRight size={20} /> */}
        </li>
        <li className="p-2 rounded-md flex items-center cursor-pointer">
          <div className="mr-3 text-gray-100">
            <BiFolderOpen size={24} />
          </div>
          <div className="flex-1">Blog</div>
          {/* <BiChevronRight size={20} /> */}
        </li>
        <li className="p-2 rounded-md flex items-center cursor-pointer">
          <div className="mr-3 text-gray-100">
            <BiFolderOpen size={24} />
          </div>
          <div className="flex-1">Other</div>
          {/* <BiChevronRight size={20} /> */}
        </li>
      </ul>
    </div>
  )
}

export default SidebarDashboard;