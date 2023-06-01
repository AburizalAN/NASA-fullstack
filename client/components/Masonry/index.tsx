"use client";

import * as React from "react";
import clsx from "clsx";

interface MasonryProps {
  children: React.ReactNode;
  cols: number;
  gap?: number;
}

interface ColumnsObj {
  [key: number]: number;
}

interface MasonryItemProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = React.useState<any>(0);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return windowWidth;
};

const Masonry: React.FC<MasonryProps> = ({ children, cols, gap = 0 }) => {
  const windowWidth = useWindowWidth();

  const runMasonryScript = () => {
    const columns: ColumnsObj = {};

    for (let i = 0; i < cols; i++) {
      columns[i] = 0;
    }

    const getCol = (): number => {
      let minCol = 0;
      for (let i = 0; i < cols; i++) {
        minCol = columns[i] < columns[minCol] ? i : minCol;
      }
      return minCol;
    };

    const getMaxHeight = (): number => {
      let height = 0;
      for (let i = 0; i < cols; i++) {
        height = columns[i] > height ? columns[i] : height;
      }
      return height;
    };

    const container: HTMLElement | null = document.getElementById("masonry");
    if (container) {
      const padding = gap / 2;
      const width = container?.clientWidth;
      const colWidth = width / cols - gap;
  
      const childs = document.querySelectorAll<HTMLElement>(".masonry-item");
      if (childs) {
        for (let i = 0; i < childs.length; i++) {
          const col = getCol();
          childs[i].style.order = `${col + 1}`;
          childs[i].style.width = `${colWidth}px`;
          columns[col] = columns[col] + childs[i].clientHeight + gap;
        }
        container.style.height = `calc(${getMaxHeight() + 30}px)`
      }
    };
  }

  React.useEffect(() => {
    runMasonryScript();
  }, [windowWidth, cols]);

  return (
    <div
      id="masonry"
      className="relative w-full flex flex-col flex-wrap content-start"
    >
      {children}
    </div>
  );
};

export const MasonryItem: React.FC<MasonryItemProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx("masonry-item", "transition-all", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Masonry;
