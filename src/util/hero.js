const img = (path) => `/img/${path}`;

export const heroSlides = [
  {
    id: "hs-1",
    title: "The Art of Error: <br>Blue Trace",
    subtitle: "불완전함 속에서 발견한 완벽한 실루엣.",
    desc: "우리는 익숙한 것들의 결함을 새로운 시각으로 재편집합니다.",
    ctaText: "Explore Now",
    ctaHref: "/products",
    image: {
      desktop: img("main1-1.png"),
      mobile: img("main-mo-1-1.png"),
    },
    alt: "The Art of Error 배너",
    active: true,
    order: 1,
  },
  {
    id: "hs-2",
    title: "Soft Distortion",
    subtitle: "유연한 소재 위에 덧입혀진 구조적 위트.",
    desc: "익숙한 컬러 속에서 발견하는 아더에러만의 낯선 감각.",
    ctaText: "Shop Collection",
    ctaHref: "/story/hydration",
    image: {
      desktop:  img("main1-2.png"),
      mobile: img("main-mo-1-2.png"),
    },
    alt: "Soft Distortion 배너",
    active: true,
    order: 2,
  },
  {
    id: "hs-3",
    title: "Beyond the Horizon: <br>Vivid Blue",
    subtitle: "논리를 넘어선 색채의 향연.",
    desc: "과감한 튤 소재와 스포티한 디테일이 만나 새로운 아카이브를 완성합니다.",
    ctaText: "View Archive",
    ctaHref: "/collections/sensitive",
    image: {
      desktop:  img("main1-3.png"),
      mobile: img("main-mo-1-3.png"),
    },
    alt: "Beyond the Horizon 배너",
    active: true,
    order: 3,
  },
];