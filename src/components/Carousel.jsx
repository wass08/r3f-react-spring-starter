import { IceCream } from "./Beach/IceCream";
import { Palm } from "./Beach/Palm";
import { VolleyBall } from "./Beach/VolleyBall";
import Burger from "./Food/Burger";
import Cannon from "./Food/Cannon";
import { HotDog } from "./Food/HotDog";
import { TargetStand } from "./Food/TargetStand";
import { BookCase } from "./Haunted/BookCase";
import { Cauldron } from "./Haunted/Cauldron";
import { Fence } from "./Haunted/Fence";
import { Witch } from "./Haunted/Witch";
import { FerrisWheel } from "./Park/FerrisWheel";
import { Podium } from "./Park/Podium";
import { ShipLight } from "./Park/ShipLight";

export const Carousel = (props) => {
  return (
    <>
      <group rotation-y={-Math.PI / 4} position-y={-0.01}>
        <group>
          <mesh position={[0, -2, 0]}>
            <meshStandardMaterial color={"white"} />
            <cylinderBufferGeometry args={[12, 12, 4, 64]} />
          </mesh>
          <mesh scale={[1, 6, 24]} position-y={3}>
            <boxBufferGeometry />
            <meshStandardMaterial color={"white"} />
          </mesh>
          <mesh scale={[24, 6, 1]} position-y={3}>
            <boxBufferGeometry />
            <meshStandardMaterial color={"white"} />
          </mesh>
          {/* PARK */}
          <>
            <Podium position={[1, 0, 10]} rotation-y={Math.PI / 2} />
            <FerrisWheel position={[6, 0, 2]} scale={[3, 3, 3]} />
            <ShipLight
              position={[5, 0.66, 6]}
              scale={[0.5, 0.5, 0.5]}
              rotation-x={-Math.PI / 16}
              rotation-y={-Math.PI}
            />
          </>
          {/* FOOD */}
          <>
            <Burger position={[3, 4, -10]} scale={[3, 3, 3]} />
            <Burger position={[3, 4, -3]} scale={[3, 3, 3]} />
            <Burger position={[10, 4, -3]} scale={[3, 3, 3]} />
            <Cannon
              position={[10, 0, -3]}
              scale={[2, 2, 2]}
              rotation-y={Math.PI / 2}
            />
            <TargetStand
              position={[2, 0, -3]}
              scale={[1, 1, 1]}
              rotation-y={Math.PI / 2}
            />
            <HotDog
              position={[4, 1, -7]}
              scale={[4, 4, 4]}
              rotation-y={-Math.PI / 8}
            />
          </>
          {/* HAUNTED */}
          <>
            <Witch
              position={[-4, 3, -5]}
              scale={[1.6, 1.6, 1.6]}
              rotation-y={Math.PI * 1.25}
            />
            <BookCase
              position={[-7, 0, -1.5]}
              scale={[2, 2, 2]}
              rotation-y={Math.PI}
            />
            <Fence
              position={[-7.5, 2, -7.5]}
              scale={[1.6, 1.6, 1.6]}
              rotation-y={Math.PI / 4}
            />
            <Cauldron position={[-2.8, 1, -8]} scale={[1.9, 1.9, 1.9]} />
          </>
          {/* BEACH */}
          <>
            <Palm scale={[3, 3, 3]} position={[-1, 0, 1]} />
            <Palm
              scale={[2.8, 2.6, 2.6]}
              position={[-7, 0, 0]}
              rotation-y={Math.PI / 6}
            />
            <VolleyBall />
            <IceCream position={[-10, 4, 3]} scale={[3, 3, 3]} />
            <IceCream position={[-8, 4, 8]} scale={[3, 3, 3]} />
            <IceCream position={[-3, 4, 10]} scale={[3, 3, 3]} />
          </>
        </group>
      </group>
    </>
  );
};
