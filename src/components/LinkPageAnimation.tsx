import {Link} from "react-router-dom";
import {IS_PAGE_ANIMATION} from "../utils/constants.ts";

const LinkPageAnimation = ({to, children, className}: {
    to: string,
    children: React.ReactNode,
    className?: string
}) => {

    const handleClick = (e: React.MouseEvent) => {
        if(IS_PAGE_ANIMATION) {
            e.preventDefault();
        }
    }

    return (
        <Link to={to} onClick={handleClick} className={className||""}>
            {children}
        </Link>
    )
}

export default LinkPageAnimation;