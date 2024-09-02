import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="fixed z-50 left-4 right-4 top-4 flex items-center justify-between">
            <Link to="./" className="text-5xl">C</Link>
            <ul className="flex items-center justify-between gap-2">
                <li><Link to="./about">About</Link></li>
                <li><Link to="./projects">Projects</Link></li>
                <li><Link to="./contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;