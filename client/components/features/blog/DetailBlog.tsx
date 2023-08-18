"use client";

import * as React from "react";
import { useGetDetailPost } from "@/services/postServices";
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);
hljs.registerLanguage('js', js);
hljs.registerLanguage('ts', ts);

const DetailBlog = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const { data: post, isValidating: loadingPost }: any = useGetDetailPost({ slug });

  React.useEffect(() => {
    if (post?.content) {
      hljs.highlightAll();
    }
  }, [post?.content]);

  return (
    <div className="h-ful">
      <div className="max-w-6xl m-auto py-20 px-4">
        <h1 className="font-bold mb-5 text-indigo-950">
          {post?.title}
        </h1>
        <div className="text-gray-500 text-sm">
          Written by AburizalAN on April 10, 2023
        </div>
        <div className="divider my-5"></div>
        <section className="blog-post-content" dangerouslySetInnerHTML={{ __html: post?.content }}></section>
      </div>
    </div>
  );
};

export default DetailBlog;
