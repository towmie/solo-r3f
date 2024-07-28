import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import Connector from "./components/Connector";
import Cursor from "./components/Cursor";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Physics gravity={[0, 0, 0]}>
        <Perf position="top-left" />
        <OrbitControls />
        <ambientLight intensity={1} />
        <directionalLight intensity={0.5} position={[0, 10, 0]} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <Environment preset="studio" environmentIntensity={0.9} />
        <Cursor />
        {[...Array(8)].map((_, index) => (
          <Connector key={index} color="#4060ff" />
        ))}
        <Connector position={[10, 10, 5]}></Connector>
      </Physics>
    </>
  );
}

export default App;
