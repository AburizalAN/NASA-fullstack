"use client";

import Masonry, { MasonryItem } from "@/components/Masonry";
import useWindowWidth from "@/hooks/useWindowWidth";

export default function Home() {
  const windowWidth = useWindowWidth();
  const cols = windowWidth < 641 ? 1 : windowWidth < 993 ? 2  : 3;
  return (
    <main>
      <div className="max-w-7xl m-auto">
        <Masonry cols={cols}>
          <MasonryItem>
            <div className="post-card-item">
              <div className="h-[300px] bg-amber-200 rounded-t-xl flex items-center justify-center">
                image
              </div>
              <div className="p-4 sm:p-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                  Lorem Ipsum Dolor sit amet
                </h1>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin aliquam dui, sed cursus urna ullamcorper non.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </MasonryItem>
          <MasonryItem>
            <div className="post-card-item">
              <div className="h-[400px] bg-indigo-400 rounded-t-xl flex items-center justify-center">
                image
              </div>
              <div className="p-4 sm:p-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                  Lorem Ipsum Dolor sit amet
                </h1>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin aliquam dui, sed cursus urna ullamcorper non.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin aliquam dui.
                </p>
              </div>
            </div>
          </MasonryItem>
          <MasonryItem>
            <div className="post-card-item">
              <div className="h-[300px] bg-lime-200 rounded-t-xl flex items-center justify-center">
                image
              </div>
              <div className="p-4 sm:p-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                  Lorem Ipsum Dolor sit amet
                </h1>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin aliquam dui, sed cursus urna ullamcorper non.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin aliquam dui.
                </p>
              </div>
            </div>
          </MasonryItem>
          <MasonryItem>
            <div className="post-card-item">
              <div className="h-[300px] bg-orange-200 rounded-t-xl flex items-center justify-center">
                image
              </div>
              <div className="p-4 sm:p-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                  Lorem Ipsum Dolor sit amet
                </h1>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin aliquam dui, sed cursus urna ullamcorper non.
                </p>
              </div>
            </div>
          </MasonryItem>
          <MasonryItem>
            <div className="post-card-item">
              <div className="h-[400px] bg-pink-200 rounded-t-xl flex items-center justify-center">
                image
              </div>
              <div className="p-4 sm:p-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                  Lorem Ipsum Dolor sit amet
                </h1>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin aliquam dui, sed cursus urna ullamcorper non.
                </p>
              </div>
            </div>
          </MasonryItem>
          <MasonryItem>
            <div className="post-card-item">
              <div className="h-[300px] bg-slate-200 rounded-t-xl flex items-center justify-center">
                image
              </div>
              <div className="p-4 sm:p-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4">
                  Lorem Ipsum Dolor sit amet
                </h1>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin aliquam dui, sed cursus urna ullamcorper non.
                </p>
              </div>
            </div>
          </MasonryItem>
        </Masonry>
      </div>
    </main>
  );
}
