import {Link} from "react-router-dom";
import {IS_PAGE_ANIMATION} from "../utils/constants.ts";

const LinkPageAnimation = ({to, children}: {
    to: string,
    children: React.ReactNode
}) => {

    const handleClick = (e: React.MouseEvent) => {
        if(IS_PAGE_ANIMATION) {
            e.preventDefault();
        }
    }

    return (
        <Link to={to} onClick={handleClick}>
            {children}
        </Link>
    )
}

export default LinkPageAnimation;