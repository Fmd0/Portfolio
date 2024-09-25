import {useParams} from "react-router-dom";
import {useMemo} from "react";
import {projectDataMap} from "../../utils/constants.ts";
import classes from "./Project.module.scss";


const Project = () => {
    const {key} = useParams();
    const projectData = useMemo(() => projectDataMap[key], [key]);
    return (
        <div className={classes['container']+' bg-gray-800'}>

            <div className={classes['firstContainer']}>
                <div className={classes['firstContainerMain']}>
                    {/*<div className="relative min-h-[35vh] rounded-[32px] overflow-hidden">*/}
                    {/*    <img src={projectData.images[0]} alt="projectData0" className="w-full h-full object-cover"/>*/}
                    {/*    <div className="absolute w-full h-full inset-0 bg-[#0000000a]"></div>*/}
                    {/*</div>*/}
                    <img src={projectData.images[0]} alt="projectData0" className="w-full h-full object-cover rounded-xl"/>
                    <div className="font-['mnn'] flex flex-col gap-6">
                        <p className="font-sans text-[56px]">{projectData.title.toUpperCase()}</p>
                        <p className="text-[18px]">{projectData.description}</p>
                        <p className="flex flex-row items-center gap-4">
                            {projectData.technologies.map((tech, index) => (
                                <span key={index} className={classes[`gradientText${index}`]}>#{tech}</span>
                            ))}
                        </p>
                        <div className="flex flex-col gap-1">
                            <a className="text-[13px] duration-500 hover:text-yellow-300" href={projectData.gitHubRepository} target="_blank">GitHub Repository: {projectData.gitHubRepository}</a>
                            <a className="text-[13px] duration-500 hover:text-yellow-300" href={projectData.liveDemo} target="_blank">Live Demo: {projectData.liveDemo}</a>
                        </div>
                    </div>
                </div>
                <p className="absolute bottom-16 left-1/2 -translate-x-1/2 select-none font-['mnn'] text-white text-[15px] mt-8">scroll to discover</p>
            </div>

            <div className="absolute inset-0 left-0 top-0 w-screen h-screen flex flex-col items-center justify-center bg-black bg-opacity-10 backdrop-blur-lg">
                <p>{projectData.detailTitle}</p>
                <div className="grid grid-cols-2 gap-6">
                    <p>{projectData.detailDescription}</p>
                    <div>
                        <p>Features</p>
                        {
                            projectData.features.map((feature, index) => (
                                <p key={index}>{feature}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project