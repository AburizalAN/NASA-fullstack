"use client";

import CreatePost from "@/components/features/dashboard/CreatePost";
import withAuth from "@/hocs/withAuth";

const Page = (props: any) => {
  return (
    <CreatePost {...props} />
  )
}

export default withAuth(Page);