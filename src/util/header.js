const img = (path) => `/img/${path}`

export const headerData = {
    logo: {
        src: img('logo.svg'),
        alt: 'ADERERROR',
        href: '/'
    },
    menus: [
        { id: 'hero', label: 'hero', href: '#hero', type: 'section' },
        { id: 'follow', label: 'follow', href: '#follow', type: 'section' },
        { id: 'collection', label: 'collection', href: '#collection', type: 'section' },
        { id: 'skincare', label: 'collaboration', href: '#collaboration', type: 'section' },
        { id: 'instagram', label: 'instagram', href: '#instagram', type: 'section' },
    ],
    utils: [
        { id: "globe", label: "언어", icon: img("icon_language.svg"), href: "#" },
        { id: "search", label: "검색", icon: img("icon_search.svg"), href: "#" },
        { id: "account", label: "마이", icon: img("icon_myp.svg"), href: "#" },
        { id: "cart", label: "장바", icon: img("icon_cart.svg"), href: "#" },
    ],
    topBanner: {
        enabled: true,
        height: 64,
        items: [
            { id: "tb-1", text: "새로운 소식이 있습니다.", href: "#" },
            { id: "tb-2", text: "이벤트 진행 중!", href: "#" },
            { id: "tb-3", text: "회원가입시 15% 할인쿠폰 증정", href: "#" },
        ],
        closeIcon: img("icon_pop_close_b.png"),
        background: "#0000CD",
        color: "#fff",
    },
    gnb: ["follow", "collection", "collaboration", "instagram"],
    bottom: ["로그인", "회원가입", "공지사항"],
}