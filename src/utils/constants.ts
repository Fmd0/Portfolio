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

let prePageLocation = "/";

const setPrePageLocation = (location: string) => {
    prePageLocation = location;
}


export {
    Colors,
    IS_HOME_CANVAS_ANIMATION,
    setIsHomeCanvasAnimationTrue,
    setIsHomeCanvasAnimationFalse,
    prePageLocation,
    setPrePageLocation,
}