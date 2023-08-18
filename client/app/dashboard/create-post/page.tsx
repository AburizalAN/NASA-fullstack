"use client";

import CreatePost from "@/components/features/dashboard/CreatePost";
import withAuth from "@/hocs/withAuth";

const Page = () => {
  return (
    <CreatePost />
  )
}

export default withAuth(Page);