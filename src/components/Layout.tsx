import NavBar from "./NavBar.tsx";
import {useOutlet} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {createRef} from "react";

const nodeRefMap =  {
    "/": createRef(),
    "/contact": createRef(),
    "/projects": createRef(),
}

const Layout = () => {
    const currentOutlet = useOutlet();
    return (
        <div>
            <NavBar />
            <TransitionGroup>
                <CSSTransition key={location.pathname} nodeRef={nodeRefMap[location.pathname]} classNames="pages" timeout={3000}>
                    <div ref={nodeRefMap[location.pathname]}>
                        {currentOutlet}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default Layout;