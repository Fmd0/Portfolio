

const ProjectBottomBar = ({currentStage, totalStage}: {
    currentStage: number;
    totalStage: number;
}) => {
    return (
        <div className="absolute bottom-10 left-0 right-0 w-screen px-8 font-['mnn'] text-[12px] hidden md:flex flex-row items-center justify-between">
            <p>2019/2024</p>
            <p>0{currentStage}/0{totalStage}</p>
            <div className="absolute left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-[rgba(255,255,255,0.2)] grid place-items-center">
                <div className="h-[1px] bg-white ease-[cubic-bezier(0.19,1,0.22,1)] duration-500" style={{width: (currentStage-1)/(totalStage-1)*100+"%"}}></div>
            </div>
        </div>
    )
}

export default ProjectBottomBar;