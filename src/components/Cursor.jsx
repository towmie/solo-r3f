import { useFrame } from "@react-three/fiber";
import { BallCollider, RigidBody, vec3 } from "@react-three/rapier";
import { useRef } from "react";
import * as THREE from "three";

function Cursor() {
  const vec = new THREE.Vector3();
  const ref = useRef();
  useFrame(({ pointer, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      )
    );
  });
  return (
    <>
      <RigidBody
        ref={ref}
        type="kinematicPosition"
        position={[0, 0, 0]}
        colliders="false"
      >
        <BallCollider args={[1]} />
      </RigidBody>
    </>
  );
}

export default Cursor;
