export type Blog = {
  id: number;
  title: string;
  path: string;
  date: string;
  thumbnail: string;
};

export const Blogs: Blog[] = [
  {
    id: 1,
    title: "این یک تایتل برای این مقاله است",
    path: "/blog/blog-sample",
    date: "12 شهریور 1401",
    thumbnail: "/img/blog/blog (1).webp",
  },
  {
    id: 2,
    title: "این یک تایتل برای این مقاله است",
    path: "/blog/blog-sample",
    date: "12 شهریور 1401",
    thumbnail: "/img/blog/blog (2).webp",
  },
  {
    id: 3,
    title: "این یک تایتل برای این مقاله است",
    path: "/blog/blog-sample",
    date: "12 شهریور 1401",
    thumbnail: "/img/blog/blog (3).webp",
  },
];
