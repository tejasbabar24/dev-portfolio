import { Sparkles } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import { TejasModelHero } from './models/TejasModelHero';

 function HeroExperience() {
  return (
    <Canvas>
        <ambientLight />
        <directionalLight position={[-2 , 0 ,3]} intensity={3} color={"#ff28d5"}    />
        <directionalLight position={[2 , 0 ,3]} intensity={3} color={"#1c34ff"}/>

        <Sparkles count={400} size={2} speed={0.6} color={"pink"} scale={[20 , 20 , 10]}/>

        <group>
            <TejasModelHero scale={9} position={[0 , -15 , 0]} />
        </group>

    </Canvas>
  )
}

export default HeroExperience;