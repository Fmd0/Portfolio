import NavBar from "./NavBar.tsx";
import {useOutlet} from "react-router-dom";
import PageAnimationTransition from "./PageAnimationTransition.tsx";

const Layout = () => {
    const currentOutlet = useOutlet();
    return (
        <PageAnimationTransition>
            <NavBar />
            {currentOutlet}
        </PageAnimationTransition>
    )
}

export default Layout;