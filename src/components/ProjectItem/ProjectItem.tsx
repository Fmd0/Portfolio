import classes from "./ProjectItem.module.scss";
import Values from 'values.js'
import * as React from "react";
import {useMemo} from "react";
import LinkPageAnimation from "../LinkPageAnimation.tsx";


const centerX = window.innerWidth / 2;



const ProjectItem = ({linkKey, headerImage, title, description, imageBgColor}: {
    linkKey: string;
    headerImage: string;
    title: string;
    description: string;
    imageBgColor: string;
}) => {

    const color = useMemo(() => new Values(imageBgColor), [imageBgColor]);
    const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
        const rectInfo = event.currentTarget.getBoundingClientRect();
        window.document.documentElement.style.setProperty("--transform-origin-first", `${centerX-rectInfo.left}px`)
    }


    return (
        <LinkPageAnimation to={`/project/${linkKey}`}>
            <div className={classes['projectItem']}>
                <div className={classes['projectItem__imageContainer']}
                     onMouseOver={handleMouseOver}
                >
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
        </LinkPageAnimation>
    )
}

export default ProjectItem;