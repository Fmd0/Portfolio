import {useFrame, useThree} from "@react-three/fiber";
import * as THREE from "three";
import {useEffect, useRef} from "react";
import {randomImpulse, randomPosition3D} from "../../utils/random.ts";
import CANNON from 'cannon'
import {Ball} from "./Balls.ts"
import {IS_CONTACT_CANVAS_ANIMATION} from "../../utils/constants.ts";


const planeRotationOffset = Math.PI/12;
const planeRotation = [-Math.PI/2+planeRotationOffset, planeRotationOffset, 0];
const world = new CANNON.World();
world.gravity.set(0, -10, 0);
const defaultMaterial = new CANNON.Material('default');
const defaultContactMaterial = new CANNON.ContactMaterial(
    defaultMaterial,
    defaultMaterial,
    {
        friction: 0,
        restitution: 0.9
    }
);
world.defaultContactMaterial = defaultContactMaterial;
const planeBody = new CANNON.Body({
    mass: 0,
    shape: new CANNON.Plane(),
})
planeBody.quaternion.setFromEuler(...planeRotation);
world.addBody(planeBody);
let ballList = [];

let oldElapsedTime = 0;
const clock = new THREE.Clock();

const HomeCanvasConfig = () => {

    const {camera, scene, gl} = useThree();
    camera.position.set(-7.25,12.1,41);
    scene.fog = new THREE.Fog(0xCB4B8B, 0, 80);
    gl.setClearColor(0xCB4B8B, 1);
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(window.innerWidth, window.innerHeight);
    gl.shadowMap.enabled = true;
    const initialized = useRef(false);
    useFrame(() => {
            const elapsedTime = clock.getElapsedTime();
            const deltaTime = elapsedTime-oldElapsedTime;
            oldElapsedTime = elapsedTime;
            if(IS_CONTACT_CANVAS_ANIMATION) {
                world.step(1/60, deltaTime, 3);
                ballList = ballList.filter(({mesh, body}) => {
                    if(mesh.position.x > 100 || mesh.position.z > 100) {
                        scene.remove(mesh);
                        world.removeBody(body);
                        return false;
                    }
                    return true;
                })
                ballList.forEach(({mesh, body}) => {
                    mesh.position.copy(body.position);
                    mesh.quaternion.copy(body.quaternion);
                })
            }
    })

    useEffect(() => {
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            gl.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if(!initialized.current) {
            initialized.current = true;

            const plane = new THREE.Mesh(
                new THREE.PlaneGeometry(200, 200, 1),
                new THREE.MeshToonMaterial({
                    color: 0xCB4B8B,
                    opacity: 0.5,
                })
            )
            plane.rotation.set(...planeRotation);
            plane.receiveShadow = true;
            scene.add(plane);

            Array.from({length: 7}).map(() => {
                const position = randomPosition3D(80);
                position[0] -= 40;
                position[1] += 40*0.27*1.8;
                position[2] -= 40;
                const ball = new Ball(Math.round(Math.random()), position);
                scene.add(ball.mesh);
                const ballBody = new CANNON.Body({
                    mass: 1,
                    position: {x:position[0], y:position[1], z: position[2]},
                    shape: new CANNON.Sphere(2)
                })
                ballBody.applyLocalImpulse(
                    new CANNON.Vec3(...randomImpulse(10)),
                    {x: 0, y: 0, z: 0},
                )
                world.addBody(ballBody);
                ballList.push({
                    mesh: ball.mesh,
                    body: ballBody,
                })
            })
            Array.from({length: 7}).map(() => {
                const position = randomPosition3D(80);
                // position[0] -= 40;
                // position[1] += 40*0.27*1.3;
                // position[2] -= 20;
                const ball = new Ball(Math.round(Math.random()), position);
                scene.add(ball.mesh);
                const ballBody = new CANNON.Body({
                    mass: 1,
                    position: {x:position[0], y:position[1], z: position[2]},
                    shape: new CANNON.Sphere(2)
                })
                ballBody.applyLocalImpulse(
                    new CANNON.Vec3(...randomImpulse(10)),
                    {x: 0, y: 0, z: 0},
                )
                world.addBody(ballBody);
                ballList.push({
                    mesh: ball.mesh,
                    body: ballBody,
                })
            })
            const offset = 70;
            const addBall = () => {
                Array.from({length: 6}).map(() => {
                    const position = randomPosition3D(80);
                    position[0] -= offset;
                    position[1] += offset*0.27*1.8;
                    position[2] -= offset;
                    const ball = new Ball(Math.round(Math.random()), position);
                    scene.add(ball.mesh);
                    const ballBody = new CANNON.Body({
                        mass: 1,
                        position: {x:position[0], y:position[1], z: position[2]},
                        shape: new CANNON.Sphere(2)
                    })
                    ballBody.applyLocalImpulse(
                        new CANNON.Vec3(...randomImpulse(5)),
                        {x: 0, y: 0, z: 0},
                    )
                    world.addBody(ballBody);
                    ballList.push({
                        mesh: ball.mesh,
                        body: ballBody,
                    })
                })
            }
            setInterval(addBall, 1000)
        }
    }, []);

    return (
        <></>
    )
}

export default HomeCanvasConfig;