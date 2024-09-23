import * as THREE from 'three';
import {Colors, IS_HOME_CANVAS_ANIMATION} from "../../utils/constants.ts";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

const treeXAmount = 50;
const treeYAmount = 7;
const dividedAngle = 2*Math.PI / treeXAmount;

const randomAngleArray = Array.from({ length: treeXAmount }, (_, i) => {
    return Array.from({ length: treeYAmount }, () => dividedAngle*i + Math.random()*dividedAngle);
});

const randomZIndexArray = Array.from({ length: treeXAmount }, () => {
    return Array.from({ length: treeYAmount }, () => (Math.random()-0.6)*600);
});

const randomScaleArray = Array.from({ length: treeXAmount }, () => {
    return Array.from({ length: treeYAmount }, () => Math.random()*0.5+0.5);
});

const treeLeaveMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green,
    flatShading: true
})
const treeTrunkMaterial = new THREE.MeshPhongMaterial({
    color: Colors.brown,
    flatShading: true
})
const treeLeaveGeometry = new THREE.CylinderGeometry(1, 12*3, 12*3, 4);
const treeTrunkGeometry = new THREE.BoxGeometry(10, 20, 10);


const Tree = ({scale, position, rotation}: {
    scale: number[],
    position: number[],
    rotation: number[]
}) => {
    return (
        <group scale={scale} position={position} rotation={rotation} castShadow={true} receiveShadow={true}>
            <mesh material={treeTrunkMaterial} geometry={treeTrunkGeometry} castShadow={true} receiveShadow={true}/>
            <mesh material={treeLeaveMaterial} geometry={treeLeaveGeometry} castShadow={true} receiveShadow={true}
                  position={[0, 20, 0]}/>
            <mesh material={treeLeaveMaterial} geometry={treeLeaveGeometry} castShadow={true} receiveShadow={true}
                  position={[0, 40, 0]} scale={[0.75, 0.75, 0.75]}/>
            <mesh material={treeLeaveMaterial} geometry={treeLeaveGeometry} castShadow={true} receiveShadow={true}
                  position={[0, 55, 0]} scale={[0.5, 0.5, 0.5]}/>
        </group>
    )
}

const Forest = () => {
    const forestRef = useRef(null);
    useFrame(() => {
        if(forestRef.current && IS_HOME_CANVAS_ANIMATION){
            forestRef.current.rotation.z += 0.001;
        }
    });
    return (
        <group ref={forestRef}>
            {
                randomAngleArray.map((randomAngleFirstItem, firstIndex) => {
                    return randomAngleFirstItem.map((randomAngle, secondIndex) => {
                        const randomScale = randomScaleArray[firstIndex][secondIndex];
                        return (
                            <Tree key={secondIndex}
                                  scale={[randomScale, randomScale, randomScale]}
                                  position={[
                                      610*Math.sin(randomAngle) - Math.sin(randomAngle)*6,
                                      610*Math.cos(randomAngle) - Math.cos(randomAngle)*6,
                                      randomZIndexArray[firstIndex][secondIndex]
                                  ]}
                                  rotation={[0, 0, -randomAngle]}
                            />
                        )
                    })
                })
            }
        </group>
    )
}

export default Forest;