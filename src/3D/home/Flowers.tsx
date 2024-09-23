import * as THREE from 'three';
import {Colors, IS_HOME_CANVAS_ANIMATION} from "../../utils/constants.ts";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

const redPetalMaterial = new THREE.MeshPhongMaterial({
    color: Colors.red,
    flatShading: true,
})

const yellowPetalMaterial = new THREE.MeshPhongMaterial({
    color: Colors.yellow,
    flatShading: true,
})

const bluePetalMaterial = new THREE.MeshPhongMaterial({
    color: Colors.blue,
    flatShading: true,
})

const flowerStemMaterial = new THREE.MeshPhongMaterial({
    color: Colors.green,
    flatShading: true,
})

const flowerCoreMaterial = new THREE.MeshPhongMaterial({
    color: Colors.yellow,
    flatShading: true,
})

const petalMaterials = [redPetalMaterial, yellowPetalMaterial, bluePetalMaterial];

const coreWidth = 10;
const coreHeight = 10;
const coreDepth = 10;

const stemWidth = 5;
const stemHeight = 50;
const stemDepth = 5;

const petalWidth = 10;
const petalHeight = 14;
const petalDepth = 3;
const petalTranslate = 3;

const flowerCoreGeometry = new THREE.BoxGeometry(coreWidth, coreHeight, coreDepth);
const flowerStemGeometry = new THREE.BoxGeometry(stemWidth, stemHeight, stemDepth);

const petalGeometry = new THREE.BoxGeometry(petalWidth, petalHeight, petalDepth);
const petalGeometryAttributesPosition = petalGeometry.attributes.position;


[0, 11, 17].forEach(index => {
    petalGeometryAttributesPosition.setX(index, petalGeometryAttributesPosition.getX(index)+petalTranslate);
});

[1, 9, 20].forEach(index => {
    petalGeometryAttributesPosition.setX(index, petalGeometryAttributesPosition.getX(index)+petalTranslate);
});

[5, 10, 16].forEach(index => {
    petalGeometryAttributesPosition.setX(index, petalGeometryAttributesPosition.getX(index)-petalTranslate);
});

[4, 8, 21].forEach(index => {
    petalGeometryAttributesPosition.setX(index, petalGeometryAttributesPosition.getX(index)-petalTranslate);
});

const flowerXAmount = 50;
const flowerYAmount = 4;
const dividedAngle = 2*Math.PI / flowerXAmount;

const randomAngleArray = Array.from({ length: flowerXAmount }, (_, i) => {
    return Array.from({ length: flowerYAmount }, () => dividedAngle*i + Math.random()*dividedAngle);
});

const randomZIndexArray = Array.from({ length: flowerXAmount }, () => {
    return Array.from({ length: flowerYAmount }, () => (Math.random()-0.6)*500);
});

const randomScaleArray = Array.from({ length: flowerXAmount }, () => {
    return Array.from({ length: flowerYAmount }, () => Math.random()*0.2+0.2);
});


const Flower = ({petalIndex, position, rotation, scale}: {
    petalIndex: number;
    position: number[];
    rotation: number[];
    scale: number[];
}) => {
    return (
        <group position={position} rotation={rotation} scale={scale}>
            <mesh material={flowerStemMaterial} geometry={flowerStemGeometry} castShadow={true}
                  receiveShadow={true}></mesh>
            <mesh material={flowerCoreMaterial} geometry={flowerCoreGeometry} castShadow={true}
                  receiveShadow={true} position={[0, stemHeight/2-coreHeight/2, 0]}></mesh>
            <group position={[0, stemHeight/2-coreHeight/2, stemDepth]}>
                {
                    Array.from({length: 4}).map((_, index) => {
                        switch (index) {
                            case 0: return (
                                <mesh key={index} material={petalMaterials[petalIndex]} geometry={petalGeometry} castShadow={true}
                                      receiveShadow={true} rotation={[0, 0, -Math.PI / 2 * index]}
                                      position={[0, coreHeight/2+petalHeight/2, 0]}></mesh>
                            )
                            case 1: return (
                                <mesh key={index} material={petalMaterials[petalIndex]} geometry={petalGeometry} castShadow={true}
                                      receiveShadow={true} rotation={[0, 0, -Math.PI / 2 * index]}
                                      position={[coreHeight/2+petalHeight/2, 0, 0]}></mesh>
                            )
                            case 2: return (
                                <mesh key={index} material={petalMaterials[petalIndex]} geometry={petalGeometry} castShadow={true}
                                      receiveShadow={true} rotation={[0, 0, -Math.PI / 2 * index]}
                                      position={[0, -coreHeight/2-petalHeight/2, 0]}></mesh>
                            )
                            case 3: return (
                                <mesh key={index} material={petalMaterials[petalIndex]} geometry={petalGeometry} castShadow={true}
                                      receiveShadow={true} rotation={[0, 0, -Math.PI / 2 * index]}
                                      position={[-coreHeight/2-petalHeight/2, 0, 0]}></mesh>
                            )
                        }
                    })
                }
            </group>
        </group>
    )
}

const Flowers = () => {
    const flowersRef = useRef(null);
    useFrame(() => {
        if(flowersRef.current && IS_HOME_CANVAS_ANIMATION){
            flowersRef.current.rotation.z += 0.001;
        }
    });

    return (
        <group ref={flowersRef}>
            {
                randomAngleArray.map((randomAngleFirstLayer, firstIndex) => {
                    return randomAngleFirstLayer.map((randomAngle, secondIndex) => {
                        const randomScale = randomScaleArray[firstIndex][secondIndex];
                        return (
                            <Flower key={secondIndex}
                                    petalIndex={Math.floor(Math.random()*petalMaterials.length)}
                                    position={[
                                        620*Math.sin(randomAngle) - Math.sin(randomAngle)*15,
                                        620*Math.cos(randomAngle) - Math.cos(randomAngle)*15,
                                        randomZIndexArray[firstIndex][secondIndex]
                                    ]}
                                    scale={[randomScale, randomScale, randomScale]}
                                    rotation={[0, 0, -randomAngle]}

                            />
                        )
                    })
                })
            }
        </group>
    )
}

export default Flowers;