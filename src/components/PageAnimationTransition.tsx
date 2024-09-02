import {createRef, ReactNode} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useLocation} from "react-router-dom";


const nodeRefMap =  {
    "/": createRef(),
    "/contact": createRef(),
    "/projects": createRef(),
}


const PageAnimationTransition = ({children}: {children: ReactNode}) => {

    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition key={location.pathname} nodeRef={nodeRefMap[location.pathname]} classNames="pages" timeout={3000}>
                <div ref={nodeRefMap[location.pathname]}>
                    {children}
                </div>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default PageAnimationTransition;