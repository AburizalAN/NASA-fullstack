import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane003_1: THREE.Mesh;
    Plane003_2: THREE.Mesh;
    Plane003_3: THREE.Mesh;
    Circle: THREE.Mesh;
    Plane017: THREE.Mesh;
    Plane019_1: THREE.Mesh;
    Plane019_2: THREE.Mesh;
    Plane019_3: THREE.Mesh;
    Plane019_4: THREE.Mesh;
    Cube004: THREE.Mesh;
    Plane003: THREE.Mesh;
    Plane004: THREE.Mesh;
    Plane006: THREE.Mesh;
    Plane007: THREE.Mesh;
    Vert001_1: THREE.Mesh;
    Vert001_2: THREE.Mesh;
    Circle001: THREE.Mesh;
    Circle002: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane008: THREE.Mesh;
    Plane009: THREE.Mesh;
    Sphere_1: THREE.Mesh;
    Sphere_2: THREE.Mesh;
    Sphere_3: THREE.Mesh;
    Plane012: THREE.Mesh;
    Plane012_1: THREE.Mesh;
    Plane012_2: THREE.Mesh;
    Plane013_1: THREE.Mesh;
    Plane013_2: THREE.Mesh;
    Plane013: THREE.Mesh;
    Plane014: THREE.Mesh;
    Text: THREE.Mesh;
    Sphere001: THREE.Mesh;
  };
  materials: {
    wood: THREE.MeshStandardMaterial;
    monitor: THREE.MeshStandardMaterial;
    screen: THREE.MeshStandardMaterial;
    ["monitor 2"]: THREE.MeshStandardMaterial;
    ["monitor 2"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    white: THREE.MeshStandardMaterial;
    gray: THREE.MeshStandardMaterial;
    orange: THREE.MeshStandardMaterial;
    red: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/desk.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.monitor}
        position={[-0.523, 0.142, -0.034]}
        scale={1.04}
      >
        <group position={[0.059, 0.816, 0]} rotation={[0, 0, 0.08]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_1.geometry}
            material={materials.monitor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_2.geometry}
            material={materials.screen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_3.geometry}
            material={materials["monitor 2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials["monitor 2"]}
            position={[0.022, -0.49, 0.003]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.049}
          />
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials["Material.003"]}
        position={[0.325, 0.086, 0.034]}
        scale={0.796}
      >
        <group position={[0, 0.07, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_1.geometry}
            material={materials.white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_2.geometry}
            material={materials.gray}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_3.geometry}
            material={materials.orange}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_4.geometry}
            material={materials.red}
          />
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.monitor}
        position={[0.364, 0.086, -0.835]}
        scale={0.84}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["monitor 2"]}
        position={[-0.125, 0.228, -1.414]}
        rotation={[0, 1.468, -0.038]}
        scale={0.808}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.white}
          position={[0.054, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials["Material.004"]}
        position={[-0.125, 0.405, -1.414]}
        rotation={[Math.PI, 1.084, 3.104]}
        scale={0.808}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials.white}
          position={[0.054, 0, 0]}
        />
      </mesh>
      <group
        position={[-0.509, 0.162, 1.397]}
        rotation={[-Math.PI, 1.175, -Math.PI]}
        scale={0.923}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert001_1.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert001_2.geometry}
          material={materials.green}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials["Material.004"]}
        position={[0.146, 0.142, 1.437]}
        scale={1.042}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials["Material.007"]}
        position={[0.146, 0.12, 1.437]}
        scale={1.252}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["monitor 2"]}
        position={[0.146, 0.061, 1.437]}
        scale={1.523}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.007"]}
          position={[0, -0.096, 0]}
          scale={1.198}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials["monitor 2"]}
          position={[0, 0.484, 0]}
          rotation={[2.376, 0.33, 0.039]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials["Material.004"]}
            position={[0.01, -0.377, -0.029]}
            rotation={[-1.544, 0.03, -0.331]}
            scale={1.045}
          />
        </mesh>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Material.001"]}
        position={[-0.382, 1.696, -1.019]}
        rotation={[0, 0, -1.491]}
        scale={0.913}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials["Material.008"]}
        position={[-0.314, 1.506, -1.58]}
        rotation={[-0.013, 0.002, 0.083]}
        scale={0.913}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials.white}
        position={[-0.382, 1.696, -1.019]}
        rotation={[0, 0, -1.491]}
        scale={0.913}
      />
      <group position={[-0.397, 2.049, -0.428]} scale={0.039}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_2.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_3.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group
        position={[-0.407, 1.872, -0.464]}
        rotation={[0, 0, -1.494]}
        scale={0.052}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_1.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_2.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group
        position={[-0.104, 0.603, -1.002]}
        rotation={[0.81, 0.085, -1.47]}
        scale={1.604}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_1.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials["Material.005"]}
        position={[0.128, 0.373, -1.529]}
        rotation={[0, 0.53, -0.489]}
        scale={0.533}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["Material.004"]}
        position={[0.144, 0.163, -1.43]}
        rotation={[0, 0.02, -0.489]}
        scale={0.533}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.008"]}
        position={[-0.481, 1.852, 1.547]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.289}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials["Material.009"]}
        position={[0.167, 1.06, 0.876]}
        scale={0.114}
      />
    </group>
  );
}

useGLTF.preload("/desk.glb");