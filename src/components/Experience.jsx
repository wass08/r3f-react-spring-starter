import { ContactShadows, OrbitControls } from "@react-three/drei";

import { Carousel } from "./Carousel";

export const Experience = () => {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 20, 20]} intensity={1} />

      <Carousel />
      <ContactShadows scale={30} opacity={0.32} />
    </>
  );
};
