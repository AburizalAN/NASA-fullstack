"use client";

import { NextPage } from "next";
import DetailBlog from "@/components/features/blog/DetailBlog";

const Index = (props: any) => {
  return (
    <DetailBlog {...props} />
  )
}

export default Index;
