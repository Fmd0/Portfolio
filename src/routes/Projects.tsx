import {projectDataMap} from "../utils/constants.ts";
import ProjectItem from "../components/ProjectItem/ProjectItem.tsx";
import ProjectsBottomScrollBar, {
    MAX_PROJECT_BOTTOM_SCROLL_BAR
} from "../components/ProjectsBottomScrollBar/ProjectsBottomScrollBar.tsx";
import {useEffect, useRef} from "react";

export const MIN_PROJECT_LIST_TRANSLATE = 0;
export const MAX_PROJECT_LIST_TRANSLATE = 4*400+3*32+16*8*2 - window.innerWidth;

const Projects = () => {

    const isAnimationRef = useRef(false);
    const projectListRef = useRef<null|HTMLDivElement>(null);
    const projectListTranslateRef = useRef(0);
    // const projectListTranslatePointerRef = useRef(0);
    const bottomBarRef = useRef<null|HTMLDivElement>(null);
    const bottomBarTranslateRef = useRef(0);
    const translatePercentRef = useRef(0);
    const hasProjectsPointerDownRef = useRef(false);
    const prePointerRef = useRef(0);

    const handleWheel = (() => {
        let isThrottle = false;
        return (event: WheelEvent) => {
            event.preventDefault();
            if(isThrottle || event.ctrlKey) {
                return;
            }
            isThrottle = true;
            setTimeout(() => {
                isThrottle = false;
            }, 64);
            const newTranslate = projectListTranslateRef.current + event.deltaX*4;
            if(newTranslate < MIN_PROJECT_LIST_TRANSLATE) {
                projectListTranslateRef.current = MIN_PROJECT_LIST_TRANSLATE;
            }
            else if(newTranslate > MAX_PROJECT_LIST_TRANSLATE) {
                projectListTranslateRef.current = MAX_PROJECT_LIST_TRANSLATE;
            }
            else {
                projectListTranslateRef.current = newTranslate;
            }
            translatePercentRef.current = projectListTranslateRef.current/MAX_PROJECT_LIST_TRANSLATE;
            bottomBarTranslateRef.current = translatePercentRef.current*MAX_PROJECT_BOTTOM_SCROLL_BAR;
            if(!isAnimationRef.current) {
                isAnimationRef.current = true;
                window.requestAnimationFrame(() => {
                    projectListRef.current.style.transform = `translate3d(${-projectListTranslateRef.current}px, 0, 0)`;
                    bottomBarRef.current.style.transform = `translate3d(${bottomBarTranslateRef.current}px, -50%, 0)`;
                })
                isAnimationRef.current = false;
            }

        }
    })();

    const handlePointerDown = (event: PointerEvent) => {
        event.stopPropagation();
        prePointerRef.current = event.clientX;
        hasProjectsPointerDownRef.current = true;
        projectListRef.current.style.scale = "0.9";
    }

    const handlePointerUp = () => {
        if(!hasProjectsPointerDownRef.current) {
            return;
        }
        hasProjectsPointerDownRef.current = false;
        prePointerRef.current = 0;
        projectListRef.current.style.scale = "1";
    }


    const handlePointerMove = (() => {
        let isThrottle = false;
        return (event: PointerEvent) => {
            if(isThrottle) {
                return;
            }
            isThrottle = true;
            setTimeout(() => {
                isThrottle = false;
            }, 32);

            // handle css variable --transform-origin-first
            const childrenLength = projectListRef.current?.children.length||0;
            for (let i = 0; i < childrenLength-1; i++) {
                const rectInfo = projectListRef.current?.children[i].getBoundingClientRect();
                if(event.clientX >= rectInfo.left && event.clientX <= rectInfo.left+rectInfo.width) {
                    // console.log("result: ",window.innerWidth / 2 - rectInfo.left);
                    window.document.documentElement.style.setProperty("--transform-origin-first", `${window.innerWidth/2-rectInfo.left}px`);
                    break;
                }
            }
        }
    })();

    const handlePointerMoveTranslate = (() => {
        let isThrottle = false;
        return (event: PointerEvent) => {
            if(!hasProjectsPointerDownRef.current || isThrottle) {
                return;
            }
            isThrottle = true;
            setTimeout(() => {
                isThrottle = false;
            }, 8);
            // console.log("handlePointerMoveTranslate");
            // handle project list translate
            projectListTranslateRef.current -= event.clientX - prePointerRef.current;
            prePointerRef.current = event.clientX;
            if (projectListTranslateRef.current < MIN_PROJECT_LIST_TRANSLATE) {
                projectListTranslateRef.current = MIN_PROJECT_LIST_TRANSLATE;
            } else if (projectListTranslateRef.current > MAX_PROJECT_LIST_TRANSLATE) {
                projectListTranslateRef.current = MAX_PROJECT_LIST_TRANSLATE;
            }
            translatePercentRef.current = projectListTranslateRef.current/MAX_PROJECT_LIST_TRANSLATE;
            bottomBarTranslateRef.current = translatePercentRef.current*MAX_PROJECT_BOTTOM_SCROLL_BAR;
            if(!isAnimationRef.current) {
                isAnimationRef.current = true;
                window.requestAnimationFrame(() => {
                    bottomBarRef.current.style.transform = `translate3d(${bottomBarTranslateRef.current}px, -50%, 0)`;
                    projectListRef.current.style.transform = `translate3d(${-projectListTranslateRef.current}px, 0, 0)`;
                    isAnimationRef.current = false;
                })
            }

        }
    })();


    useEffect(() => {
        window.addEventListener("wheel", handleWheel, {
            passive: false,
        });
        window.addEventListener("pointerdown", handlePointerDown);
        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointermove", handlePointerMoveTranslate);
        window.addEventListener("pointerup", handlePointerUp);
        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("pointerdown", handlePointerDown);
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointermove", handlePointerMoveTranslate);
            window.removeEventListener("pointerup", handlePointerUp);
        }
    }, []);

    return (
        <div className="fixed inset-0 w-screen h-screen bg-[#222222] flex items-center select-none touch-pan-x">
            <div className="overflow-hidden">
                <div className="pl-32 flex flex-row gap-8 ease-[cubic-bezier(0.215,0.61,0.355,1)] duration-500 will-change-transform"
                     ref={projectListRef}>
                    {
                        Object.keys(projectDataMap).map((projectDataKey, index) => (
                            <ProjectItem key={index} {...projectDataMap[projectDataKey]} linkKey={projectDataKey}/>
                        ))
                    }
                    <div className="min-w-24 h-1"></div>
                </div>
            </div>
            <ProjectsBottomScrollBar
                bottomBarRef={bottomBarRef}
                projectListRef={projectListRef}
                bottomBarTranslateRef={bottomBarTranslateRef}
                projectListTranslateRef={projectListTranslateRef}
            />
        </div>
    )
}

export default Projects;