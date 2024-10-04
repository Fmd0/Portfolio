const Colors = {
    red: 0xf25346,
    white: 0xd8d0d1,
    brown: 0x59332e,
    pink: 0xF5986E,
    brownDark: 0x23190f,
    blue: 0x68c3c0,
    green:0x458248,
    yellow:0xedeb27,
    lightgreen:0x629265,
};

let IS_HOME_CANVAS_ANIMATION = false;

const setIsHomeCanvasAnimationTrue = () => {
    IS_HOME_CANVAS_ANIMATION = true;
}

const setIsHomeCanvasAnimationFalse = () => {
    IS_HOME_CANVAS_ANIMATION = false;
}

let IS_CONTACT_CANVAS_ANIMATION = false;

const setIsContactCanvasAnimationTrue = () => {
    IS_CONTACT_CANVAS_ANIMATION = true;
}

const setIsContactCanvasAnimationFalse = () => {
    IS_CONTACT_CANVAS_ANIMATION = false;
}


let prePageLocation = "/";

const setPrePageLocation = (location: string) => {
    prePageLocation = location;
}

let IS_PAGE_ANIMATION = false;

const setIsPageAnimation = (data: boolean) => {
    IS_PAGE_ANIMATION = data;
}

const BallColors = [0xF5C97B, 0xA8BEDF];

