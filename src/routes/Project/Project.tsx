import {useParams} from "react-router-dom";
import {useEffect, useMemo, useRef, useState} from "react";
import {projectDataMap} from "../../utils/constants.ts";
import classes from "./Project.module.scss";


const Project = () => {
    const {key} = useParams();
    const projectData = useMemo(() => projectDataMap[key], [key]);
    const scrollHasHandled = useRef<boolean>(false);
    const scrollHasHandledTimeId = useRef<number>(0);

    const [pageStage, setPageStage] = useState<number>(0);

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
            window.clearTimeout(scrollHasHandledTimeId.current);
            // console.log(Math.abs(event.deltaY) >= Math.abs(event.deltaX));
            if(!scrollHasHandled.current && Math.abs(event.deltaY) >= Math.abs(event.deltaX)) {
                if(event.deltaY > 0) {
                    setPageStage(p => p + 1);
                }
                else {
                    setPageStage(p => p===0?0:p - 1);
                }
                scrollHasHandled.current = true;
            }
            scrollHasHandledTimeId.current = setTimeout(() => {
                scrollHasHandled.current = false;
            }, 100)
        }
    })();

    useEffect(() => {
        window.addEventListener("wheel", handleWheel, {
            passive: false,
        });
        return () => {
            window.removeEventListener("wheel", handleWheel);
        }
    }, []);

    return (
        <div className={classes['container']+' bg-gray-800'}>

            <div
                className={[classes['firstContainer'], pageStage > 0 ? classes['firstContainer--exiting'] : "", pageStage > 1 ? classes['firstContainer--exitedTop'] : ""].join(" ")}>
                <div className={classes['firstContainerMain']}>
                    {/*<div className="relative min-h-[35vh] rounded-[32px] overflow-hidden">*/}
                    {/*    <img src={projectData.images[0]} alt="projectData0" className="w-full h-full object-cover"/>*/}
                    {/*    <div className="absolute w-full h-full inset-0 bg-[#0000000a]"></div>*/}
                    {/*</div>*/}
                    <img src={projectData.headerImage} alt="projectData0"
                         className="w-full h-full object-cover rounded-xl"/>
                    <div className="font-['mnn'] flex flex-col gap-6">
                        <p className="font-sans text-[56px]">{projectData.title.toUpperCase()}</p>
                        <p className="text-[18px]">{projectData.description}</p>
                        <p className="flex flex-row items-center gap-4">
                            {projectData.technologies.map((tech, index) => (
                                <span key={index} className={classes[`gradientText${index}`]}>#{tech}</span>
                            ))}
                        </p>
                        <div className="flex flex-col gap-1">
                            <a className="text-[13px] duration-500 hover:text-yellow-300"
                               href={projectData.gitHubRepository} target="_blank">GitHub
                                Repository: {projectData.gitHubRepository}</a>
                            <a className="text-[13px] duration-500 hover:text-yellow-300" href={projectData.liveDemo}
                               target="_blank">Live Demo: {projectData.liveDemo}</a>
                        </div>
                    </div>
                </div>
                <p className="absolute bottom-16 left-1/2 -translate-x-1/2 select-none font-['mnn'] text-white text-[15px]">scroll
                    to discover</p>
                <div className={classes['firstContainer__blur']}></div>
                <div className={classes['firstContainer__blur']}></div>

            </div>

            <div className={[classes['secondContainer'], pageStage ===1?classes['secondContainer--normal']:pageStage<1?classes['secondContainer--exitedBottom']:classes['secondContainer--exitedTop']].join(" ") }>
                <div className={classes['secondContainerMain']}>
                    <p className={classes['secondContainerMain__Title']}>{projectData.detailTitle.toUpperCase()}</p>
                    <div className={classes['secondContainerMain__Paragraph']}>
                        <p>{projectData.detailDescription}</p>
                        <div>
                            <p className="mb-4">Features</p>
                            {
                                projectData.features.map((feature, index) => (
                                    <p key={index}>~ {feature}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className={[classes['subContainer3'], pageStage===2?classes['subContainer3--normal']:pageStage<2?classes['subContainer3--exitedBottom']:classes['subContainer3--exitedTop']].join(" ")} style={{backgroundColor: projectData.gallery[0].backgroundColor}}>
                <div className="relative w-[70%] h-[70%] border-solid border-[10px] duration-500 hover:!border-white" style={{borderColor: projectData.gallery[0].borderColor}}>
                    <img src={projectData.gallery[0].image} alt="gallery" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-[#0000000a]"></div>
                </div>
            </div>
        </div>
    )
}

export default Project