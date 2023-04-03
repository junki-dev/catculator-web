/** @jsxImportSource @emotion/react */

import { css } from '@mui/material';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mesh } from 'three';

interface DodecahedronProps {
  to: string;
  position: [number, number, number];
  scale: number;
}

export default function Dodecahedron({ to, position, scale }: DodecahedronProps) {
  const navigate = useNavigate();

  const meshRef = useRef<Mesh>(null!);
  const [hovered, hover] = useState(false);

  useFrame(() => (meshRef.current.rotation.x += 0.01));

  return (
    <group position={position} scale={scale}>
      <mesh
        css={css({
          '&:hover': {
            cursor: 'pointer',
          },
        })}
        ref={meshRef}
        onClick={() => navigate(to)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <dodecahedronGeometry args={[0.75]} />
        <meshStandardMaterial color={hovered ? '#CF4DCE' : '#5de4c7'} />
      </mesh>
    </group>
  );
}
