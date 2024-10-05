"use client"; // For Next.js 13+ to indicate client-side component 

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const ThreeJs: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const targetPosition = useRef(new THREE.Vector3(0, -7, -1));
  const targetRotation = useRef(new THREE.Quaternion());
  const clock = useRef(new THREE.Clock());
  const currentMountRef = mountRef.current;

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure it's only running on the client

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    rendererRef.current = renderer;
    cameraRef.current = camera;
    sceneRef.current = scene;

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Load 3D model from GitHub
    const loader = new GLTFLoader();
    loader.load('https://raw.githubusercontent.com/Alshekizx/portfolio/main/maybe-robot.glb', (gltf) => {
      const model = gltf.scene;
      model.position.set(0, -7, -1); // Initial position
      modelRef.current = model;
      scene.add(model);
    }, undefined, (error) => {
      console.error('An error occurred while loading the model:', error);
    });

    camera.position.z = 10;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Animate the scene
    const animate = () => {
      const deltaTime = clock.current.getDelta(); // Get the time since last frame
      requestAnimationFrame(animate);

      if (modelRef.current) {
        // Smoothly interpolate the position and rotation towards the target over time
        modelRef.current.position.lerp(targetPosition.current, deltaTime * 7); // The '2' adjusts the speed (larger values make transitions faster)
        modelRef.current.quaternion.slerp(targetRotation.current, deltaTime * 7); // Smooth rotation with time-based factor
      }

      renderer.render(scene, camera);
    };
    animate();

    // Easing function (ease-in-out)
    const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    // Handle scroll-based model control
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / maxScroll; // Calculate scroll percentage (0 to 1)

      const easedProgress = easeInOutQuad(scrollProgress); // Apply easing to scroll progress

      if (modelRef.current) {
        // Define keyframes based on scroll position with easing applied

        // Keyframe 1: Between 0% and 30% scroll
        if (easedProgress < 0.1) {
          targetPosition.current.set(0, -7 + easedProgress * 10, -1); // Move model up
          targetRotation.current.setFromEuler(new THREE.Euler(
            easedProgress * Math.PI * -2, // Rotate slightly on the x-axis
            easedProgress * Math.PI * -0.5, // Rotate slightly on the y-axis
            0
          ));
        }
        // Keyframe 2: Between 30% and 60% scroll
        else if (easedProgress < 0.6) {
          targetPosition.current.set(7 + easedProgress * 1, -5, -5); // Move the model on the x-axis
          targetRotation.current.setFromEuler(new THREE.Euler(
            Math.PI * 0, // Fix rotation at 90 degrees on the x-axis
            -0.5 + (easedProgress - 0.3) * Math.PI * -0.7, // Rotate the model 360 degrees
            0
          ));
        }

        // Keyframe 3: Between 60% and 100% scroll
        else {
          targetPosition.current.set(-7 + easedProgress * 1, -7, -1); // Move the model on the x-axis
          targetRotation.current.setFromEuler(new THREE.Euler(
            Math.PI * 0, // Fix rotation at 90 degrees on the x-axis
            2 + (easedProgress - 0.3) * Math.PI * -0.7, // Rotate the model 360 degrees
            0
          ));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      if (mountRef.current && rendererRef.current && cameraRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        rendererRef.current.setSize(width, height);
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (mountRef.current) {
      resizeObserver.observe(mountRef.current);
    }

    handleResize();

    // Cleanup on component unmount
    return () => {
      if (currentMountRef && rendererRef.current) {
        currentMountRef.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeJs;