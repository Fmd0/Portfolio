import {Link} from "react-router-dom";
import classes from "./HoverAnimationLink.module.scss";

const HoverAnimationLink = ({pathname}: {
    pathname: string,
}) => {


    const selected = window.location.pathname.split("/")[1] === pathname;

    return (
        <Link to={"./"+pathname}
              onClick={(event) => {
                  if(selected) {
                      event.preventDefault();
                  }
              }}
        >
            <div className={[classes.link, selected?classes.selected:""].join(" ")} >
                <p className={classes.animationFlexContainerTop}>
                    {
                        pathname.split("").map((p, index) => (
                            <span key={index}
                               className={[classes.animationFlexContainerTop__item, selected?"":classes["animationFlexContainerTop__item--hover"]].join(" ")}
                               // style={{transitionDelay: `${(index+1) * 0.02}s `}}
                            >{p.toUpperCase()}</span>
                        ))
                    }
                </p>
                <p className={classes.animationFlexContainerBottom}>
                    {
                        pathname.split("").map((p, index) => (
                            <span key={index}
                               className={[classes.animationFlexContainerBottom__item, selected?"":classes["animationFlexContainerBottom__item--hover"]].join(" ")}
                               // style={{transitionDelay: `${index * 0.02}s`}}
                            >{p.toUpperCase()}</span>
                        ))
                    }
                </p>
            </div>
        </Link>
    )
}

export default HoverAnimationLink;