import classes from "./ProjectItem.module.scss";
import {Link} from "react-router-dom";
import Values from 'values.js'



const ProjectItem = ({linkKey, headerImage, title, description}: {
    linkKey: string;
    headerImage: string;
    title: string;
    description: string;
}) => {

    const color = new Values('rgb(206,177,151)');
    color.shades(20).forEach(c => {
        console.log(c.rgbString());
    })

    return (
        <Link to={`/project/${linkKey}`}>
            <div className={classes['projectItem']}>
                <div className={classes['projectItem__image']}>
                    <img src={headerImage} alt="ProjectItem" className="w-full h-full object-cover scale-125"/>
                </div>
                <p className="font-['Bodoni_Book'] text-[26px] tracking-[1px] font-light">{title}</p>
                <div className="w-10 h-[1px] bg-white"></div>
                <p className={classes['projectItem__description']}>{description.length>80?description.slice(0, 80)+"...":description}</p>

            </div>
        </Link>
    )
}

export default ProjectItem;