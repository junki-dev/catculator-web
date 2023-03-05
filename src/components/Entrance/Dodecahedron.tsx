/** @jsxImportSource @emotion/react */

import { css } from '@mui/material';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mesh } from 'three';

export default function Dodecahedron(props: any) {
  const navigate = useNavigate();

  const meshRef = useRef<Mesh>(null!);
  const [hovered, hover] = useState(false);

  useFrame(() => (meshRef.current.rotation.x += 0.01));

  return (
    <group {...props}>
      <mesh
        css={css({
          '&:hover': {
            cursor: 'pointer',
          },
        })}
        ref={meshRef}
        onClick={() => navigate('/catculator')}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <dodecahedronGeometry args={[0.75]} />
        <meshStandardMaterial color={hovered ? '#CF4DCE' : '#5de4c7'} />
      </mesh>
    </group>
  );
}
