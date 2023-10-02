import * as React from "react";
import { Model } from "@/components/content/Home/Header/Desk";
import { Canvas, useFrame } from '@react-three/fiber';
import { useControls, Leva } from "leva";
import * as THREE from "three";
import { OrbitControls, useHelper } from '@react-three/drei';

const withCanvas = <P extends object>(Component: React.ComponentType<P>) => {
  const WithCanvas = (props: P) => {
    return (
      <Canvas shadows camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 3.8] }}>
        <Component {...props} />
      </Canvas>
    )
  }
  return WithCanvas;
}

const Illustration3D = () => {
  const orbitControlsRef = React.useRef<any>(null!);

  // useFrame(() => {
  //   console.log("orbitControlsRef", orbitControlsRef.current.object.position);
  // })

  return (
    <>
      <Lights />
      <Model receiveShadow position={new THREE.Vector3(0, -1.25, 0)} />
      {/* <axesHelper args={[3]} /> */}
      <OrbitControls
        enableZoom={false}
        ref={orbitControlsRef}
        minAzimuthAngle={-0.5}
        maxAzimuthAngle={0.5}
        maxPolarAngle={2.25}
        minPolarAngle={1}
        enableDamping={true}
        dampingFactor={0.025}
        rotateSpeed={0.3}
        panSpeed={0.1}
      />
    </>
  );
}

const Lights = () => {
  const directionalLightRef = React.useRef(null!);
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "red");
  const controlAmbient = useControls('Ambient Light', {
    visible: {
      value: true,
    },
    color: {
      value: 'white',
    },
    intensity: { value: 4, min: 1, max: 5 }
  });

  const controlDirectional = useControls('Directional Light', {
    visible: {
      value: true,
    },
    color: {
      value: 'white',
    },
    position: {
      x: 1.2,
      y: 2.4,
      z: 1,
    },
    intensity: { value: 4, min: 1, max: 5 },
    scale: { value: 1, min: 1, max: 5 },
  });

  return (
    <>
      <ambientLight
        visible={controlAmbient.visible}
        color={controlAmbient.color}
        intensity={controlAmbient.intensity}
      />
      <directionalLight
        castShadow
        // ref={directionalLightRef}
        visible={controlDirectional.visible}
        color={controlDirectional.color}
        intensity={controlDirectional.intensity}
        scale={controlDirectional.scale}
        position={
          new THREE.Vector3(
            controlDirectional.position.x,
            controlDirectional.position.y,
            controlDirectional.position.z
          )
        }
      />
      <Leva hidden={true} />
    </>
  )
}

export default withCanvas(Illustration3D);