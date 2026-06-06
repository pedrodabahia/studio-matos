import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';



function Cartolina(){

const modeloRef = useRef<THREE.Group>(null);
const { scene } = useGLTF('/cartolina.glb');

useFrame(() => {
    if(modeloRef.current){
      modeloRef.current.rotation.y += 0.003;
    }
    
  })

  return (
    <primitive ref={modeloRef} object={scene} scale={1} />
  
  );
}

export default Cartolina;