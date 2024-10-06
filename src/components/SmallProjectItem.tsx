import * as React from "react";
import LinkPageAnimation from "./LinkPageAnimation.tsx";
import {useEffect, useRef} from "react";


const isInScreen = (element: HTMLElement) => {
    const rectInfo = element.getBoundingClientRect();
    return !(rectInfo.top > window.innerHeight || rectInfo.bottom < 0);
}

const SmallProjectItem = ({linkKey, headerImage, title}: {
    linkKey: string;
    headerImage: string;
    title: string;
}) => {

    const smallProjectItemRef = useRef(null);
    const intervalTimeIdRef = useRef(0);

    useEffect(() => {
        intervalTimeIdRef.current = window.setInterval(() => {
            if(isInScreen(smallProjectItemRef.current!)) {
                (smallProjectItemRef.current as HTMLElement).classList.remove("opacity-0");
                (smallProjectItemRef.current as HTMLElement).classList.add("opacity-100");
            }
            else {
                (smallProjectItemRef.current as HTMLElement).classList.remove("opacity-100");
                (smallProjectItemRef.current as HTMLElement).classList.add("opacity-0");
            }
        }, 128)
        return () => {
            window.clearInterval(intervalTimeIdRef.current)
        }
    }, []);
    return (
        <LinkPageAnimation to={`/project/${linkKey}`} className="relative aspect-[1.6] duration-700 ease-[cubic-bezier(0.55,0,0.1,1)]"
                           ref={smallProjectItemRef}
        >
            <img src={headerImage} alt="SmallProjectItem" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 w-full h-full bg-[#00000020]"></div>
            <p className="absolute bottom-2 left-2 text-white font-['Bodoni_Book'] text-[24px] tracking-[1px]">{title.toUpperCase()}</p>
        </LinkPageAnimation>
    )
}

export default SmallProjectItem;