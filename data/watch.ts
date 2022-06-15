import { ProductModel } from "@models/product.model";

export const watchesData: ProductModel[] = [
  {
    id: 1,
    title: "ICONIC LINK ARCTIC",
    slug: "ICONIC-LINK-ARCTIC",
    price: 12000000,
    main_image: "/img/products/watch_2.png",
    description:
      "Iconic Link Automatic پیشرفته ترین ساعت ما تا به امروز است. دارای یک حرکت خود پیچشی که با حرکت مچ دست شما نیرو می گیرد",
    colors: ["#874249", "#CCC4C3", "#39282D"],
    country: "ژاپن",
    material: "استیل",
    waranty: "2 سال",
    hasSale: true,
    salePercent: 15,
    saledPrice: 9000000,
    images: [
      "/img/products/watch_sub_img (2).png",
      "/img/products/watch_sub_img (4).png",
      "/img/products/watch_sub_img (3).png",
      "/img/products/watch_sub_img (1).png",
    ],
  },
  {
    id: 2,
    title: "ICONIC LINK ARCTIC",
    slug: "ICONIC-LINK-ARCTIC-one",
    main_image: "/img/products/watch_2.png",
    price: 12000000,
    description:
      "Iconic Link Automatic پیشرفته ترین ساعت ما تا به امروز است. دارای یک حرکت خود پیچشی که با حرکت مچ دست شما نیرو می گیرد",
    colors: ["#874249", "#CCC4C3", "#39282D"],
    country: "ژاپن",
    material: "فولاذ",
    waranty: "2 سال",
    hasSale: false,
    images: [
      "/img/products/watch_sub_img (2).png",
      "/img/products/watch_sub_img (4).png",
      "/img/products/watch_sub_img (3).png",
      "/img/products/watch_sub_img (1).png",
    ],
  },
];

export const getSingleProduct = (slug: string) => {
  return watchesData.find((s) => s.slug == slug);
};
