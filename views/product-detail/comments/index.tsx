import React from "react";
import CommentList from "./comment-list";
import Rating from "./rating";

const ProductDetailComments = () => {
  return (
    <div className="product_detail-comments">
      <h3>نظرات کاربران</h3>

      <div className="body">
        <section className="rating">
          <Rating />
        </section>
        <section className="commments">
          <CommentList />
        </section>
      </div>
    </div>
  );
};

export default ProductDetailComments;
