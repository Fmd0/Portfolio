import classes from "./Contact.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Contact = () => {
    return (
        <div className={classes['container']}>
            <div className={classes['container__top']}>
                <p className={classes['container__top__firstLine']}>LET'S</p>
                <p className={classes['container__top__secondLine']}>play together</p>
            </div>
            <div className={classes['container__bottom']}>
                <p className={classes['container__paragraph']}>HandZhou City. ZheJiang Province. China</p>
                <p className={classes['container__paragraph']}>email: cen369777@163.com</p>
                <p className={classes['container__paragraph']}>Hope to join you</p>
                <div className={classes['container__bottom__iconList']}>
                    <FaGithub size={20} color="white"/>
                    <FaLinkedin size={20} color="white" />
                </div>
            </div>
        </div>
    )
}

export default Contact;