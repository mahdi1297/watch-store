import React from "react";
import { Star } from "react-feather";

const CommentList = () => {
  return (
    <div className="comment-list-wrapper">
      <ul>
        <li>
          <div className="title">
            <p>مهدی گفت</p>
            <div>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
          <p className="content">
            یکمی گوشی بزرگی هست ولی سرعتش بد نیس دوربینشم معمولی رو به خوبه یکمی
            گوشی بزرگی هست ولی سرعتش بد نیس دوربینشم معمولی رو به خوبه
          </p>
        </li>
        <li>
          <div className="title">
            <p>مهدی گفت</p>
            <div>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
          <p className="content">
            یکمی گوشی بزرگی هست ولی سرعتش بد نیس دوربینشم معمولی رو به خوبه یکمی
            گوشی بزرگی هست ولی سرعتش بد نیس دوربینشم معمولی رو به خوبه
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CommentList;
