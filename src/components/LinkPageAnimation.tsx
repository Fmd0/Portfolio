import {Link} from "react-router-dom";
import {IS_PAGE_ANIMATION} from "../utils/constants.ts";

const LinkPageAnimation = ({to, children, className, onClick}: {
    to: string,
    children: React.ReactNode,
    className?: string,
    onClick?: () => void,
}) => {

    const handleClick = (e: React.MouseEvent) => {
        if(IS_PAGE_ANIMATION) {
            e.preventDefault();
        }
        else {
            if(onClick) {
                onClick();
            }
        }
    }

    return (
        <Link to={to} onClick={handleClick} className={className||""}>
            {children}
        </Link>
    )
}

export default LinkPageAnimation;