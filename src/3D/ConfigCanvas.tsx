import {useThree} from "@react-three/fiber";
import * as THREE from "three";


const ConfigCanvas = () => {

    const {camera, scene, gl} = useThree();
    camera.lookAt(0, 750, 0);
    scene.fog = new THREE.Fog(0xc0c0c0, 150, 1000);
    gl.setClearColor(0xc0c0c0, 1);
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(window.innerWidth, window.innerHeight);
    gl.shadowMap.enabled = true;

    return (
        <></>
    )
}

export default ConfigCanvas;