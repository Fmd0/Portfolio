import HoverAnimationLink from "./HoverAnimationLink/HoverAnimationLink.tsx";
import LinkPageAnimation from "./LinkPageAnimation.tsx";

const NavBar = () => {
    return (
        <nav className="text-white fixed z-50 left-4 right-4 top-4 flex items-center justify-between tracking-[1px]">
            <LinkPageAnimation to="./">
                <span className="text-5xl">C</span>
            </LinkPageAnimation>
            <ul className="flex items-center justify-between gap-5">
                {/*<li><HoverAnimationLink pathname="about" textName="about" /></li>*/}
                <li><HoverAnimationLink pathname="projects" textName="projects" /></li>
                <li><HoverAnimationLink pathname="contact" textName="contact"/></li>
            </ul>
        </nav>
    )
}

export default NavBar;