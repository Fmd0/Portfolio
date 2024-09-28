import {projectDataMap} from "../utils/constants.ts";
import ProjectItem from "../components/ProjectItem/ProjectItem.tsx";
import ProjectsBottomScrollBar from "../components/ProjectsBottomScrollBar.tsx";

const Projects = () => {
    return (
        <div className="fixed inset-0 w-screen h-screen bg-[#222222] flex items-center">
            <div className="ml-32 flex flex-row items-center gap-8">
                {
                    Object.keys(projectDataMap).map((projectDataKey, index) => (
                        <ProjectItem key={index} {...projectDataMap[projectDataKey]} linkKey={projectDataKey} />
                    ))
                }
            </div>
            <ProjectsBottomScrollBar />
        </div>
    )
}

export default Projects;