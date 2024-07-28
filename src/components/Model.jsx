import { Loader, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

function Model({ children, color = "white", roughness = 0, ...props }) {
  const ref = useRef();
  const { nodes } = useGLTF("./models/duck.glb");

  return (
    <Suspense fallback={<Loader />}>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        scale={5}
        geometry={nodes.rubber_duck_toy.geometry}
      >
        <MeshTransmissionMaterial
          clearcoat={1}
          thickness={0.1}
          anisotropicBlur={0.1}
          chromaticAberration={0.1}
          samples={8}
          resolution={512}
          color={color}
        />

        {children}
      </mesh>
    </Suspense>
  );
}

useGLTF.preload("./models/duck.glb");

export default Model;
