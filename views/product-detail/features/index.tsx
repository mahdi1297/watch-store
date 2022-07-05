import {
  LESS,
  MORE,
  profational_features,
  SHOW_LESS,
  SHOW_MORE,
} from "@consts/static";
import React, { useState } from "react";

type Props = {
  features: any;
};

const ProductDetailFeatures: React.FC<Props> = ({ features }) => {
  const [lessFeatures, setLessFeatures] = useState(LESS);

  const featureIndicatingViewHandler = () => {
    if (lessFeatures === LESS) {
      setLessFeatures(MORE);
    }
    if (lessFeatures === MORE) {
      setLessFeatures(LESS);
    }
  };

  return (
    <div className="product_detail-body">
      <h3>{profational_features}</h3>
      <div
        className={`product_detail-body-list ${
          lessFeatures === LESS ? "limited" : "not_limited"
        }`}
      >
        {features &&
          features.map((f: any) => (
            <div key={f.id} className="product-list-wrapper">
              <div className="title">{f.title}</div>
              <figure>
                <ul>
                  {f.subFeatures?.map((sf: any) => (
                    <li key={sf._id}>
                      <div className="key">{sf.key}</div>
                      <div className="value">{sf.value}</div>
                    </li>
                  ))}
                </ul>
              </figure>
            </div>
          ))}
      </div>
      <div className="show-list">
        <a onClick={featureIndicatingViewHandler}>
          {lessFeatures === LESS ? SHOW_MORE : SHOW_LESS}
        </a>
      </div>
    </div>
  );
};

export default ProductDetailFeatures;
