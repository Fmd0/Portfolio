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
    // const projectItemTitle = useRef(null);
    // const projectItemUnderscore = useRef(null);
    //
    // const handleMouseOver = () => {
    //     projectItemTitle.current.classList.add(classes['hoverTranslate']);
    //     projectItemUnderscore.current.classList.add(classes['hoverTranslate']);
    // }
    //
    // const handleMouseOut = () => {
    //     projectItemTitle.current.classList.remove(classes['hoverTranslate']);
    //     projectItemUnderscore.current.classList.remove(classes['hoverTranslate']);
    //
    // }

    return (
        <Link to={`/project/${linkKey}`}>
            <div className={classes['projectItem']}>
                <div className={classes['projectItem__imageContainer']}>
                    <img src={headerImage} alt="ProjectItem" className={classes['projectItem__image']}/>

                    <div className={classes['projectItem__imageContainerBg']} style={{
                        backgroundColor: color.rgbString(),
                    }}></div>
                    {
                        color.shades(18).slice(0, 4).map((shade, index) => (
                            <div key={index} className={classes['projectItem__imageContainerBg']}
                                 style={{backgroundColor: shade.rgbString(),}}></div>
                        ))
                    }
                </div>
                <p className={classes['projectItem__title']}>{title}</p>
                <div className={classes['projectItem__underscore']}>
                    <div className={classes['projectItem__underscoreInner']}></div>
                </div>
                <p className={classes['projectItem__description']}>{description.length > 80 ? description.slice(0, 80) + "...":description}</p>

            </div>
        </Link>
    )
}

export default ProjectItem;