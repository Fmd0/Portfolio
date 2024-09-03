import {Link} from "react-router-dom";

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
            <div className={`relative font-[Mnn] text-[11px] pb-[1px]  group/HoverAnimationLink duration-[350ms] border-b-[1px] ${selected?"border-white":"border-transparent"}`}>
                <p className="absolute flex flex-row items-center">
                    {
                        pathname.split("").map((p, index) => (
                            <p key={index}
                               className={`will-change-transform delay-150 transform-gpu ease-[cubic-bezier(0.19,1,0.22,1)] -translate-y-4 duration-[600ms] opacity-0 ${selected?"":"group-hover/HoverAnimationLink:-translate-y-0 group-hover/HoverAnimationLink:opacity-100"}`}
                               style={{transitionDelay: `${index * 0.02}s `}}
                            >{p.toUpperCase()}</p>
                        ))
                    }
                </p>
                <p className="flex flex-row items-center">
                    {
                        pathname.split("").map((p, index) => (
                            <p key={index}
                               className={`will-change-transform delay-150 transform-gpu ease-[cubic-bezier(0.19,1,0.22,1)] translate-x-0 translate-y-0 opacity-100 duration-[600ms] ${selected?"":"group-hover/HoverAnimationLink:translate-y-4 group-hover/HoverAnimationLink:opacity-0"}`}
                               style={{transitionDelay: `${index * 0.02}s`}}
                            >{p.toUpperCase()}</p>
                        ))
                    }
                </p>
            </div>
        </Link>
    )
}

export default HoverAnimationLink;