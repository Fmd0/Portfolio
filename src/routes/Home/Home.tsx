import classes from "./Home.module.scss";
import HoverAnimationLink from "../../components/HoverAnimationLink/HoverAnimationLink.tsx";
import HomeCanvas from "../../3D/home/HomeCanvas.tsx";

const Home = () => {
    return (
        <div className={classes["container"]}>
            <HomeCanvas />
            <p className={classes["container__header"]}>Hi, I'm Chen Nan</p>
            <p className={classes["container__text"]}>
                I'm a skilled fullstack developer with experience in React, Next.js, express, and Three.js.
                It’s a genuine passion for technology and an endless curiosity that have brought me to where I am
                today.
            </p>
            <div className={classes['container__straightLine']}></div>
            <div className="relative bottom-8">
                <HoverAnimationLink pathname='projects' textName="VIEW MY WORK"/>
            </div>
        </div>
    )
}

export default Home;