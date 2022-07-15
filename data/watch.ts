import { ProductModel } from "@models/product.model";

export const watchesData: ProductModel[] = [
  {
    id: 1,
    title: "ICONIC LINK ARCTIC",
    slug: "ICONIC-LINK-ARCTIC",
    price: 12000000,
    main_image: "/img/products/sample.png",
    description:
      "Iconic Link Automatic پیشرفته ترین ساعت ما تا به امروز است. دارای یک حرکت خود پیچشی که با حرکت مچ دست شما نیرو می گیرد",
    colors: ["#c9ada1", "#CCC4C3", "#39282D"],
    country: "ژاپن",
    material: "استیل",
    waranty: "2 سال",
    hasSale: true,
    salePercent: 15,
    saledPrice: 9000000,
    images: [
      "/img/products/watch_sub_img (4).png",
      "/img/products/watch_sub_img (3).png",
      "/img/products/watch_sub_img (1).png",
    ],
    features: [
      {
        id: 1,
        title: "اطلاعات کلی",
        subFeatures: [
          { _id: 1, key: "جنسیت", value: "مردانه" },
          { _id: 2, key: "اصالت کشور برند", value: "امریکا" },
          { _id: 3, key: "گارانتی ", value: "2 سال" },
          { _id: 4, key: "مقاومت در برابر آب ", value: "عمق 100 متر" },
          { _id: 5, key: "مقاومت در برابر آب ", value: "عمق 100 متر" },
        ],
      },
      {
        id: 2,
        title: "مشخصات فیزیکی",
        subFeatures: [
          { _id: 6, key: "فرم هندسی قاب", value: "دایره" },
          { _id: 7, key: "نوع صفحه نمایش", value: "عقربه ایی" },
          { _id: 8, key: "رنگ صفحه ", value: "سرمه ای" },
          { _id: 9, key: "جنس قاب ", value: "استیل ضد زنگ" },
          { _id: 10, key: "جنس بند ", value: "استیل ضد زنگ" },
        ],
      },
      {
        id: 3,
        title: "مشخصات موتور",
        subFeatures: [
          { _id: 11, key: "نیرو محرکه", value: "انرژی الکتریکی باتری" },
          { _id: 12, key: "تکنولوژی موتور", value: "Quarts" },
          { _id: 13, key: "تعداد موتور ", value: "یک موتور الکتریکی آنالوگ" },
          { _id: 14, key: "جنس قاب ", value: "استیل ضد زنگ" },
          { _id: 15, key: "جنس بند ", value: "استیل ضد زنگ" },
        ],
      },
      {
        id: 4,
        title: "مشخصات تکمیلی",
        subFeatures: [
          { _id: 16, key: "تقویم هفته", value: "دارای نشانگر روزهای هفته" },
          { _id: 17, key: "تقویم روز", value: "دارای نشانگر روزهای ماه" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "ICONIC LINK ARCTIC",
    slug: "ICONIC-LINK-ARCTIC-one",
    main_image: "/img/products/sample.png",
    price: 12000000,
    brand: "dw",
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
    features: [
      {
        id: 1,
        title: "اطلاعات کلی",
        subFeatures: [
          { _id: 1, key: "جنسیت", value: "مردانه" },
          { _id: 2, key: "اصالت کشور برند", value: "امریکا" },
          { _id: 3, key: "گارانتی ", value: "2 سال" },
          { _id: 4, key: "مقاومت در برابر آب ", value: "عمق 100 متر" },
          { _id: 5, key: "مقاومت در برابر آب ", value: "عمق 100 متر" },
        ],
      },
      {
        id: 2,
        title: "مشخصات فیزیکی",
        subFeatures: [
          { _id: 6, key: "فرم هندسی قاب", value: "دایره" },
          { _id: 7, key: "نوع صفحه نمایش", value: "عقربه ایی" },
          { _id: 8, key: "رنگ صفحه ", value: "سرمه ای" },
          { _id: 9, key: "جنس قاب ", value: "استیل ضد زنگ" },
          { _id: 10, key: "جنس بند ", value: "استیل ضد زنگ" },
        ],
      },
      {
        id: 3,
        title: "مشخصات موتور",
        subFeatures: [
          { _id: 11, key: "نیرو محرکه", value: "انرژی الکتریکی باتری" },
          { _id: 12, key: "تکنولوژی موتور", value: "Quarts" },
          { _id: 13, key: "تعداد موتور ", value: "یک موتور الکتریکی آنالوگ" },
          { _id: 14, key: "جنس قاب ", value: "استیل ضد زنگ" },
          { _id: 15, key: "جنس بند ", value: "استیل ضد زنگ" },
        ],
      },
      {
        id: 4,
        title: "مشخصات تکمیلی",
        subFeatures: [
          { _id: 16, key: "تقویم هفته", value: "دارای نشانگر روزهای هفته" },
          { _id: 17, key: "تقویم روز", value: "دارای نشانگر روزهای ماه" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "ICONIC LINK ARCTIC",
    slug: "ICONIC-LINK-ARCTIC-one",
    main_image: "/img/products/sample.png",
    price: 12000000,
    brand: "dw",
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
    features: [
      {
        id: 1,
        title: "اطلاعات کلی",
        subFeatures: [
          { _id: 1, key: "جنسیت", value: "مردانه" },
          { _id: 2, key: "اصالت کشور برند", value: "امریکا" },
          { _id: 3, key: "گارانتی ", value: "2 سال" },
          { _id: 4, key: "مقاومت در برابر آب ", value: "عمق 100 متر" },
          { _id: 5, key: "مقاومت در برابر آب ", value: "عمق 100 متر" },
        ],
      },
      {
        id: 2,
        title: "مشخصات فیزیکی",
        subFeatures: [
          { _id: 6, key: "فرم هندسی قاب", value: "دایره" },
          { _id: 7, key: "نوع صفحه نمایش", value: "عقربه ایی" },
          { _id: 8, key: "رنگ صفحه ", value: "سرمه ای" },
          { _id: 9, key: "جنس قاب ", value: "استیل ضد زنگ" },
          { _id: 10, key: "جنس بند ", value: "استیل ضد زنگ" },
        ],
      },
      {
        id: 3,
        title: "مشخصات موتور",
        subFeatures: [
          { _id: 11, key: "نیرو محرکه", value: "انرژی الکتریکی باتری" },
          { _id: 12, key: "تکنولوژی موتور", value: "Quarts" },
          { _id: 13, key: "تعداد موتور ", value: "یک موتور الکتریکی آنالوگ" },
          { _id: 14, key: "جنس قاب ", value: "استیل ضد زنگ" },
          { _id: 15, key: "جنس بند ", value: "استیل ضد زنگ" },
        ],
      },
      {
        id: 4,
        title: "مشخصات تکمیلی",
        subFeatures: [
          { _id: 16, key: "تقویم هفته", value: "دارای نشانگر روزهای هفته" },
          { _id: 17, key: "تقویم روز", value: "دارای نشانگر روزهای ماه" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "ICONIC LINK ARCTIC",
    slug: "ICONIC-LINK-ARCTIC-one",
    main_image: "/img/products/sample.png",
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
    features: [
      {
        id: 1,
        title: "اطلاعات کلی",
        subFeatures: [
          { _id: 1, key: "جنسیت", value: "مردانه" },
          { _id: 2, key: "اصالت کشور برند", value: "امریکا" },
          { _id: 3, key: "گارانتی ", value: "2 سال" },
          { _id: 4, key: "مقاومت در برابر آب ", value: "عمق 100 متر" },
          { _id: 5, key: "مقاومت در برابر آب ", value: "عمق 100 متر" },
        ],
      },
      {
        id: 2,
        title: "مشخصات فیزیکی",
        subFeatures: [
          { _id: 6, key: "فرم هندسی قاب", value: "دایره" },
          { _id: 7, key: "نوع صفحه نمایش", value: "عقربه ایی" },
          { _id: 8, key: "رنگ صفحه ", value: "سرمه ای" },
          { _id: 9, key: "جنس قاب ", value: "استیل ضد زنگ" },
          { _id: 10, key: "جنس بند ", value: "استیل ضد زنگ" },
        ],
      },
      {
        id: 3,
        title: "مشخصات موتور",
        subFeatures: [
          { _id: 11, key: "نیرو محرکه", value: "انرژی الکتریکی باتری" },
          { _id: 12, key: "تکنولوژی موتور", value: "Quarts" },
          { _id: 13, key: "تعداد موتور ", value: "یک موتور الکتریکی آنالوگ" },
          { _id: 14, key: "جنس قاب ", value: "استیل ضد زنگ" },
          { _id: 15, key: "جنس بند ", value: "استیل ضد زنگ" },
        ],
      },
      {
        id: 4,
        title: "مشخصات تکمیلی",
        subFeatures: [
          { _id: 16, key: "تقویم هفته", value: "دارای نشانگر روزهای هفته" },
          { _id: 17, key: "تقویم روز", value: "دارای نشانگر روزهای ماه" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "ICONIC LINK ARCTIC",
    slug: "ICONIC-LINK-ARCTIC-one",
    main_image: "/img/products/sample.png",
    price: 12000000,
    brand: "Rolex",
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
    features: [
      {
        id: 1,
        title: "اطلاعات کلی",
        subFeatures: [
          { _id: 1, key: "جنسیت", value: "مردانه" },
          { _id: 2, key: "اصالت کشور برند", value: "امریکا" },
          { _id: 3, key: "گارانتی ", value: "2 سال" },
          { _id: 4, key: "مقاومت در برابر آب ", value: "عمق 100 متر" },
          { _id: 5, key: "مقاومت در برابر آب ", value: "عمق 100 متر" },
        ],
      },
      {
        id: 2,
        title: "مشخصات فیزیکی",
        subFeatures: [
          { _id: 6, key: "فرم هندسی قاب", value: "دایره" },
          { _id: 7, key: "نوع صفحه نمایش", value: "عقربه ایی" },
          { _id: 8, key: "رنگ صفحه ", value: "سرمه ای" },
          { _id: 9, key: "جنس قاب ", value: "استیل ضد زنگ" },
          { _id: 10, key: "جنس بند ", value: "استیل ضد زنگ" },
        ],
      },
      {
        id: 3,
        title: "مشخصات موتور",
        subFeatures: [
          { _id: 11, key: "نیرو محرکه", value: "انرژی الکتریکی باتری" },
          { _id: 12, key: "تکنولوژی موتور", value: "Quarts" },
          { _id: 13, key: "تعداد موتور ", value: "یک موتور الکتریکی آنالوگ" },
          { _id: 14, key: "جنس قاب ", value: "استیل ضد زنگ" },
          { _id: 15, key: "جنس بند ", value: "استیل ضد زنگ" },
        ],
      },
      {
        id: 4,
        title: "مشخصات تکمیلی",
        subFeatures: [
          { _id: 16, key: "تقویم هفته", value: "دارای نشانگر روزهای هفته" },
          { _id: 17, key: "تقویم روز", value: "دارای نشانگر روزهای ماه" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "ICONIC LINK ARCTIC",
    slug: "ICONIC-LINK-ARCTIC-one",
    main_image: "/img/products/sample.png",
    price: 12000000,
    brand: "swatch",
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
    features: [
      {
        id: 1,
        title: "اطلاعات کلی",
        subFeatures: [
          { _id: 1, key: "جنسیت", value: "مردانه" },
          { _id: 2, key: "اصالت کشور برند", value: "امریکا" },
          { _id: 3, key: "گارانتی ", value: "2 سال" },
          { _id: 4, key: "مقاومت در برابر آب ", value: "عمق 100 متر" },
          { _id: 5, key: "مقاومت در برابر آب ", value: "عمق 100 متر" },
        ],
      },
      {
        id: 2,
        title: "مشخصات فیزیکی",
        subFeatures: [
          { _id: 6, key: "فرم هندسی قاب", value: "دایره" },
          { _id: 7, key: "نوع صفحه نمایش", value: "عقربه ایی" },
          { _id: 8, key: "رنگ صفحه ", value: "سرمه ای" },
          { _id: 9, key: "جنس قاب ", value: "استیل ضد زنگ" },
          { _id: 10, key: "جنس بند ", value: "استیل ضد زنگ" },
        ],
      },
      {
        id: 3,
        title: "مشخصات موتور",
        subFeatures: [
          { _id: 11, key: "نیرو محرکه", value: "انرژی الکتریکی باتری" },
          { _id: 12, key: "تکنولوژی موتور", value: "Quarts" },
          { _id: 13, key: "تعداد موتور ", value: "یک موتور الکتریکی آنالوگ" },
          { _id: 14, key: "جنس قاب ", value: "استیل ضد زنگ" },
          { _id: 15, key: "جنس بند ", value: "استیل ضد زنگ" },
        ],
      },
      {
        id: 4,
        title: "مشخصات تکمیلی",
        subFeatures: [
          { _id: 16, key: "تقویم هفته", value: "دارای نشانگر روزهای هفته" },
          { _id: 17, key: "تقویم روز", value: "دارای نشانگر روزهای ماه" },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "ICONIC LINK ARCTIC",
    slug: "ICONIC-LINK-ARCTIC-one",
    main_image: "/img/products/sample.png",
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
    features: [
      {
        id: 132423,
        title: "اطلاعات کلی",
        subFeatures: [
          { _id: 1, key: "جنسیت", value: "مردانه" },
          { _id: 2, key: "اصالت کشور برند", value: "امریکا" },
          { _id: 3, key: "گارانتی ", value: "2 سال" },
          { _id: 4, key: "مقاومت در برابر آب ", value: "عمق 100 متر" },
          { _id: 5, key: "مقاومت در برابر آب ", value: "عمق 100 متر" },
        ],
      },
      {
        id: 2,
        title: "مشخصات فیزیکی",
        subFeatures: [
          { _id: 6, key: "فرم هندسی قاب", value: "دایره" },
          { _id: 7, key: "نوع صفحه نمایش", value: "عقربه ایی" },
          { _id: 8, key: "رنگ صفحه ", value: "سرمه ای" },
          { _id: 9, key: "جنس قاب ", value: "استیل ضد زنگ" },
          { _id: 10, key: "جنس بند ", value: "استیل ضد زنگ" },
        ],
      },
      {
        id: 3,
        title: "مشخصات موتور",
        subFeatures: [
          { _id: 11, key: "نیرو محرکه", value: "انرژی الکتریکی باتری" },
          { _id: 12, key: "تکنولوژی موتور", value: "Quarts" },
          { _id: 13, key: "تعداد موتور ", value: "یک موتور الکتریکی آنالوگ" },
          { _id: 14, key: "جنس قاب ", value: "استیل ضد زنگ" },
          { _id: 15, key: "جنس بند ", value: "استیل ضد زنگ" },
        ],
      },
      {
        id: 4,
        title: "مشخصات تکمیلی",
        subFeatures: [
          { _id: 16, key: "تقویم هفته", value: "دارای نشانگر روزهای هفته" },
          { _id: 17, key: "تقویم روز", value: "دارای نشانگر روزهای ماه" },
        ],
      },
    ],
  },
];

export const getSingleProduct = (slug: string) => {
  return watchesData.find((s) => s.slug == slug);
};
