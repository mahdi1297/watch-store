/* eslint-disable @next/next/no-img-element */
import { LAST_BLOGS } from "@consts/static";
import Image from "next/image";
import React from "react";

const HomeViewBlog = () => {
  return (
    <div className="home_view-blog">
      <div className="title">
        <p>{LAST_BLOGS}</p>
      </div>

      <div className="blog_list">
        <div className="blog_list-item">
          <div className="wrapper">
            <div className="hero">
              <img
                src="/img/products/sample.png"
                width="100%"
                height="100%"
                alt="x"
              />
            </div>
            <div className="body">
              <span className="publish-date">12 شهریور 1401</span>
              <h2>این یک تایتل برای این مقاله است</h2>
            </div>
          </div>
        </div>

        <div className="blog_list-item">
          <div className="wrapper">
            <div className="hero">
              <img
                src="/img/products/sample.png"
                width="100%"
                height="100%"
                alt="x"
              />
            </div>
            <div className="body">
              <span className="publish-date">12 شهریور 1401</span>
              <h2>این یک تایتل برای این مقاله است</h2>
            </div>
          </div>
        </div>
        <div className="blog_list-item">
          <div className="wrapper">
            <div className="hero">
              <img
                src="/img/products/sample.png"
                width="100%"
                height="100%"
                alt="x"
              />
            </div>
            <div className="body">
              <span className="publish-date">12 شهریور 1401</span>
              <h2>این یک تایتل برای این مقاله است</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeViewBlog;
