/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Blog, Blogs } from "./blogs.model";
import { LAST_BLOGS } from "@consts/static";

const HomeViewBlog = () => {
  return (
    <div className="home_view-blog">
      <div className="title">
        <p>{LAST_BLOGS}</p>
      </div>

      <div className="blog_list">
        {Blogs?.map((blog: Blog) => (
          <div key={blog.id} className="blog_list-item">
            <div className="wrapper">
              <div className="hero">
                <Link href="/blog/blog-sample">
                  <a>
                    <img
                      src={blog.thumbnail}
                      width="100%"
                      height="100%"
                      alt="x"
                    />
                  </a>
                </Link>
              </div>
              <div className="body">
                <span className="publish-date">{blog.date}</span>
                <Link href="/blog/sample-blog">
                  <a>
                    <h2>{blog.title}</h2>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeViewBlog;
