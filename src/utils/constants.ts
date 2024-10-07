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
        headerImage: "https://github.com/Fmd0/assets/blob/main/projectImage/shop/shop1.jpg?raw=true",
        imageBgColor: "rgb(206,177,151)",
        gallery: [
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/shop/shop1.jpg?raw=true",
                backgroundColor: "rgb(230,74,113)"
            },
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/shop/shop2.jpg?raw=true",
                backgroundColor: "rgb(42,194,144)"
            },
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/shop/shop3.jpg?raw=true",
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
        headerImage: "https://github.com/Fmd0/assets/blob/main/projectImage/netflix/netflix0.jpg?raw=true",
        imageBgColor: "rgb(139,55,73)",
        gallery: [
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/netflix/netflix1.jpg?raw=true",
                backgroundColor: "rgb(230,74,113)"
            },
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/netflix/netflix2.jpg?raw=true",
                backgroundColor: "rgb(42,194,144)"
            },
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/netflix/netflix3.jpg?raw=true",
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
        headerImage: "https://github.com/Fmd0/assets/blob/main/projectImage/whiteboard/whiteboard0.jpg?raw=true",
        imageBgColor: "rgb(13,172,223)",
        gallery: [
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/whiteboard/whiteboard0.jpg?raw=true",
                backgroundColor: "rgb(230,74,113)"
            },
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/whiteboard/whiteboard1.jpg?raw=true",
                backgroundColor: "rgb(42,194,144)"
            },
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/whiteboard/whiteboard2.jpg?raw=true",
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
        headerImage: "https://github.com/Fmd0/assets/blob/main/projectImage/shopAdministration/shopAdministration0.jpg?raw=true",
        imageBgColor: "rgb(198,100,208)",
        gallery: [
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/shopAdministration/shopAdministration1.jpg?raw=true",
                backgroundColor: "rgb(230,74,113)"
            },
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/shopAdministration/shopAdministration2.jpg?raw=true",
                backgroundColor: "rgb(42,194,144)"
            },
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/shopAdministration/shopAdministration3.jpg?raw=true",
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
    "planeGame": {
        headerImage: "https://github.com/Fmd0/assets/blob/main/projectImage/planeGame/planeGame0.jpg?raw=true",
        imageBgColor: "rgb(203,75,40)",
        gallery: [
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/planeGame/planeGame0.jpg?raw=true",
                backgroundColor: "rgb(230,74,113)"
            },
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/planeGame/planeGame1.jpg?raw=true",
                backgroundColor: "rgb(42,194,144)"
            },
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/planeGame/planeGame2.jpg?raw=true",
                backgroundColor: "rgb(250,205,35)"
            },
        ],
        title: "Plane Game",
        description: "A Three.js 3D game where players control an aircraft with the mouse, combining simple shapes to create complex structures like trees, flowers, clouds, and airplanes.",
        gitHubRepository: "https://github.com/Fmd0/PlaneGame-ThreeJS",
        liveDemo: "https://fmd0.github.io/pages/planeGame/",
        technologies: ["Three.js", "Vite", "Canvas3D"],
        detailTitle: "Mouse-Controlled Aircraft in a Three.js 3D World",
        detailDescription: "A sophisticated Three.js 3D game that allows players to control an aircraft using the mouse, creatively combining simple 3D shapes provided by the Three.js library to construct a variety of intriguing and complex structures, such as trees, flowers, clouds, and airplanes.",
        features: [
            "Developed with Vite: Leveraged Vite for a fast and efficient development workflow, optimizing performance.",
            "No Pre-existing 3D Models: All elements are constructed using native Three.js shapes, ensuring unique and original designs.",
            "Dual Lighting Setup: Utilizes AmbientLight and directional lighting for beautiful shadow effects, enhancing the visual experience.",
            "Cross-Platform Input Device Support: Compatible with various input methods, including mouse, touch, and stylus, for versatile gameplay experiences.",
            "Advanced Randomization: Implements sophisticated algorithms to generate random objects in appropriate locations, adding variety and surprise to the environment.",
        ]
    },
    "diceRollerSimulator": {
        headerImage: "https://github.com/Fmd0/assets/blob/main/projectImage/diceRollerSimulator/diceRollerSimulator0.jpg?raw=true",
        imageBgColor: "rgb(250,124,247)",
        gallery: [
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/diceRollerSimulator/diceRollerSimulator0.jpg?raw=true",
                backgroundColor: "rgb(230,74,113)"
            },
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/diceRollerSimulator/diceRollerSimulator1.jpg?raw=true",
                backgroundColor: "rgb(42,194,144)"
            },
            {
                image:  "https://github.com/Fmd0/assets/blob/main/projectImage/diceRollerSimulator/diceRollerSimulator2.jpg?raw=true",
                backgroundColor: "rgb(250,205,35)"
            },
        ],
        title: "Dice Roller Simulator",
        description: "A 3D dice simulator built on Three.js, utilizing Cannon.js as the physics engine, allowing users to control the number of the dices.",
        gitHubRepository: "https://github.com/Fmd0/DiceRollerSimulator-ThreeJS",
        liveDemo: "https://fmd0.github.io/pages/diceRollerSimulator/",
        technologies: ["Three.js", "Vite", "Cannon.js"],
        detailTitle: "3D Dice Simulator with User-Controlled Rolls Using Three.js and Cannon.js",
        detailDescription: "A 3D dice simulator built on Three.js, utilizing Cannon.js as the physics engine, allowing users to control the number of the dices.",
        features: [
            "Built with Vite and Three.js: Ensures fast development and smooth performance for an immersive experience.",
            "Cannon.js Physics Engine: Provides realistic scene simulations for accurate dice interactions.",
            "Advanced Lighting and Shadow System: Creates beautifully rendered scenes with dynamic lighting effects.",
            "Variable Dice Quantity: Allows users to customize the number of dice, catering to diverse gameplay needs.",
            "Randomized Initial Dice Positioning: Enhances realism by randomizing starting positions, resulting in more authentic outcomes.",
        ]
    },
    "starAnimation": {
        headerImage: "https://github.com/Fmd0/assets/blob/main/projectImage/starAnimation/starAnimation0.jpg?raw=true",
        imageBgColor: "rgb(217,32,32)",
        gallery: [
            {
                image: "https://github.com/Fmd0/assets/blob/main/projectImage/starAnimation/starAnimation0.jpg?raw=true",
                backgroundColor: "rgb(230,74,113)"
            },
            {
                image: "https://github.com/Fmd0/assets/blob/main/projectImage/starAnimation/starAnimation1.jpg?raw=true",
                backgroundColor: "rgb(42,194,144)"
            },
        ],
        title: "Star Animation",
        description: "Star animation button utilizing Three.js to render the 3D star model and GSAP for smooth animation curves, featuring both in-place rotation and circular rotation effects",
        gitHubRepository: "https://github.com/Fmd0/StarButtonAnimation-ThreeJS",
        liveDemo: "https://fmd0.github.io/pages/starAnimation/",
        technologies: ["Three.js", "Vite", "GSAP"],
        detailTitle: "Star Animation Button with Three.js and GSAP for Rotational Effects",
        detailDescription: "Star animation button utilizing Three.js to render the 3D star model and GSAP for smooth animation curves, featuring both in-place rotation and circular rotation effects",
        features: [
            "Built with Vite, Three.js, and GSAP: Ensures fast development and smooth performance.",
            "3D Star Model Rendering: Utilizes Three.js to load and display a detailed star model.",
            "Multi-Directional Lighting: Implements multiple DirectionalLights to create a three-dimensional star effect.",
            "Smooth Rotation Trajectories: Uses GSAP for calculating and animating fluid star rotation paths.",
            "Looped Animation Cycle: Allows the animation to restart seamlessly after completion, enhancing user engagement.",
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