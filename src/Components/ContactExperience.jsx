import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Text3D, OrbitControls } from '@react-three/drei'
import { ContactBoy } from '../Components/models/ContactBoy.jsx'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    console.error('3D render error:', error, info)
  }
  render() {
    if (this.state.hasError) return <div>Error loading 3D content.</div>
    return this.props.children
  }
}

export default function ContactExperience() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '400px',  }}>
      <ErrorBoundary>
        <Canvas camera={{ position: [0, 0, 8], }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[-5, 5, 5]} intensity={1.5} color="#1c34ff" />
          <group position={[0, -1.5, 0]}>
            <Text3D
              position={[-5, -2, 0]}
              font="/fonts/Inter_Bold.json"
              curveSegments={32}
              bevelEnabled
              bevelSize={0.04}
              bevelThickness={0.1}
              height={0.5}
              lineHeight={0.5}
              size={1}      
            >
              Connect With Me
              <meshNormalMaterial />
            </Text3D>
            <ContactBoy scale={3.9} position={[0, -2, 0]}  />
          </group>
          <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} />
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}
