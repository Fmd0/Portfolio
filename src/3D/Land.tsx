import * as THREE from "three";
import {Colors} from "../utils/constants.ts";

const landGeometry = new THREE.CylinderGeometry(600, 600, 800);
const landMaterial = new THREE.MeshPhongMaterial({color: Colors.lightgreen})


const Land = () => {
    return (
        <mesh geometry={landGeometry} material={landMaterial} rotation={[-Math.PI / 2, 0, 0]} receiveShadow={true}/>
    )
}

export default Land;