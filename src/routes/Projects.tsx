import {projectDataList} from "../utils/constants.ts";
import ProjectItem from "../components/ProjectItem/ProjectItem.tsx";
import ProjectsScrollBar from "../components/ProjectsScrollBar.tsx";

const Projects = () => {
    return (
        <div className="fixed inset-0 w-screen h-screen bg-[#222222] flex items-center">
            <div className="ml-32">
                {
                    projectDataList.map((projectData, index) => (
                        <ProjectItem key={index} {...projectData} />
                    ))
                }
            </div>
            <ProjectsScrollBar />
        </div>
    )
}

export default Projects;