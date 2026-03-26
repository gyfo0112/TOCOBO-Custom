const img = (path) => `/img/${path}`;

export const categories = [
  {
    id: 61,
    slug: "outer",
    name: "아우터",
    href: "/category/outer/61/",
    img: {
      src: img("cta1.png"),
      alt: "아우터",
    },
  },
  {
    id: 42,
    slug: "knitwear",
    name: "니트웨어",
    href: "/category/knitwear/42/",
    img: {
      src: img("cta2.png"),
      alt: "니트웨어",
    },
  },
  {
    id: 52,
    slug: "dress-skirt",
    name: "드레스 & 스커트",
    href: "/category/dress-skirt/52/",
    img: {
      src: img("cta3.png"),
      alt: "드레스 & 스커트",
    },
  },
  {
    id: 50,
    slug: "pants",
    name: "팬츠",
    href: "/category/pants/50/",
    img: {
      src: img("cta4.png"),
      alt: "팬츠",
    },
  },
  {
    id: 47,
    slug: "shoes",
    name: "슈즈",
    href: "/category/shoes/47/",
    img: {
      src: img("cta5.png"),
      alt: "슈즈",
    },
  },
  {
    id: 28,
    slug: "bag",
    name: "가방",
    href: "/category/bag/28/",
    img: {
      src: img("cta6.png"),
      alt: "가방",
    },
  },
];

export default categories;