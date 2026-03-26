const img = (path) => `/img/${path}`;
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

export const logoData = {
  src: img("logo.svg"),
  alt: "ADERERROR 로고",
  href: "/",
};

export const companyData = [
  "COMPANY ADER | BUSINESS NAME FIVE SPACE CO.,LTD",
  "BUSINESS LICENSE 760-87-01757",
  "MAIL-ORDER LISENCE NO. 제 2021-서울성동-01588호 | CEO HANN",
  "OFFICE ADER 14, YEONMUJANG 9-GIL, SEONGDONG-GU, SEOUL, KOREA",
];

export const footerLegal = {
  copyright: "© ADERERROR 2026",
  links: []
};

export const customerCenterData = {
  title: "Customer Center",
  tel: { value: "02-792-2232", href: "tel:027922232" },
  hours: "월~금 09:00 ~ 18:00",
  notice: "주말 및 공휴일 휴무",
  talk: { label: "1:1 TALK", href: "#" },
};

export const footerMenus = [
  {
    title: "Brand",
    items: [
      { label: "ADERERROR", href: "/brand/adererror" },
      { label: "Significant", href: "/brand/significant" },
    ],
  },
  {
    title: "Shop",
    items: [
      { label: "All Product", href: "/shop" },
      { label: "Outer", href: "/shop/outer" },
      { label: "Knitwear", href: "/shop/knitwear" },
      { label: "T-shirt", href: "/shop/t-shirt" },
      { label: "Pants", href: "/shop/pants" },
      { label: "Denim", href: "/shop/denim" },
      { label: "Dress & skirt", href: "/shop/dress-skirt" },
    ],
  },
  {
    title: "Promotion",
    items: [{ label: "Collaboration", href: "/promotion/collaboration" }],
  },
  {
    title: "Community",
    items: [
      { label: "공지사항", href: "/community/notice" },
      { label: "FAQ", href: "/community/faq" },
      { label: "문의하기", href: "/community/qna" },
    ],
  },
];

export const socialLinks = [
  {
    id: "kakao",
    label: "KakaoTalk 채널",
    href: "https://pf.kakao.com/your-channel",
    icon: RiKakaoTalkFill
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/your-instagram",
    icon: FaInstagramSquare
  },
  {
    id: "youtube", 
    label: "YouTube",
    href: "https://www.youtube.com/@your-youtube",
    icon: FaYoutube
  },
];