import { Html } from "@react-three/drei";
import "./EarthCard.css";
import { a } from "@react-spring/three";

const EarthCard = () => {
  return (
    <a.mesh position={[3, 0, 0]}>
      <planeGeometry args={[1.5, 1]} />
      <meshStandardMaterial />
      <Html
        transform
        position={[0, 0, 0.1]}>
        <div className='card'>
          <h3>Info Card</h3>
          <p>Drag me around!</p>
        </div>
      </Html>
    </a.mesh>
  );
};

export default EarthCard;
