import {Canvas} from '@react-three/fiber'
import Land from "./Land.tsx";
import Forest from "./Forest.tsx";
import HomeCanvasConfig from "./HomeCanvasConfig.tsx";
import Sky from "./Sky.tsx";

const HomeCanvas = () => {
    return (
        <div className="absolute z-[-1] inset-0 w-screen h-screen">
            <Canvas shadows={true}
                    camera={{
                        position: [0, 770, 400],
                        fov: 75,
                        aspect: window.innerWidth / window.innerHeight,
                        near: 0.1,
                        far: 1000
                    }}
            >
                <HomeCanvasConfig />
                <hemisphereLight skyColor={0xFFFFFF}  groundColor={0x888888} intensity={0.5}  />
                <directionalLight color={0xFFFFFF} intensity={1.25} position={[400, 800, 800]} castShadow={true}
                                  shadow-camera-left={-1000}
                                  shadow-camera-right={1000}
                                  shadow-camera-top={1000}
                                  shadow-camera-bottom={-1000}
                                  shadow-camera-far={1200}
                                  shadow-camera-near={400}
                                  shadow-mapSize-width={1024 * 4}
                                  shadow-mapSize-height={1024 * 4}
                />
                <Land />
                <Sky />
                <Forest />
            </Canvas>

        </div>
    )
}

export default HomeCanvas;