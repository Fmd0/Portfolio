import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useMemo, useRef, useState} from "react";
import {projectDataMap} from "../../utils/constants.ts";
import classes from "./Project.module.scss";
import ProjectBottomBar from "../../components/ProjectBottomBar.tsx";


const Project = () => {
    const {key} = useParams();
    const projectData = useMemo(() => projectDataMap[key], [key]);
    const scrollHasHandled = useRef<boolean>(false);
    const scrollHasHandledTimeId = useRef<number>(0);

    const [pageStage, setPageStage] = useState<number>(0);
    const totalPageStage = projectData.gallery.length+1;
    const navigate = useNavigate();
    // const originalPageStage = useRef<number>(0);
    const hadPointerDownRef = useRef<boolean>(false);
    const prePointerYRef = useRef<number>(0);

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
                    if(pageStage===totalPageStage) {
                        navigate("/projects");
                    }
                    else {
                        setPageStage(p => p + 1);
                    }
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

    const handlePointerDown = (event: PointerEvent) => {
        hadPointerDownRef.current = true;
        prePointerYRef.current = event.clientY;
    }

    const handlePointerUp = () => {
        hadPointerDownRef.current = false;
        prePointerYRef.current = 0;
    }

    const handlePointerMove = (() => {
        let isThrottle = false;
        return (event: PointerEvent) => {
            event.preventDefault();
            if(!hadPointerDownRef.current || isThrottle) {
                return;
            }
            isThrottle = true;
            setTimeout(() => {
                isThrottle = false;
            }, 32);
            window.clearTimeout(scrollHasHandledTimeId.current);
            // console.log(Math.abs(event.deltaY) >= Math.abs(event.deltaX));
            // console.log(event.clientY - prePointerYRef.current);
            if(!scrollHasHandled.current && Math.abs(event.clientY-prePointerYRef.current) >= 32) {
                if(event.clientY-prePointerYRef.current < 0) {
                    if(pageStage===totalPageStage) {
                        navigate("/projects");
                    }
                    else {
                        setPageStage(p => p + 1);
                    }
                }
                else {
                    setPageStage(p => p===0?0:p - 1);
                }
                prePointerYRef.current = event.clientY;
                scrollHasHandled.current = true;
            }
            scrollHasHandledTimeId.current = setTimeout(() => {
                scrollHasHandled.current = false;
            }, 200)
        }
    })();

    useEffect(() => {
        if(window.innerWidth > 768) {
            window.addEventListener("wheel", handleWheel, {
                passive: false,
            });
            window.addEventListener("pointerdown", handlePointerDown);
            window.addEventListener("pointermove", handlePointerMove);
            window.addEventListener("pointerup", handlePointerUp);
        }
        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("pointerdown", handlePointerDown);
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        }
    }, [pageStage]);
    // console.log(pageStage);

    return (
        <div className={classes['container'] + ' relative top-0 left-0 md:fixed bg-grey-800 md:touch-pan-x'}>

            <div
                className={[classes['firstContainer'], pageStage > 0 ? classes['firstContainer--exiting'] : "", pageStage > 1 ? classes['firstContainer--exitedTop'] : ""].join(" ")}>
                <div className={classes['firstContainerMain']}>
                    <img src={projectData.headerImage} alt="projectData0"
                         className="h-72 lg:w-full lg:h-full object-cover rounded-md"/>
                    <div className="font-['mnn'] flex flex-col gap-6">
                        <p className="font-sans text-[56px]">{projectData.title.toUpperCase()}</p>
                        <p className="text-[16px]">{projectData.description}</p>
                        <p className="flex flex-row items-center gap-4">
                            {projectData.technologies.map((tech, index) => (
                                <span key={index} className={classes[`gradientText${index}`]}>#{tech}</span>
                            ))}
                        </p>
                        <div className="flex flex-col gap-1">
                            {
                                projectData.gitHubRepository && projectData.gitHubRepository !== "" &&
                                <a className="text-[13px] duration-500 hover:text-yellow-300"
                                   href={projectData.gitHubRepository} target="_blank">GitHub
                                    Repository: {projectData.gitHubRepository}</a>
                            }
                            {
                                projectData.liveDemo && projectData.liveDemo !== "" &&
                                <a className="text-[13px] duration-500 hover:text-yellow-300"
                                   href={projectData.liveDemo} target="_blank">Live Demo: {projectData.liveDemo}</a>
                            }
                        </div>
                    </div>
                </div>
                <p className="absolute bottom-40 left-1/2 -translate-x-1/2 select-none font-['mnn'] text-white text-[12px]">scroll
                    to discover</p>
                <div className={classes['firstContainer__blur']}></div>
                <div className={classes['firstContainer__blur']}></div>

            </div>

            <div
                className={[classes['secondContainer'], pageStage === 1 ? classes['secondContainer--normal'] : pageStage < 1 ? classes['secondContainer--exitedBottom'] : classes['secondContainer--exitedTop']].join(" ")}>
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

            {
                projectData.gallery.map((currentGallery, index) => (
                    <div key={index}
                         className={[classes['subContainer'], pageStage === index+2 ? classes['subContainer--normal'] : pageStage < index+2 ? classes['subContainer--exitedBottom'] : classes['subContainer--exitedTop']].join(" ")}
                         style={{backgroundColor: currentGallery.backgroundColor}}>
                        <div
                            className="relative w-[70%] h-[70%] border-solid border-[10px] duration-500 border-black border-opacity-30 hover:!border-white">
                            <img src={currentGallery.image} alt="gallery"
                                 className="w-full h-full object-cover"/>
                            <div className="absolute inset-0 bg-[#0000000a]"></div>
                        </div>
                    </div>
                ))
            }

            <div className="flex md:hidden flex-col px-4 py-20 gap-8 text-white">
                <img src={projectData.headerImage} alt="projectData0"
                     className="object-cover rounded-md"/>
                <div className="font-['mnn'] flex flex-col gap-2">
                    <p className="font-sans text-[36px]">{projectData.title.toUpperCase()}</p>
                    <p className="text-[15px]">{projectData.description}</p>
                    <p className="flex flex-row items-center gap-4">
                        {projectData.technologies.map((tech, index) => (
                            <span key={index} className={classes[`gradientText${index}`]}>#{tech}</span>
                        ))}
                    </p>
                    <div className="flex flex-col gap-1">
                        {
                            projectData.gitHubRepository && projectData.gitHubRepository !== "" &&
                            <a className="text-[13px] duration-500 hover:text-yellow-300"
                               href={projectData.gitHubRepository} target="_blank">GitHub
                                Repository: {projectData.gitHubRepository}</a>
                        }
                        {
                            projectData.liveDemo && projectData.liveDemo !== "" &&
                            <a className="text-[13px] duration-500 hover:text-yellow-300"
                               href={projectData.liveDemo} target="_blank">Live Demo: {projectData.liveDemo}</a>
                        }
                    </div>
                </div>
                <div className="font-['mnn'] text-[14px]">
                    <p>Features</p>
                    {
                        projectData.features.map((feature, index) => (
                            <p key={index}>~ {feature}</p>
                        ))
                    }
                </div>

                {
                    projectData.gallery.map((currentGallery, index) => (
                        <img key={index} src={currentGallery.image} alt="gallery"
                             className="w-full object-cover"/>
                    ))
                }


            </div>

            <ProjectBottomBar currentStage={pageStage + 1} totalStage={projectData.gallery.length + 2}/>
        </div>
    )
}

export default Project