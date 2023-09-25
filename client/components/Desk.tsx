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
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.monitor}
        position={[0.034, 0.142, -0.523]}
        rotation={[0, -Math.PI / 2, 0]}
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
        position={[-0.034, 0.086, 0.325]}
        rotation={[0, -Math.PI / 2, 0]}
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
        position={[0.835, 0.086, 0.364]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.84}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["monitor 2"]}
        position={[1.414, 0.228, -0.125]}
        rotation={[0, -0.103, -0.038]}
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
        position={[1.414, 0.405, -0.125]}
        rotation={[0, 0.487, -0.038]}
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
        position={[-1.397, 0.162, -0.509]}
        rotation={[0, 0.396, 0]}
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
        position={[-1.437, 0.142, 0.146]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.042}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials["Material.007"]}
        position={[-1.437, 0.12, 0.146]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.252}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["monitor 2"]}
        position={[-1.437, 0.061, 0.146]}
        rotation={[0, -Math.PI / 2, 0]}
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
        position={[1.019, 1.696, -0.382]}
        rotation={[1.491, -Math.PI / 2, 0]}
        scale={0.913}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials["Material.008"]}
        position={[1.58, 1.506, -0.314]}
        rotation={[-1.387, -1.557, -1.304]}
        scale={0.913}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials.white}
        position={[1.019, 1.696, -0.382]}
        rotation={[1.491, -Math.PI / 2, 0]}
        scale={0.913}
      />
      <group
        position={[0.428, 2.049, -0.397]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.039}
      >
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
        position={[0.464, 1.872, -0.407]}
        rotation={[1.494, -Math.PI / 2, 0]}
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
        position={[1.002, 0.603, -0.104]}
        rotation={[1.453, -0.757, 0.02]}
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
        position={[1.529, 0.373, 0.128]}
        rotation={[0, -1.041, -0.489]}
        scale={0.533}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["Material.004"]}
        position={[1.43, 0.163, 0.144]}
        rotation={[0, -1.551, -0.489]}
        scale={0.533}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.008"]}
        position={[-1.547, 1.852, -0.481]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.289}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials["Material.009"]}
        position={[-0.876, 1.06, 0.167]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.114}
      />
    </group>
  );
}

useGLTF.preload("/desk.glb");