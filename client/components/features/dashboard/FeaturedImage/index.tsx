import * as React from "react";
import ModalGallery from "./ModalGallery";
import ModalURL from "./ModalURL";
import clsx from "clsx";

const FeaturedImage = () => {
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const [toggleDropdown, setToggleDropdown] = React.useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = React.useState(false);
  
  React.useEffect(() => {
    if (toggleDropdown) {
      setIsOpenDropdown(true)
    }

    if (!toggleDropdown && isOpenDropdown) {
      const element = dropdownRef.current;
      if (!element) return;
      element.classList.add("closing");
      element.addEventListener(
        "animationend",
        () => {
          setIsOpenDropdown(false);
        },
        { once: true }
      );
    }
  }, [toggleDropdown]);

  React.useEffect(() => {
    document.addEventListener("mousedown", (event: any) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setToggleDropdown(false)
      }
    });
  }, []);

  return (
    <div className="relative">
      <div
        onClick={() => setToggleDropdown(true)}
        className="bg-slate-200 hover:bg-slate-300 transition-colors h-[160px] rounded-md grid place-items-center cursor-pointer"
      >
        <div>Add Image</div>
      </div>

      <div ref={dropdownRef} className={clsx(isOpenDropdown ? "block" : "hidden", "dropdown bg-white rounded-md shadow-md shadow-stone-200 absolute p-1 w-full left-0 top-[calc(100%_+_10px)]")}>
        <div className="text-center p-2 rounded-md text-sm hover:bg-violet-500 hover:text-white transition-all cursor-pointer">
          + Upload
        </div>
        <ModalGallery>
          {({ openModal }) => (
            <div
              onClick={() => {
                openModal();
                setToggleDropdown(false);
              }} 
              className="text-center p-2 rounded-md text-sm hover:bg-violet-500 hover:text-white transition-all cursor-pointer"
            >
              From Galery
            </div>
          )}
        </ModalGallery>
        <ModalURL>
          {({ openModal }) => (
            <div
              onClick={() => {
                openModal();
                setToggleDropdown(false);
              }}
              className="text-center p-2 rounded-md text-sm hover:bg-violet-500 hover:text-white transition-all cursor-pointer"
            >
              From URL
            </div>
          )}
        </ModalURL>
      </div>
    </div>
  )
}

export default FeaturedImage;