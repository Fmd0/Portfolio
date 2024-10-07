import {Link} from "react-router-dom";
import {IS_PAGE_ANIMATION} from "../utils/constants.ts";
import {forwardRef} from "react";

const LinkPageAnimation = forwardRef(({to, children, className, onClick}: {
    to: string,
    children: React.ReactNode,
    className?: string,
    onClick?: () => void,
}, ref) => {

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
        <Link to={to} onClick={handleClick} className={className||""} ref={ref}
              onPointerDown={e => e.stopPropagation()}
              onPointerMove={e => e.stopPropagation()}
              onPointerUp={e => e.stopPropagation()}
        >
            {children}
        </Link>
    )
});

export default LinkPageAnimation;