"use client";

import dynamic from "next/dynamic";
const Home = dynamic(() => import("@/components/content/Home"), { ssr: false });

export default function Index() {
  return (
    <div className="bg-indigo-50">
      <Home />
    </div>
  )
}
