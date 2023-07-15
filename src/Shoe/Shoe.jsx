/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { meshColors, lacesColors, stripeColors } from '../constants';
import './Shoe.css';

const ShoeModel = ({ ...props }) => {
  const group = React.useRef();
  const { nodes, materials } = useGLTF('/shoe/shoe.gltf');
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customColors.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.customColors.sole}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.customColors.sole}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColors.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.customColors.sole}
      />
    </group>
  );
};

const Shoe = () => {
  const [meshColor, setMeshColor] = React.useState('#000000');
  const [lacesColor, setLacesColor] = React.useState('#ffffff');
  const [stripeColor, setStripeColor] = React.useState('#ffffff');

  const handleMeshColorChange = (newColor) => {
    setMeshColor(newColor);
  };

  const handleLacesColorChange = (newColor) => {
    setLacesColor(newColor);
  };

  const handleStripeColorChange = (newColor) => {
    setStripeColor(newColor);
  };

  return (
    <>
      <div className="wrapper">
        <div className="card">
          <div className="canvas">
            <Canvas>
              <React.Suspense fallback={null}>
                <ambientLight intensity={0.6} />
                <spotLight
                  position={[10, 10, 10]}
                  intensity={0.4}
                  angle={0.15}
                  penumbra={1}
                  castShadow
                />
                <ShoeModel
                  customColors={{
                    mesh: meshColor,
                    laces: lacesColor,
                    stripes: stripeColor,
                  }}
                />
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                />
              </React.Suspense>
            </Canvas>
          </div>
          <div className="colors">
            <h2>Customize colors</h2>
            <div className="custom-color">
              <p>Shoe color</p>
              <ul>
                {meshColors.map((color, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleMeshColorChange(color)}
                      className="color-btn"
                      style={{ backgroundColor: color }}
                    ></button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="custom-color">
              <p>Laces color</p>
              <ul>
                {lacesColors.map((color, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLacesColorChange(color)}
                      className="color-btn"
                      style={{ backgroundColor: color }}
                    ></button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="custom-color">
              <p>Stripe color</p>
              <ul>
                {stripeColors.map((color, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleStripeColorChange(color)}
                      className="color-btn"
                      style={{ backgroundColor: color }}
                    ></button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoe;
