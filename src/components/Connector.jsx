import { useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import Model from "./Model";

function Connector(props) {
  const vector = new THREE.Vector3();
  const r = THREE.MathUtils.randFloatSpread;
  const modelRef = useRef();
  const pos = useMemo(() => [r(10), r(10), r(10)], []);

  useFrame(() => {
    modelRef.current?.applyImpulse(
      vector.copy(modelRef.current.translation()).negate().multiplyScalar(0.5)
    );
  });

  return (
    <>
      <RigidBody
        ref={modelRef}
        position={pos}
        linearDamping={4}
        angularDamping={1}
        friction={0.1}
        colliders="hull"
      >
        <CuboidCollider args={[0.5, 0.7, 0.75]} />
        <Model {...props} />
      </RigidBody>
    </>
  );
}

export default Connector;
