import {Canvas} from '@react-three/fiber'
import ContactCanvasConfig from "./ContactCanvasConfig.tsx";

const ContactCanvas = () => {
    return (
        <div className="absolute z-[-1] inset-0 w-screen h-screen">
            <Canvas shadows={true}
                    camera={{
                        position: [-7.25,12.1,41],
                        fov: 75,
                        aspect: window.innerWidth / window.innerHeight,
                        near: 0.1,
                        far: 1000
                    }}
            >
                <ambientLight color={0xffffff} intensity={1}  />
                <directionalLight color={0xFFFFFF} intensity={2} position={[100, 100, 100]} castShadow={true}
                                  shadow-camera-left={-100}
                                  shadow-camera-right={100}
                                  shadow-camera-top={100}
                                  shadow-camera-bottom={-100}
                                  shadow-camera-near={1}
                                  shadow-camera-far={300}
                                  shadow-mapSize-width={1024 / 2}
                                  shadow-mapSize-height={1024 / 4}
                />
                <ContactCanvasConfig />
            </Canvas>

        </div>
    )
}

export default ContactCanvas;