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

const BallColors = [0xF5C97B, 0xA8BEDF];

const projectDataMap = {
    "test": {
        images: ["/src/assets/img.png"],
        title: "BOUCHERON",
        description: "Do you have what it takes to become an icon?",
        gitHubRepository: "https://github.com/Fmd0/Shop.app-frontend",
        liveDemo: "",
        technologies: [],
    },
    "shop": {
        headerImage: "/src/assets/projectImage/shop0.jpg",
        gallery: [
            {
                image:  "/src/assets/projectImage/shop1.jpg",
                backgroundColor: "#393231",
                borderColor: "rgba(0,0,0,0.3)"
            },
            {
                image:  "/src/assets/projectImage/shop2.jpg",
            },
            {
                image:  "/src/assets/projectImage/shop3.jpg",
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
    }
}



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
    setIsContactCanvasAnimationFalse
}