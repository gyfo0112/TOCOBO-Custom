# TOCOBO: Re-edit by ADER 🖤

TOCOBO 웹사이트를 베이스로 ADERERROR 감성으로 리디자인한 클론 코딩 프로젝트입니다.

## 📌 프로젝트 소개
단순 클론을 넘어 브랜드 컨셉을 직접 설정하고
색상 / 타이포그래피 / 레이아웃을 새롭게 재해석했습니다.
SCSS 변수 시스템과 믹스인으로 디자인 토큰을 체계적으로 관리하고
Swiper를 섹션마다 다르게 구성한 완성도 높은 프로젝트입니다.

## ⚙️ 주요 기능
- TopBanner: 수직 자동 슬라이드 공지 + 닫기
- Header: 스크롤 감지 스타일 전환 + useSmoothScroll 섹션 이동
- Hero: 풀스크린 슬라이더 4장 + 슬라이드별 네비게이션 색상 전환 + 반응형 이미지 레이어
- Follow: 카테고리 카드 + AOS stagger 순차 애니메이션
- Collection: ADERERROR 악세사리 반응형 슬라이더 + useRef 커스텀 네비게이션
- Collaboration: CONVERSE / DISNEY / MAISON KITSUNÉ 콜라보 슬라이더
- Instagram: 피드 이미지 그리드
- Footer: 회사정보 / 고객센터 / 소셜 링크 (react-icons)
- FixedTopBtn: 최상단 이동 + 1:1 톡 고정 버튼
- SCSS 변수 / 믹스인 / 리셋 / 공통 파일 분리 관리

## 📁 폴더 구조
```
src/
├── components/   # Header, Nav, Util, TopBanner, Footer, Cta, Hello, FixedTopBtn
├── sections/     # Hero, Follow, Collection, Collaboration, Instagram, Review
├── hooks/        # useSmoothScroll
├── util/         # hero, collection, collaboration, cta, header, footer, hello, instagram
└── styles/       # _variables, _mixins, _reset, _common, main
```

## 🛠 사용 기술
- React (useState, useEffect, useRef, useCallback)
- Swiper (Pagination, Navigation, Autoplay)
- AOS (Animate On Scroll)
- react-icons
- SCSS
- Vite

## 🚀 실행 방법
```bash
npm install
npm run dev
```
