import * as React from "react";
import {useEffect, useRef} from "react";
import classes from "./ProjectsBottomScrollBar.module.scss";


let pointerHadDown = false;
let translateX = 0;
let prePointerX = 0;
const maxTranslateX = window.innerWidth*(1/3-3/100);
const minTranslateX = 0;

const ProjectsBottomScrollBar = () => {

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        pointerHadDown = true;
        prePointerX = event.clientX;
        transformElement.current?.children[0].classList.add(classes['container__barBodyInner--hover']);
        transformElement.current?.classList.remove(classes['container__barBodyCursor']);
        document.body.style.cursor = 'grabbing';
    }
    // const transitionDelay = 500;

    const handlePointerMove = (() => {
        let isThrottle = false;
        return (event: PointerEvent) => {
            if(!pointerHadDown || isThrottle) {
                return;
            }
            isThrottle = true;
            setTimeout(() => {
                isThrottle = false;
            }, 96)
            translateX += event.clientX - prePointerX;
            prePointerX = event.clientX;
            if(translateX < minTranslateX) {
                // setTimeout(() => {
                //     transformElement.current.style.transform = `translate3d(${minTranslateX}px, -50%, 0)`;
                // }, transitionDelay)
                transformElement.current.style.transform = `translate3d(${minTranslateX}px, -50%, 0)`;
            }
            else if(translateX > maxTranslateX) {
                // setTimeout(() => {
                //     transformElement.current.style.transform = `translate3d(${maxTranslateX}px, -50%, 0)`;
                // }, transitionDelay)
                transformElement.current.style.transform = `translate3d(${maxTranslateX}px, -50%, 0)`;
            }
            else {
                // setTimeout(() => {
                //     transformElement.current.style.transform = `translate3d(${translateX}px, -50%, 0)`;
                // }, transitionDelay);
                transformElement.current.style.transform = `translate3d(${translateX}px, -50%, 0)`;
            }
        }
    })();

    const handlePointerUp = (event: PointerEvent) => {
        if(!pointerHadDown) {
            return;
        }
        event.stopPropagation();
        transformElement.current?.children[0].classList.remove(classes['container__barBodyInner--hover']);
        pointerHadDown = false;
        prePointerX = 0;
        if(translateX < minTranslateX) {
            translateX = minTranslateX
        }
        else if(translateX > maxTranslateX) {
            translateX = maxTranslateX
        }
        transformElement.current?.classList.add(classes['container__barBodyCursor']);
        document.body.style.cursor = "default";
    }
    const transformElement = useRef<HTMLDivElement|null>(null);

    useEffect(() => {
        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerUp);
        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        }
    })

    return (
        <div className={classes['container']}>
            <p className={classes['container__text']}>All</p>
            <div className={classes['container__bar']}>
                <div ref={transformElement} className={[classes['container__barBody'], classes['container__barBodyCursor']].join(" ")} onPointerDown={handlePointerDown}>
                    <div className={classes['container__barBodyInner']}></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsBottomScrollBar;