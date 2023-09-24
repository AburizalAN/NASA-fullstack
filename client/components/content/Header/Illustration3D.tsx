import * as React from "react";
import { Model } from "@/components/Desk";
import { Canvas } from '@react-three/fiber';
import { useControls } from "leva";
import * as THREE from "three";
import { OrbitControls, useHelper } from '@react-three/drei'

const Illustration3D = () => {
  return (
    <Canvas shadows camera={{ position: [3, 1.2, -1.4] }}>
      <Lights />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Model receiveShadow position={new THREE.Vector3(0, -0.4, 0)} />
      <axesHelper args={[3]} />
      <OrbitControls />
    </Canvas>
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
    intensity: { value: 3, min: 1, max: 5 }
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
    intensity: { value: 3, min: 1, max: 5 },
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
        ref={directionalLightRef}
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
    </>
  )
}

export default Illustration3D;