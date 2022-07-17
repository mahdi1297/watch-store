// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
// import Checkbox from "@shared/form/checkbox";
// import { BrandSearch, brandsSearchModel } from "@models/search.model";
// import { ChevronDown } from "react-feather";
// import { BRANDS } from "@consts/static";
// import { useRouter } from "next/router";
// import { Router } from "@helpers/router";

// const SidebarBrand = () => {
//   const router = useRouter();
//   const _router = new Router(router);

//   const [brandOpen, setBrandOpen] = useState(true);
//   const [brands, setBrands] = useState<string[]>([]);

//   const inputRef = useRef(null);

//   useEffect(() => {
//     checkBrandInput();
//   }, [router]);


//   const checkBrandInput = () => {
//     const queries = router.query;
//     let brands = []
//     if (!queries.brand) {
//       return;
//     }
//     else if (typeof queries.brand === "string") {
//       brands = [queries.brand]
//     }
//     else {
//       brands = queries.brand;
//     }

//     console.log(inputRef)


//     if (brands.length !== 0) {
//       brands.forEach(element => {
//         if (typeof document !== 'undefined') {
//           const item: any = document?.getElementById(`${element}`)
//           if (item) {
//             item.checked = true;
//           }
//         }
//       })
//     }
//   }

//   const brandOppenToggleHandler = () => {
//     setBrandOpen(!brandOpen);
//   };

//   const addBrandsToCtx = (brandName: string) => {

//     // If remove a brand
//     if (brands.includes(brandName)) {
//       const filterBrands = brands.filter((s: any) => s !== brandName)

//       setBrands(filterBrands);
//       addBrandsToUrl(filterBrands);
//       return;
//     }

//     // If add a brand
//     setBrands([...brands, brandName])
//     addBrandsToUrl([...brands, brandName]);
//   }

//   const addBrandsToUrl = (brands: string[]) => {
//     _router.addQueries("brand", brands);
//   }

//   const checkboxChangeHandler = (e: any, brandName: string) => {

//     addBrandsToCtx(brandName);
//   };


//   return (
//     <div className="sidebar_inner-items">
//       <div className="title" onClick={brandOppenToggleHandler}>
//         {BRANDS}
//         <ChevronDown />
//       </div>
//       <div className={`body ${brandOpen ? "open" : "close"}`}>
//         <div className="sidebar_brands-body">
//           {brandsSearchModel?.map((brand: BrandSearch) => (
//             <div key={brand.id}>
//               <Checkbox
//                 name={brand.name}
//                 label={brand.label}
//                 onchange={checkboxChangeHandler}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default memo(SidebarBrand);


















/* eslint-disable react-hooks/exhaustive-deps */
import React, { createRef, memo, useEffect, useMemo, useRef, useState } from "react";
import Checkbox from "@shared/form/checkbox";
import { BrandSearch, brandsSearchModel } from "@models/search.model";
import { ChevronDown } from "react-feather";
import { BRANDS } from "@consts/static";
import { useRouter } from "next/router";
import { Router } from "@helpers/router";

const SidebarBrand = () => {
  const router = useRouter();
  const _router = new Router(router);

  const [brandOpen, setBrandOpen] = useState(true);
  const [brands, setBrands] = useState<string[]>([]);

  const queries = _router.getQueries();

  let refs: any = useRef(brandsSearchModel.map(() => createRef()));


  useEffect(() => {
    const checkBrandInput = (queries: any) => {

      let brands = []
      if (!queries.brand) {
        return;
      }
      else if (typeof queries.brand === "string") {
        brands = [queries.brand]
      }
      else {
        brands = queries.brand;
      }

      if (brands.length === 0) {
        return;
      }


      const jointUrlQuries = brands.join(" ")  // => url query parameters 

      refs.current.forEach((element: any) => {
        if (jointUrlQuries.indexOf(element.current.id) > -1) {
          element.current.checked = true;
        }
      });

    }

    checkBrandInput(queries);
  }, [queries]);


  const brandOppenToggleHandler = () => {
    setBrandOpen(!brandOpen);
  };

  const addBrandsToCtx = (brandName: string) => {

    // If remove a brand
    if (brands.includes(brandName)) {
      const filterBrands = brands.filter((s: any) => s !== brandName)

      setBrands(filterBrands);
      addBrandsToUrl(filterBrands);
      return;
    }

    // If add a brand
    setBrands([...brands, brandName]);
    addBrandsToUrl([...brands, brandName]);
  }

  const addBrandsToUrl = (brands: string[]) => {
    _router.addQueries("brand", brands);
  }

  const checkboxChangeHandler = (e: any, brandName: string) => {
    addBrandsToCtx(brandName);
  };

  const clickboxChangeHandler = (e: any, name: string) => {
  }


  return (
    <div className="sidebar_inner-items">
      <div className="title" onClick={brandOppenToggleHandler}>
        {BRANDS}
        <ChevronDown />
      </div>
      <div className={`body ${brandOpen ? "open" : "close"}`}>
        <div className="sidebar_brands-body">
          {brandsSearchModel?.map((brand: BrandSearch, i: any) => (
            <div key={brand.id}>
              <Checkbox
                name={brand.name}
                label={brand.label}
                onchange={checkboxChangeHandler}
                onclick={clickboxChangeHandler}
                inputRef={refs.current[i]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(SidebarBrand);
