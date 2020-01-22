import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import * as THREE from "three/src/Three"

import  { extend as applyThree, Canvas, useFrame, useThree } from 'react-three-fiber';
import  { apply as applySpring, useSpring, a, interpolate } from 'react-spring/three';

import glitchImage from 'assets/img/home.jpg'

import './styles.css';

//effects importer
import EffectComposer  from  "./postprocessing/EffectComposer";
import { RenderPass } from './postprocessing/RenderPass';
import { GlitchPass } from './postprocessing/GlitchPass';
import { PlaneBufferGeometry } from 'three';
applySpring({ EffectComposer, RenderPass, GlitchPass });
applyThree({ EffectComposer, RenderPass, GlitchPass });


//components loads an images 

function Image({ url, opacity, scale, ...props }){
    const texture = useMemo(() => new THREE.TextureLoader().load(url), [url])
    const [ hovered, setHover ] = useState(false)
    const hover = useCallback(() => setHover(true), [])
    const unhover = useCallback(() =>setHover(false),[] )
    const { factor } = useCallback({ factor: hovered ? 1.1 :1 })
    return (
        <a.mesh {...props} onHover={hover} onUnhover={unhover} scale={factor.interpolate(f => [ scale * f, scale * f,1 ])}>
            <PlaneBufferGeometry attach="geometry" args={[ 5, 5 ]}/>
            <a.meshLambertMaterial attach="material" transparent opacity={opacity}>
                <primitive attach="map" object={ texture }/>
            </a.meshLambertMaterial>
        </a.mesh>
    )
};

//render via canvas
function ImagesCanvas({ children, position, opacity }){
    const {
        size: { width, height },
        viewport: { 
            width: viewportWidth,
            height: viewportHeight
         }
    } = useThree()
    const scale = viewportWidth > viewportHeight ? viewportWidth : viewportHeight
    const canvas = useMemo(() => {
        const canvas = document.createElement('canvas')
        canvas.width = canvas.height = 2048
        const context = canvas.getContext('2d');
        // image = new Image()
        // image.src= "./../../assets/img/home.jpg"
        // context.image
        return canvas
    }, [ children, width, height ])
    return (
        <a.sprite scale={[ scale, scale, 1 ]} position={ position }>
            <a.spriteMaterial attach="material" transparent opacity={ opacity }>
                <canvasTexture attach="map" image={ canvas } premultiplyAlpha onUpdate={ s => ( s.needsUpdate = true ) } />
            </a.spriteMaterial>
        </a.sprite>
    )
}
// back
function Background({ color }) {
    const { viewport } = useThree()
    return(
        <mesh scale={[ viewport.width, viewport.height, 1 ]}>
            <planeGeometry attach="geometry" args={[ 1,1 ]} />
            <a.meshBasicsMaterials attach="material" color={ color } depthTest={ false } />
        </mesh>
    )
}

//glitch
const Effects = React.memo(({ factor }) => {
    const { gl, scene, camera, size } = useThree();
    const composer = useRef();
    useEffect( () => void composer.current.setSize( size.width, size.height ), [ size ])
    useFrame( () => composer.current.render(), 1 )
    return(
        <effectComposer ref={ composer } args={[gl]}>
            <RenderPass attachArray="passes" args={[ scene, camera ]}/>
            <a.glitchPass attachArray="passes" renderToScreen factor={ factor }/>
        </effectComposer>
    )
});


// maintains the scene
function Scene({ top, mouse }) {
    const { size } = useThree();
    const scrollMax = size.height * 4.5;
    return (
        <>
            <a.spotLight intensity={ 1.2 } color="white" position={ mouse.interpolate(( x, y ) => [ x / 100,  -y / 100, 6.5 ])}/>
            <Effects factor={ top.interpolate([ 0, 150 ], [ 1,0 ])}/>
            <Background color={ top.interpolate([ 0, scrollMax * 0.25, scrollMax * 0.8, scrollMax ], [ '#27282F', '#247BA0', '#70C1B3', '#f8f3f1' ])}/>
            <Image top={ top } mouse={ mouse } scrollMax={ scrollMax }/>
            <ImagesCanvas opacity={top.interpolate([ 0,200 ], [ 1,0 ])} position={ top.interpolate( top => [ 0, -1 + top / 200, 0 ] ) }>
                <img src={glitchImage} />
            </ImagesCanvas>
        </>
    )
};

export default function GlitchEffect() {
    const [ { top, mouse }, set ] = useSpring( () => ( { top:0, mouse:[0,0] } ) );
    // const onMouseMove = useCallback(({ clientX: x, clientY:y }), []);
    return(
        <>
            <Canvas className="canvas">
                <Scene top={ top } mouse={ mouse } />
            </Canvas>
            <div >
                <div/>
            </div>
        </>
    );
}; 