const projectDataMap = {
    "shop": {
        headerImage: "/src/assets/projectImage/shop/shop1.jpg",
        imageBgColor: "rgb(206,177,151)",
        gallery: [
            {
                image:  "/src/assets/projectImage/shop/shop1.jpg",
                backgroundColor: "rgb(230,74,113)"
            },
            {
                image:  "/src/assets/projectImage/shop/shop2.jpg",
                backgroundColor: "rgb(42,194,144)"
            },
            {
                image:  "/src/assets/projectImage/shop/shop3.jpg",
                backgroundColor: "rgb(250,205,35)"
            }
        ],
        title: "Shop",
        description: "A complete full-stack e-commerce project, featuring a fully responsive frontend store and a backend administration system. This application leverages the latest technologies such as Vite for fast builds and Tailwind CSS for custom UI styling.",
        gitHubRepository: "https://github.com/Fmd0/Shop.app-frontend",
        liveDemo: "https://fmd0.github.io/pages/shop/",
        technologies: ["react", "mongodb", "tailwindcss"],
        detailTitle: "This is a complete clone of shop.app, consisting of three parts",
        detailDescription: "This is the shop frontend part of the project. It is fully responsive and quite comprehensive, including seven pages: the home page, market page, product page, search page, cart page, recently viewed page, and favorites page.",
        features: [
            "Typescript, Vite Setup",
            "JWT authentication",
            "SWR, data fetching and mutation",
            "Zustand state management",
            "Tailwind CSS for customization of UI",
            "Full responsiveness on all pages",
            "All UI in-house, no third-party component libraries",
        ]
    },
    "netflix": {
        headerImage: "/src/assets/projectImage/netflix/netflix0.jpg",
        imageBgColor: "rgb(139,55,73)",
        gallery: [
            {
                image:  "/src/assets/projectImage/netflix/netflix1.jpg",
                backgroundColor: "rgb(230,74,113)"
            },
            {
                image:  "/src/assets/projectImage/netflix/netflix2.jpg",
                backgroundColor: "rgb(42,194,144)"
            },
            {
                image:  "/src/assets/projectImage/netflix/netflix3.jpg",
                backgroundColor: "rgb(250,205,35)"
            },
        ],
        title: "Netflix",
        description: "A comprehensive and responsive clone of Netflix build with Nextjs, including landing page, auth page, app page, Movies page, TV Series page and My List Page",
        gitHubRepository: "https://github.com/Fmd0/Netflix-nextjs",
        liveDemo: "https://netflix-nextjs-mu.vercel.app/",
        technologies: ["react", "Next.js", "tailwindcss"],
        detailTitle: "Netflix clone built with Next.js and TypeScript.",
        detailDescription: "A comprehensive and responsive clone of Netflix build with Nextjs, including landing page, auth page, app page, Movies page, TV Series page and My List Page",
        features: [
            "Typescript, NextJS Setup",
            "MongoDB & Prisma connect, Database creation",
            "NextAuth authentication including credentials, Google/GitHub OAuth and Resend",
            "SWR, data fetching and mutation",
            "Zustand state management",
            "Tailwind CSS for customization of UI",
            "Full responsiveness on all pages",
        ]
    },
    "whiteboard": {
        headerImage: "/src/assets/projectImage/whiteboard/whiteboard0.jpg",
        imageBgColor: "rgb(13,172,223)",
        gallery: [
            {
                image:  "/src/assets/projectImage/whiteboard/whiteboard0.jpg",
                backgroundColor: "rgb(230,74,113)"
            },
            {
                image:  "/src/assets/projectImage/whiteboard/whiteboard1.jpg",
                backgroundColor: "rgb(42,194,144)"
            },
            {
                image:  "/src/assets/projectImage/whiteboard/whiteboard2.jpg",
                backgroundColor: "rgb(250,205,35)"
            },
        ],
        title: "Whiteboard",
        description: "A fully featured web whiteboard application built with vite and react which has cross-platform support (PC and mobile).",
        gitHubRepository: "https://github.com/Fmd0/Whiteboard",
        liveDemo: "https://fmd0.github.io/github-page-whiteboard/",
        technologies: ["react", "vite", "Canvas2D"],
        detailTitle: "Cross-platform web whiteboard app with diverse features.",
        detailDescription: "A fully featured web whiteboard application built with vite and react which has cross-platform support (PC and mobile).",
        features: [
            "Four types of shapes: rectangles, various circles, line segments, freehand drawing",
            "Eraser tool for precise removal of drawn shapes",
            "Infinite canvas background with zoom and pan support",
            "Selecting and moving shapes after drawing, resizing shapes",
            "Modifying shape styles, including thickness and color",
            "Cross-platform compatibility and multi-touch support",
        ]
    },
    "shopAdministration": {
        headerImage: "/src/assets/projectImage/shopAdministration/shopAdministration0.jpg",
        imageBgColor: "rgb(198,100,208)",
        gallery: [
            {
                image:  "/src/assets/projectImage/shopAdministration/shopAdministration1.jpg",
                backgroundColor: "rgb(230,74,113)"
            },
            {
                image:  "/src/assets/projectImage/shopAdministration/shopAdministration2.jpg",
                backgroundColor: "rgb(42,194,144)"
            },
            {
                image:  "/src/assets/projectImage/shopAdministration/shopAdministration3.jpg",
                backgroundColor: "rgb(250,205,35)"
            },
        ],
        title: "Shop Administration",
        description: "A complete full-stack e-commerce project, featuring a fully responsive frontend store and a backend administration system. This application leverages the latest technologies such as Vite for fast builds and Tailwind CSS for custom UI styling.",
        gitHubRepository: "https://github.com/Fmd0/Shop-administration-nextjs",
        // liveDemo: "https://netflix-nextjs-mu.vercel.app/",
        technologies: ["react", "Next.js", "MaterialUi"],
        detailTitle: "Shop.app Administration — NextJS",
        detailDescription: "This is a complete clone of shop.app, consisting of three parts: shop frontend, shop backend, and shop administration. This is the shop administration part of the project. It is feature-rich and scalable, including seven major parts such as",
        features: [
            "Typescript, NextJS Setup",
            "MongoDB & Prisma connect, Database creation",
            "SWR, data fetching and mutation",
            "UI developed using material-ui",
            "Tailwind CSS for customization of UI",
            "Image storage powered by Cloudinary",
        ]
    },
}

// "rgb(230,74,113)"
// "rgb(42,194,144)"
// "rgb(250,205,35)"
// "rgb(11,161,245)"


// const imageBgArray = [
//     "rgb(206,177,151)",
//     // "rgb(251,209,118)",
//     "rgb(139,55,73)",
//     "rgb(13,172,223)",
//     "rgb(198,100,208)",
//     "rgb(203,75,40)",
//     "rgb(250,124,247)",
//     "rgb(217,32,32)",
// ]



export {
    Colors,
    IS_HOME_CANVAS_ANIMATION,
    setIsHomeCanvasAnimationTrue,
    setIsHomeCanvasAnimationFalse,
    prePageLocation,
    setPrePageLocation,
    projectDataMap,
    BallColors,
    IS_CONTACT_CANVAS_ANIMATION,
    setIsContactCanvasAnimationTrue,
    setIsContactCanvasAnimationFalse,
    IS_PAGE_ANIMATION,
    setIsPageAnimation
}