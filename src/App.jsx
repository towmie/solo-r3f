import {
  MeshTransmissionMaterial,
  OrbitControls,
  Plane,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { useMemo, useReducer, useRef } from "react";
import * as THREE from "three";
import Model from "./components/Model";
import Connector from "./components/Connector";
import Cursor from "./components/Cursor";

const accents = ["#4060ff", "#20ffa0", "#ff4060", "#ffcc00"];
const shuffle = (accent = 0) => [
  { color: "#444", roughness: 0.1 },
  { color: "#444", roughness: 0.75 },
  { color: "#444", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];

function App() {
  const [accent] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);

  return (
    <>
      <Physics gravity={[0, 0, 0]} debug>
        <Perf position="top-left" />
        <OrbitControls />
        <ambientLight intensity={1} />
        <directionalLight intensity={0.5} position={[0, 10, 0]} />
        <Cursor />
        {connectors.map((props, index) => {
          return <Connector key={index} {...props} />;
        })}
      </Physics>
    </>
  );
}

export default App;
