import {projectDataMap} from "../utils/constants.ts";
import ProjectItem from "../components/ProjectItem/ProjectItem.tsx";
import ProjectsBottomScrollBar from "../components/ProjectsBottomScrollBar/ProjectsBottomScrollBar.tsx";
import {useEffect, useRef} from "react";

const MIN_TRANSLATE = 0;
const MAX_TRANSLATE = 5*400+4*64+32*4 - window.innerWidth;

const Projects = () => {

    const projectListRef = useRef(null);
    const projectListTranslateRef = useRef(0);

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
            }, 32);
            const newTranslate = projectListTranslateRef.current + event.deltaX;
            // console.log(newTranslate);
            if(newTranslate < MIN_TRANSLATE) {
                projectListTranslateRef.current = MIN_TRANSLATE;
                projectListRef.current.style.transform = `translate3d(${-projectListTranslateRef.current}px, 0, 0)`;
            }
            else if(newTranslate > MAX_TRANSLATE) {
                projectListTranslateRef.current = MAX_TRANSLATE;
                projectListRef.current.style.transform = `translate3d(${-projectListTranslateRef.current}px, 0, 0)`;
            }
            else {
                projectListTranslateRef.current = newTranslate;
                projectListRef.current.style.transform = `translate3d(${-projectListTranslateRef.current}px, 0, 0)`;
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
                <div className="pl-32 flex flex-row gap-8 ease-[cubic-bezier(0.215,0.61,0.355,1)] duration-300"
                     ref={projectListRef}>
                    {
                        Object.keys(projectDataMap).map((projectDataKey, index) => (
                            <ProjectItem key={index} {...projectDataMap[projectDataKey]} linkKey={projectDataKey}/>
                        ))
                    }
                    <div className="min-w-24 h-1"></div>
                </div>
            </div>
            <ProjectsBottomScrollBar/>
        </div>
    )
}

export default Projects;