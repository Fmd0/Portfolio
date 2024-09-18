import {useThree} from "@react-three/fiber";
import * as THREE from "three";
import {useEffect} from "react";


const HomeCanvasConfig = () => {

    const {camera, scene, gl} = useThree();
    camera.lookAt(0, 750, 0);
    scene.fog = new THREE.Fog(0xc0c0c0, 50, 1000);
    gl.setClearColor(0xc0c0c0, 1);
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(window.innerWidth, window.innerHeight);
    gl.shadowMap.enabled = true;

    useEffect(() => {

    }, [])

    return (
        <></>
    )
}

export default HomeCanvasConfig;