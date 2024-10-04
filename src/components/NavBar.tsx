import HoverAnimationLink from "./HoverAnimationLink/HoverAnimationLink.tsx";
import LinkPageAnimation from "./LinkPageAnimation.tsx";
import {useState} from "react";

const NavBar = () => {

    const [showToggle, setShowToggle] = useState(false);

    return (
        <nav className="text-white fixed z-50 left-4 right-4 top-4 flex items-center justify-between tracking-[1px]">
            <LinkPageAnimation to="./" className="relative z-10">
                <span className="text-4xl md:text-5xl font-serif ">C</span>
            </LinkPageAnimation>
            <ul className="relative z-10 flex items-center justify-between gap-5">
                {/*<li><HoverAnimationLink pathname="about" textName="about" /></li>*/}
                <li className="hidden sm:block"><HoverAnimationLink pathname="projects" textName="projects" /></li>
                <li className="hidden sm:block"><HoverAnimationLink pathname="contact" textName="contact"/></li>
                <div className="relative cursor-pointer flex flex-col gap-[5px] sm:hidden"
                     onClick={() => setShowToggle(s => !s)}
                >
                    <div
                        className={`w-5 h-0.5 bg-white transform-gpu ease-[cubic-bezier(0.19,1,0.22,1)] ${showToggle ? "delay-150 -translate-y-[3px] opacity-0 duration-[850ms]" : "-translate-y-0 opacity-100 duration-500"}`}></div>
                    <div
                        className={`w-5 h-0.5 bg-white transform-gpu ease-[cubic-bezier(0.19,1,0.22,1)] ${showToggle ? "delay-100 -translate-y-[3px] opacity-0 duration-[850ms]" : "-translate-y-0 opacity-100 duration-500"}`}></div>
                    <div
                        className={`w-5 h-0.5 bg-white transform-gpu ease-[cubic-bezier(0.19,1,0.22,1)] ${showToggle ? "delay-[50ms] -translate-y-[3px] opacity-0 duration-[850ms]" : "-translate-y-0 opacity-100 duration-500"}`}></div>
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-0.5 bg-white transform-gpu ease-[cubic-bezier(0.19,1,0.22,1)] ${showToggle ? "delay-300 translate-y-0 opacity-100 duration-500" : "translate-y-[3px] opacity-0 duration-100]"}`}></div>
                </div>
            </ul>
            <div
                className={`fixed inset-0 w-screen h-screen font-['mnn'] text-[16px] bg-black ease-[cubic-bezier(0.19,1,0.22,1)] ${showToggle ? "opacity-100 duration-[550ms]" : "opacity-0 duration-[750ms] pointer-events-none"} flex flex-col items-center justify-center gap-12`}>
                <LinkPageAnimation to="/" onClick={() => setShowToggle(false)} className={`ease-[cubic-bezier(0.19, 1, 0.22, 1)] transform-gpu duration-1000 ${showToggle?"translate-y-0 opacity-100 delay-200":"translate-y-4 opacity-0"}`}>
                    <span>HOME</span>
                </LinkPageAnimation>
                <LinkPageAnimation to="/projects" onClick={() => setShowToggle(false)} className={`ease-[cubic-bezier(0.19, 1, 0.22, 1)] transform-gpu duration-1000 ${showToggle?"translate-y-0 opacity-100 delay-200":"translate-y-4 opacity-0"}`}>
                    <span>PROJECTS</span>
                </LinkPageAnimation>
                <LinkPageAnimation to="/contact" onClick={() => setShowToggle(false)} className={`ease-[cubic-bezier(0.19, 1, 0.22, 1)] transform-gpu duration-1000 ${showToggle?"translate-y-0 opacity-100 delay-200":"translate-y-4 opacity-0"}`}>
                    <span>CONTACT</span>
                </LinkPageAnimation>
            </div>
        </nav>
    )
}

export default NavBar;