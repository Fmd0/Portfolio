import classes from "./ProjectItem.module.scss";


const ProjectItem = ({image, title, description}: {
    image: string;
    title: string;
    description: string;
}) => {
    return (
        <div className={classes['projectItem']}>
            <div className={classes['projectItem__image']}>
                <img src={image} alt="ProjectItem" className="w-full h-full object-cover scale-125" />
            </div>
            <p className="font-['Bodoni_Book'] text-[26px] tracking-[1px] font-light">{title}</p>
            <div className="w-10 h-[1px] bg-white"></div>
            <p className={classes['projectItem__description']}>{description}</p>
        </div>
    )
}

export default ProjectItem;