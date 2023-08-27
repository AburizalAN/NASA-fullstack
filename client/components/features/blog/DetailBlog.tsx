"use client";

import * as React from "react";
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import Giscus from '@giscus/react';
import { RiTwitterFill } from "react-icons/ri";
import 'highlight.js/styles/monokai-sublime.css';
import { queryString } from "@/utils/helpers";
import moment from "moment";

hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);
hljs.registerLanguage('js', js);
hljs.registerLanguage('ts', ts);

const DetailBlog = ({ post }: { post: any }) => {
  React.useEffect(() => {
    hljs.highlightAll();
  });

  const shareTwitter = () => {
    console.log("Share Twitter");
    const text = `Saya baru saja membaca artikel berjudul ${post?.title}%0a%0a`
    const search = queryString({ text, url: window.location.href });
    window.open(`https://twitter.com/intent/tweet?${search}`, '_blank');
  };

  return (
    <div className="h-ful">
      <div className="max-w-6xl m-auto py-20 px-4">
        <h1 className="font-bold mb-5 text-indigo-950">
          {post?.title}
        </h1>
        <div className="text-gray-500 text-sm">
          Written by AburizalAN on {moment(post?.published_at).format("MMMM DD, YYYY")}
        </div>
        <div className="divider my-5"></div>
        <section className="blog-post-content" dangerouslySetInnerHTML={{ __html: post?.content }}></section>
        <div className="mt-20">
          <button onClick={shareTwitter} className="btn-share twitter">
            <RiTwitterFill />
            <div className="border-l border-gray-300 mx-2 h-auto"></div>
            <span>Share this article</span>
          </button>
        </div>
        <div className="mt-6">
          <Giscus
            id="comments"
            repo="AburizalAN/test-giscus"
            repoId="R_kgDOKLufHA"
            category="Announcements"
            categoryId="DIC_kwDOKLufHM4CY4Gr"
            mapping="specific"
            term={post?.id && `post-#${post?.id}-comments`}
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="light"
            lang="en"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
