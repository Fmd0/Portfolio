import NavBar from "../NavBar.tsx";
import {useOutlet} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {createRef} from "react";
import classes from "./Layout.module.scss";
import {gsap} from "gsap"
import {
    prePageLocation, setIsContactCanvasAnimationFalse, setIsContactCanvasAnimationTrue,
    setIsHomeCanvasAnimationFalse,
    setIsHomeCanvasAnimationTrue, setIsPageAnimation,
    setPrePageLocation
} from "../../utils/constants.ts";


const nodeRefMap =  {
    "/": createRef(),
    "/contact": createRef(),
    "/projects": createRef(),
    "/project": createRef(),
}

const cssClassMap =  {
    "/": "home",
    "/contact": "contact",
    "/projects": "projects",
    "/project": "project",
}

let tween = null;
const windowDegree = Math.atan(window.innerWidth/window.innerHeight/3.5)/Math.PI * 180;
// let requestAnimationFrameId = 0;
const easeExpoInOut = gsap.parseEase("expo.inOut");
const easePower3InOut = gsap.parseEase("power3.inOut");

let isPageAnimationTimeId = 0;

const handleEnter = (isAppearing: boolean) => {
    let pathname = window.location.pathname;
    if(pathname.startsWith("/project/")){
        pathname = "/project";
    }

    setIsPageAnimation(true);
    window.clearTimeout(isPageAnimationTimeId);
    isPageAnimationTimeId = setTimeout(() => {
        setIsPageAnimation(false);
    }, 2000)

    if(isAppearing) {
        // for appear and page have threeJS animation, do one judge and set pre location
        if(pathname === "/") {
            setTimeout(setIsHomeCanvasAnimationTrue, 1200)
        }
        else if(pathname === "/contact") {
            setTimeout(setIsContactCanvasAnimationTrue, 1200)
        }
        setPrePageLocation(pathname);
        return;
    }

    // for page have threeJS animation, do two judges and set pre location
    if(prePageLocation === "/") {
        setIsHomeCanvasAnimationFalse();
    }
    else if(prePageLocation === "/contact") {
        setIsContactCanvasAnimationFalse();
    }

    if(pathname === "/") {
        setTimeout(setIsHomeCanvasAnimationTrue, 2300)
    }
    else if(pathname === "/contact") {
        setTimeout(setIsContactCanvasAnimationTrue, 2300)
    }
    setPrePageLocation(pathname);

    if(tween) {
        tween.kill();
    }

    const htmlElement = nodeRefMap[pathname].current as HTMLDivElement;
    let position = 0;
    let degree = -windowDegree;
    let progress = 0;
    // console.log(htmlElement);

    if(pathname === "/") {
        (nodeRefMap["/"].current as HTMLDivElement).className += " "+classes['homeNormal'];
    }
    else if(pathname === "/contact") {
        (nodeRefMap["/contact"].current as HTMLDivElement).className += " "+classes['contactNormal'];
    }


    setTimeout(() => {
        tween = gsap.to({},
            {
                onUpdate: function () {
                    progress = this.progress();
                    position = gsap.utils.interpolate(0, 100, easeExpoInOut(progress));
                    degree = gsap.utils.interpolate(-windowDegree, windowDegree, easePower3InOut(progress));
                    htmlElement.style.transform = `translate3d(${100 - position}%,0,0) skew(${windowDegree - Math.abs(degree)}deg, 0deg)`;
                },
                duration: 1.2,
            }
        )
    }, 500)
}

const Layout = () => {
    const currentOutlet = useOutlet();
    let pathname = window.location.pathname;
    if(pathname.startsWith("/project/")){
        pathname = "/project";
    }
    return (
        <div>
            <NavBar />
            <TransitionGroup>
                <CSSTransition key={pathname} nodeRef={nodeRefMap[pathname]} timeout={2000}
                               classNames={{
                                   enter: classes[`${cssClassMap[pathname]}Enter`],
                                   enterDone: classes[`${cssClassMap[pathname]}EnterDone`],
                                   exit: classes[`${cssClassMap[pathname]}Exit`],
                                   exitActive: classes[`${cssClassMap[pathname]}ExitActive`],
                                   appear: classes[`${cssClassMap[pathname]}Appear`],
                                   appearDone: classes[`${cssClassMap[pathname]}AppearDone`],
                               }}
                               onEnter={handleEnter}
                               appear={true}
                               unmountOnExit
                >
                    <div ref={nodeRefMap[pathname]}>
                        {currentOutlet}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default Layout;