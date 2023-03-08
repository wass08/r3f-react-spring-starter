import Bear from "./Bear";
import Dog from "./Dog";
import Duck from "./Duck";

const ANIMAL_SCALE = 1.36;
const ANIMAL_SCALE_GROW = 2;

const bearPositionY = 0.25;
const bearScale = ANIMAL_SCALE;
const bearPodiumRotation = 0;
const bearPodiumScale = 0.5;
const bearPodiumColor = "#906efa";

const dogPositionY = 0.25;
const dogScale = ANIMAL_SCALE;
const dogPodiumRotation = 0;
const dogPodiumScale = 0.5;
const dogPodiumColor = "#906efa";

const duckPositionY = 0.25;
const duckScale = ANIMAL_SCALE;
const duckPodiumRotation = 0;
const duckPodiumScale = 0.5;
const duckPodiumColor = "#906efa";

export const Podium = (props) => {
  return (
    <group {...props}>
      <group
        position-y={bearPositionY}
        scale-x={bearScale}
        scale-y={bearScale}
        scale-z={bearScale}
      >
        <Bear />
      </group>
      <mesh scale-y={bearPodiumScale} rotation-y={bearPodiumRotation}>
        <boxBufferGeometry />
        <meshStandardMaterial color={bearPodiumColor} />
      </mesh>

      <group position={[3, 0, 0]}>
        <group
          position-y={dogPositionY}
          scale-x={dogScale}
          scale-y={dogScale}
          scale-z={dogScale}
        >
          <Dog />
        </group>
        <mesh scale-y={dogPodiumScale} rotation-y={dogPodiumRotation}>
          <boxBufferGeometry />
          <meshStandardMaterial color={dogPodiumColor} />
        </mesh>
      </group>
      <group position={[6, 0, 0]}>
        <group
          position-y={duckPositionY}
          scale-x={duckScale}
          scale-y={duckScale}
          scale-z={duckScale}
        >
          <Duck />
        </group>
        <mesh scale-y={duckPodiumScale} rotation-y={duckPodiumRotation}>
          <boxBufferGeometry />
          <meshStandardMaterial color={duckPodiumColor} />
        </mesh>
      </group>
    </group>
  );
};
