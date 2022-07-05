import React from "react";
import { Star } from "react-feather";

const Rating = () => {
  return (
    <div className="rating_container">
      <div>
        <ul className="title_list">
          <li>
            <div>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p>از مجموع 132 دیدگاه</p>
          </li>
        </ul>
      </div>
      <div>
        <ul className="rate-lines">
          <li>
            <div>5</div>
            <div className="outer-rating-line">
              <div className="inner-rating-line-5"></div>
            </div>
            <div className="rating-amount">57</div>
          </li>
          <li>
            <div>4</div>
            <div className="outer-rating-line">
              <div className="inner-rating-line-4"></div>
            </div>
            <div className="rating-amount">23</div>
          </li>
          <li>
            <div>3</div>
            <div className="outer-rating-line">
              <div className="inner-rating-line-3"></div>
            </div>
            <div className="rating-amount">35</div>
          </li>
          <li>
            <div>2</div>
            <div className="outer-rating-line">
              <div className="inner-rating-line-2"></div>
            </div>
            <div className="rating-amount">10</div>
          </li>
          <li>
            <div>1</div>
            <div className="outer-rating-line">
              <div className="inner-rating-line-1"></div>
            </div>
            <div className="rating-amount">17</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rating;
