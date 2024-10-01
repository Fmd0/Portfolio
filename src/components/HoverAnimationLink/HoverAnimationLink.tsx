import classes from "./HoverAnimationLink.module.scss";
import LinkPageAnimation from "../LinkPageAnimation.tsx";

const HoverAnimationLink = ({pathname, textName}: {
    pathname: string,
    textName: string,
}) => {


    const selected = window.location.pathname.split("/")[1] === pathname;

    return (
        <LinkPageAnimation to={"./"+pathname}>
            <div className={[classes.link, selected?classes.selected:""].join(" ")} >
                <p className={classes.animationFlexContainerTop}>
                    {
                        textName.split("").map((p, index) => (
                            <span key={index}
                               className={[classes.animationFlexContainerTop__item, selected?"":classes["animationFlexContainerTop__item--hover"]].join(" ")}
                            >{p.toUpperCase()}</span>
                        ))
                    }
                </p>
                <p className={classes.animationFlexContainerBottom}>
                    {
                        textName.split("").map((p, index) => (
                            <span key={index}
                               className={[classes.animationFlexContainerBottom__item, selected?"":classes["animationFlexContainerBottom__item--hover"]].join(" ")}
                            >{p.toUpperCase()}</span>
                        ))
                    }
                </p>
            </div>
        </LinkPageAnimation>
    )
}

export default HoverAnimationLink;