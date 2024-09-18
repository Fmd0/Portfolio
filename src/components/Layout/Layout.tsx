import NavBar from "../NavBar.tsx";
import {useOutlet} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {createRef} from "react";
import classes from "./Layout.module.scss";
import {gsap} from "gsap"
import {
    prePageLocation,
    setIsHomeCanvasAnimationFalse,
    setIsHomeCanvasAnimationTrue,
    setPrePageLocation
} from "../../utils/constants.ts";


const nodeRefMap =  {
    "/": createRef(),
    "/contact": createRef(),
    "/projects": createRef(),
}

const cssClassMap =  {
    "/": "home",
    "/contact": "contact",
    "/projects": "projects",
}

let tween = null;
const windowDegree = Math.atan(window.innerWidth/window.innerHeight/3.5)/Math.PI * 180;

const handleEnter = (isAppearing: boolean) => {

    if(isAppearing) {
        // for appear and page have threeJS animation, do one judge and set pre location
        if(window.location.pathname === "/") {
            setTimeout(setIsHomeCanvasAnimationTrue, 1200)
        }
        setPrePageLocation(window.location.pathname);
        return;
    }

    // for page have threeJS animation, do two judges and set pre location
    if(prePageLocation === "/") {
        setIsHomeCanvasAnimationFalse();
    }
    if(window.location.pathname === "/") {
        setTimeout(setIsHomeCanvasAnimationTrue, 2300)
    }
    setPrePageLocation(window.location.pathname);

    if(tween) {
        tween.kill();
    }
    const htmlElement = nodeRefMap[location.pathname].current as HTMLDivElement;
    let position = 0;
    let degree = -windowDegree;
    let progress = 0;


    if(window.location.pathname === "/") {
        (nodeRefMap["/"].current as HTMLDivElement).className += " "+classes['homeNormal'];
    }

    setTimeout(() => {
        tween = gsap.to({},
            {
                onUpdate: function () {
                    progress = this.progress();
                    position = gsap.utils.interpolate(0, 100, gsap.parseEase("expo.inOut")(progress));
                    degree = gsap.utils.interpolate(-windowDegree, windowDegree, gsap.parseEase("power3.inOut")(progress));
                    htmlElement.style.transform = `translate3d(${100-position}%,0,0) skew(${windowDegree-Math.abs(degree)}deg, 0deg)`;
                },
                duration: 1.2,
            }
        )
    }, 500)
}

const Layout = () => {
    const currentOutlet = useOutlet();

    return (
        <div>
            <NavBar />
            <TransitionGroup>
                <CSSTransition key={location.pathname} nodeRef={nodeRefMap[location.pathname]} timeout={2000}
                               classNames={{
                                   enter: classes[`${cssClassMap[window.location.pathname]}Enter`],
                                   enterDone: classes[`${cssClassMap[window.location.pathname]}EnterDone`],
                                   exit: classes[`${cssClassMap[window.location.pathname]}Exit`],
                                   exitActive: classes[`${cssClassMap[window.location.pathname]}ExitActive`],
                                   appear: classes[`${cssClassMap[window.location.pathname]}Appear`],
                                   appearDone: classes[`${cssClassMap[window.location.pathname]}AppearDone`],
                               }}
                               onEnter={handleEnter}
                               appear={true}
                               unmountOnExit
                >
                    <div ref={nodeRefMap[location.pathname]}>
                        {currentOutlet}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default Layout;