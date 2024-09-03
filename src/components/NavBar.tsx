import {Link} from "react-router-dom";
import HoverAnimationLink from "./HoverAnimationLink.tsx";

const NavBar = () => {
    return (
        <nav className="text-white fixed z-50 left-4 right-4 top-4 flex items-center justify-between tracking-[1px]">
            <Link to="./" className="text-5xl">C</Link>
            <ul className="flex items-center justify-between gap-5">
                <li><HoverAnimationLink pathname="about"/></li>
                <li><HoverAnimationLink pathname="projects"/></li>
                <li><HoverAnimationLink pathname="contact"/></li>
            </ul>
        </nav>
    )
}

export default NavBar;