"use client";

import dynamic from "next/dynamic";
const Home = dynamic(() => import("@/components/content/Home"), { ssr: false });

export default function Index() {
  return <Home />;
}
