import * as THREE from "three";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {IS_HOME_CANVAS_ANIMATION} from "../../utils/constants.ts";



const cloudGeometry = new THREE.BoxGeometry(60, 60, 60);
const cloudMaterial = new THREE.MeshPhongMaterial({
    color: 'white',
})

const rotationArray = [];
let randomRotation = 0;
for (let i = 0; i < Math.PI*2-Math.PI/10; i+=randomRotation) {
    randomRotation = Math.PI/10 + Math.random()*Math.PI/12;
    rotationArray.push(i);
}


const Cloud = ({rotation}: {
    rotation: number[],
}) => {
    const cloudHeight = Math.random()*400+800;
    const cloudDepth = -200-Math.random()*200;

    return (
        <group rotation={rotation}>
            {
                Array.from({length: 5}).map((_, index) => {
                    const cloudSize = Math.random();
                    return (
                        <mesh key={index}
                              material={cloudMaterial}
                              geometry={cloudGeometry}
                              rotation={[Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2,]}
                              position={[index * 40, cloudHeight, cloudDepth]}
                              scale={[cloudSize, cloudSize, cloudSize]}
                        />
                    )
                })
            }
        </group>
    )
}

const Sky = () => {
    const skyRef = useRef(null);
    useFrame(() => {
        if(skyRef.current && IS_HOME_CANVAS_ANIMATION){
            skyRef.current.rotation.z += 0.001;
        }
    });

    return (
        <group ref={skyRef}>
            {
                rotationArray.map((rotation, index) => (
                    <Cloud key={index} rotation={[0, 0, rotation]} />
                ))
            }
        </group>
    )
}

export default Sky;