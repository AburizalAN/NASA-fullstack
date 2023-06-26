import * as React from "react";

type DropdownProps = {
  children: (props: ChildProps) => React.ReactNode;
  content?: React.ReactNode;
  list?: { content: string | React.ReactNode }[]
};

type ChildProps = {
  openDropdown: () => void;
  toggle: boolean;
};

const Dropdown = ({ children, content, list }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const childProps: ChildProps = {
    openDropdown: () => setToggle((prev) => (prev ? false : true)),
    toggle: toggle,
  };

  React.useEffect(() => {
    if (toggle) {
      setIsOpen(true);
    }
    if (!toggle && isOpen) {
      const element = ref.current;
      if (!element) return;
      element.classList.add("closing");
      element.addEventListener(
        "animationend",
        () => {
          setIsOpen(false);
        },
        { once: true }
      );
    }
  }, [toggle]);

  React.useEffect(() => {
    document.addEventListener("mousedown", (event: any) => {
      if (
        !wrapperRef.current?.contains(event.target)
      ) {
        setToggle(false);
      }
    });
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {children(childProps)}
      {isOpen ? (
        <div
          ref={ref}
          className="dropdown z-50 bg-white rounded-md p-1 absolute top-full right-0 shadow-lg ring-1 ring-black ring-opacity-5"
        >
          {list ? (
            <div className="flex flex-col gap-y-1 w-56">
              {list.map((item, i) => (
                <div key={i} className="dropdown-item relative p-2 rounded-md text-sm hover:bg-violet-500 hover:text-white transition-all">
                  {item.content}
                </div>
              ))}
            </div>
          ) : null}
          {content}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
