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
    const projectListRef = useRef(null);
    const projectListTranslateRef = useRef(0);
    const bottomBarRef = useRef(null);
    const bottomBarTranslateRef = useRef(0);
    const translatePercentRef = useRef(0);

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
    })()

    useEffect(() => {
        window.addEventListener("wheel", handleWheel, {
            passive: false,
        });
        return () => {
            window.removeEventListener("wheel", handleWheel);
        }
    }, []);

    return (
        <div className="fixed inset-0 w-screen h-screen bg-[#222222] flex items-center">
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