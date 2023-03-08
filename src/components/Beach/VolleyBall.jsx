import Duck from "../Park/Duck";
import { BeachBall } from "./BeachBall";

export const VolleyBall = (props) => {
  return (
    <group {...props}>
      <BeachBall
        scale={[0.7, 0.7, 0.7]}
        position-x={-8}
        position-y={2}
        position-z={8}
      />
      <Duck color={"yellow"} position={[-8, 0, 8]} rotation-y={Math.PI / 2} />
      <Duck color={"pink"} position={[-3, 0, 8]} rotation-y={-Math.PI / 2} />
    </group>
  );
};
