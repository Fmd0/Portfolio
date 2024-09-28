import * as React from "react";
import {useEffect, useRef} from "react";


let pointerHadDown = false;
let translateX = 0;
let prePointerX = 0;
const maxTranslateX = window.innerWidth*(1/3-3/100);
const minTranslateX = 0;

const ProjectsBottomScrollBar = () => {

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        pointerHadDown = true;
        prePointerX = event.clientX;
        transformElement.current?.children[0].classList.add("bg-white", "scale-y-[4]");
        document.body.style.cursor = "grabbing";
    }

    const handlePointerMove = (() => {
        let isThrottle = false;
        return (event: PointerEvent) => {
            if(!pointerHadDown || isThrottle) {
                return;
            }
            isThrottle = true;
            setTimeout(() => {
                isThrottle = false;
            }, 16)
            translateX += event.clientX - prePointerX;
            prePointerX = event.clientX;
            if(translateX < minTranslateX) {
                transformElement.current.style.transform = `translate3d(${minTranslateX}px, -50%, 0)`;
            }
            else if(translateX > maxTranslateX) {
                transformElement.current.style.transform = `translate3d(${maxTranslateX}px, -50%, 0)`;
            }
            else {
                transformElement.current.style.transform = `translate3d(${translateX}px, -50%, 0)`;
            }
        }
    })();

    const handlePointerUp = (event: PointerEvent) => {
        if(!pointerHadDown) {
            return;
        }
        event.stopPropagation();
        transformElement.current?.children[0].classList.remove("bg-white", "scale-y-[4]");
        pointerHadDown = false;
        prePointerX = 0;
        if(translateX < minTranslateX) {
            translateX = minTranslateX
        }
        else if(translateX > maxTranslateX) {
            translateX = maxTranslateX
        }
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
        <div className="absolute left-0 right-0 bottom-10 w-screen text-white font-['mnn'] text-[10px] flex flex-col items-center gap-6 select-none">
            <p className="">All</p>
            <div className="relative bg-[rgba(255,255,255,0.2)] w-1/3 h-[1px]">
                <div ref={transformElement} className="cursor-grab absolute top-1/2 left-0 ease-[cubic-bezier(0.215,0.61,0.355,1)] duration-[600ms] -translate-y-1/2 h-2 flex items-center group/ProjectsScrollBar"
                     onPointerDown={handlePointerDown}
                >
                    <div className="w-[3vw] h-[1px] bg-[rgba(255,255,255,0.6)] duration-500 group-hover/ProjectsScrollBar:bg-white group-hover/ProjectsScrollBar:scale-y-[4]"></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsBottomScrollBar;