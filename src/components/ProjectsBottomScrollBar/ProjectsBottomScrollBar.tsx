import * as React from "react";
import {MutableRefObject, useEffect, useRef} from "react";
import classes from "./ProjectsBottomScrollBar.module.scss";
import {MAX_PROJECT_LIST_TRANSLATE, MIN_PROJECT_LIST_TRANSLATE} from "../../routes/Projects.tsx";


export const MAX_PROJECT_BOTTOM_SCROLL_BAR = window.innerWidth*0.4>400?400-window.innerWidth*3/100:window.innerWidth*0.4-window.innerWidth*3/100;
export const MIN_PROJECT_BOTTOM_SCROLL_BAR = 0;

const ProjectsBottomScrollBar = ({bottomBarRef, projectListRef, bottomBarTranslateRef, projectListTranslateRef}: {
    bottomBarRef: MutableRefObject<null|HTMLDivElement>;
    projectListRef: MutableRefObject<null|HTMLDivElement>;
    bottomBarTranslateRef: MutableRefObject<number>;
    projectListTranslateRef: MutableRefObject<number>;
}) => {

    const isAnimationRef = useRef(false);
    const translatePercentRef = useRef(0);
    const prePointerRef = useRef(0);
    const pointerHadDownRef = useRef(false);

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        event.stopPropagation();
        pointerHadDownRef.current = true;
        prePointerRef.current = event.clientX;
        bottomBarRef.current?.children[0].classList.add(classes['container__barBodyInner--hover']);
        bottomBarRef.current?.classList.remove(classes['container__barBodyCursor']);
        document.body.style.cursor = 'grabbing';
    }

    const handlePointerMove = (() => {
        let isThrottle = false;
        return (event: PointerEvent) => {
            if(!pointerHadDownRef.current || isThrottle) {
                return;
            }
            isThrottle = true;
            setTimeout(() => {
                isThrottle = false;
            }, 128)
            // console.log(bottomBarTranslateRef.current);
            bottomBarTranslateRef.current += event.clientX - prePointerRef.current;
            translatePercentRef.current = bottomBarTranslateRef.current/MAX_PROJECT_BOTTOM_SCROLL_BAR;
            prePointerRef.current = event.clientX;
            if(!isAnimationRef.current) {
                isAnimationRef.current = true;
                window.requestAnimationFrame(() => {
                    if(bottomBarTranslateRef.current < MIN_PROJECT_BOTTOM_SCROLL_BAR) {
                        // setTimeout(() => {
                        //     transformElement.current.style.transform = `translate3d(${minTranslateX}px, -50%, 0)`;
                        // }, transitionDelay)
                        projectListTranslateRef.current = MIN_PROJECT_LIST_TRANSLATE;
                        bottomBarRef.current.style.transform = `translate3d(${MIN_PROJECT_BOTTOM_SCROLL_BAR}px, -50%, 0)`;
                        projectListRef.current.style.transform = `translate3d(${-MIN_PROJECT_LIST_TRANSLATE}px, 0, 0)`;
                    }
                    else if(bottomBarTranslateRef.current > MAX_PROJECT_BOTTOM_SCROLL_BAR) {
                        // setTimeout(() => {
                        //     transformElement.current.style.transform = `translate3d(${maxTranslateX}px, -50%, 0)`;
                        // }, transitionDelay)
                        projectListTranslateRef.current = MAX_PROJECT_LIST_TRANSLATE;
                        bottomBarRef.current.style.transform = `translate3d(${MAX_PROJECT_BOTTOM_SCROLL_BAR}px, -50%, 0)`;
                        projectListRef.current.style.transform = `translate3d(${-MAX_PROJECT_LIST_TRANSLATE}px, 0, 0)`;

                    }
                    else {
                        // setTimeout(() => {
                        //     transformElement.current.style.transform = `translate3d(${translateX}px, -50%, 0)`;
                        // }, transitionDelay);
                        projectListTranslateRef.current = translatePercentRef.current*MAX_PROJECT_LIST_TRANSLATE;
                        bottomBarRef.current.style.transform = `translate3d(${bottomBarTranslateRef.current}px, -50%, 0)`;
                        projectListRef.current.style.transform = `translate3d(${-projectListTranslateRef.current}px, 0, 0)`;
                    }
                    isAnimationRef.current = false;
                })
            }
        }
    })();

    const handlePointerUp = () => {
        if(!pointerHadDownRef.current) {
            return;
        }
        // event.stopPropagation();
        bottomBarRef.current?.children[0].classList.remove(classes['container__barBodyInner--hover']);
        pointerHadDownRef.current = false;
        prePointerRef.current = 0;
        if(bottomBarTranslateRef.current < MIN_PROJECT_BOTTOM_SCROLL_BAR) {
            bottomBarTranslateRef.current = MIN_PROJECT_BOTTOM_SCROLL_BAR;
        }
        else if(bottomBarTranslateRef.current > MAX_PROJECT_BOTTOM_SCROLL_BAR) {
            bottomBarTranslateRef.current = MAX_PROJECT_BOTTOM_SCROLL_BAR;
        }
        bottomBarRef.current?.  classList.add(classes['container__barBodyCursor']);
        document.body.style.cursor = "default";
    }

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
                <div ref={bottomBarRef} className={[classes['container__barBody'], classes['container__barBodyCursor']].join(" ")} onPointerDown={handlePointerDown}>
                    <div className={classes['container__barBodyInner']}></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsBottomScrollBar;