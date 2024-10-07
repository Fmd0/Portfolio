import classes from "./Contact.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactCanvas from "../../3D/contact/ContactCanvas.tsx";


const Contact = () => {
    return (
        <div className={classes['container']}>
            <ContactCanvas />
            <div className={classes['container__top']}>
                <p className={classes['container__top__firstLine']}>LET'S</p>
                <p className={classes['container__top__secondLine']}>play together</p>
            </div>
            <div className={classes['container__bottom']}>
                <p className={classes['container__paragraph']}>HandZhou City. ZheJiang Province. China</p>
                <a href="mailto:cen369777@gmail.com">
                    <p className={classes['container__paragraph'] + " cursor-pointer duration-500 hover:text-[#ffc856]"}>email:
                        cen369777@gmail.com</p>
                </a>
                <p className={classes['container__paragraph']}>Hope to join you</p>
                <div className={classes['container__bottom__iconList']}>
                    <a href="https://github.com/Fmd0" target="_blank" className="cursor-pointer">
                        <FaGithub className={classes['container__bottom__icon']}/>
                    </a>
                    <a href="https://www.linkedin.com/in/%E4%BA%91%E4%BA%91-%E5%A4%A9-7a9969284/" target="_blank" className="cursor-pointer">
                        <FaLinkedin className={classes['container__bottom__icon']}/>
                    </a>
                </div>
            </div>
        </div>
)
}

export default Contact;