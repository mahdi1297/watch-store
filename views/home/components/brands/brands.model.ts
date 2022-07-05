export type Brand = {
  id: number;
  path: string;
  image: string;
};

export const brandsModel: Brand[] = [
  { id: 1, path: "/category/casino", image: "/img/brands/casio.webp" },
  { id: 2, path: "/category/citizen", image: "/img/brands/citizen.webp" },
  { id: 3, path: "/category/garmin", image: "/img/brands/garmin.webp" },
  { id: 4, path: "/category/hamilton", image: "/img/brands/hamilton.webp" },
  { id: 5, path: "/category/luminox", image: "/img/brands/luminox.webp" },
  { id: 6, path: "/category/swatch", image: "/img/brands/swatch.webp" },
  { id: 7, path: "/category/mido", image: "/img/brands/mido.webp" },
  { id: 8, path: "/category/maserati", image: "/img/brands/maserati.webp" },
  {
    id: 9,
    path: "/category/vostok-europe",
    image: "/img/brands/vostok-europe.webp",
  },
  { id: 10, path: "/category/tissot", image: "/img/brands/tissot.webp" },
];
