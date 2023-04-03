import Cube from '../components/Entrance/Cube';
import Dodecahedron from '../components/Entrance/Dodecahedron';

import { Box } from '@mui/material';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function Entrance() {
  return (
    <Box component={'div'} width={'100%'} height={'90vh'}>
      <Canvas flat linear camera={{ position: [5, 5, 5], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <Cube />
        <Dodecahedron to={'/catculator'} position={[0, 1, 0]} scale={0.2} />
        <Dodecahedron to={'/guide'} position={[0, 1, 0.5]} scale={0.15} />
        <ContactShadows frames={1} position={[0, -0.5, 0]} blur={1} opacity={0.75} />
        <ContactShadows frames={1} position={[0, -0.5, 0]} blur={3} color="orange" />
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
      </Canvas>
    </Box>
  );
}
