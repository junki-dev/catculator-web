import { RenderTexture, PerspectiveCamera, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

export default function Cube() {
  const textRef = useRef<Mesh>(null!);
  useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2));
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map" anisotropy={16}>
          <PerspectiveCamera makeDefault manual aspect={3 / 1} position={[0, 0, 5]} />
          <color attach="background" args={['orange']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <Text ref={textRef} fontSize={2} color="#555">
            CATCULATOR
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}
