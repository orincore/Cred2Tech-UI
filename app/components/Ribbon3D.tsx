'use client';

import { useEffect, useRef } from 'react';

interface Ribbon3DProps {
  canvasId?: string;
  cameraZ?: number;
  ribbonRadius?: number[];
  ribbonOpacity?: number[];
  emissiveIntensity?: number;
  offsetX?: number;
}

export default function Ribbon3D({
  canvasId = 'ribbon-canvas',
  cameraZ = 7,
  ribbonRadius = [0.04, 0.035, 0.03, 0.025, 0.02],
  ribbonOpacity = [1.0, 0.95, 0.90, 0.85, 0.80],
  emissiveIntensity = 0.8,
  offsetX = 0,
}: Ribbon3DProps) {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    function initRibbon() {
      if (!mountedRef.current) return;

      const canvas = document.getElementById(canvasId);
      if (!canvas) {
        console.error(`${canvasId} not found`);
        return;
      }

      if (!(window as any).THREE) {
        console.error('THREE not loaded, waiting...');
        setTimeout(initRibbon, 500);
        return;
      }

      console.log(`Initializing ribbon for ${canvasId}...`);
      const THREE = (window as any).THREE;
      const renderer = new THREE.WebGLRenderer({ canvas: canvas as HTMLCanvasElement, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.set(0, 0, cameraZ);

      function resize() {
        const w = (canvas as HTMLCanvasElement).clientWidth;
        const h = (canvas as HTMLCanvasElement).clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      resize();
      window.addEventListener('resize', resize);

      const COLORS = [
        new THREE.Color('#0a1628'),
        new THREE.Color('#0d3a8e'),
        new THREE.Color('#1565d8'),
        new THREE.Color('#00aaff'),
        new THREE.Color('#00e5ff'),
        new THREE.Color('#4fc3f7'),
        new THREE.Color('#81d4fa'),
      ];

      class RibbonCurve extends (THREE.Curve as any) {
        constructor(
          public aX: number,
          public aY: number,
          public bX: number,
          public phase: number,
          public twist: number,
        ) {
          super();
        }
        getPoint(t: number) {
          const a = t * Math.PI * 2 + this.phase;
          return new THREE.Vector3(
            Math.sin(this.aX * a) * 2.8,
            Math.sin(this.aY * a + this.twist) * 1.6,
            Math.cos(this.bX * a) * 1.2,
          );
        }
      }

      const defs = [
        [1, 2, 1, 0, 0, 1, ribbonRadius[0], ribbonOpacity[0]],
        [1, 2, 1, 0.15, 0.1, 2, ribbonRadius[1], ribbonOpacity[1]],
        [1, 2, 1, 0.3, 0.2, 3, ribbonRadius[2], ribbonOpacity[2]],
        [1, 2, 1, 0.45, 0.3, 4, ribbonRadius[3], ribbonOpacity[3]],
        [1, 2, 1, 0.6, 0.4, 5, ribbonRadius[4], ribbonOpacity[4]],
      ] as const;

      const ribbons = defs.map(([aX, aY, bX, phase, twist, ci, radius, opacity]) => {
        const mesh = new THREE.Mesh(
          new THREE.TubeGeometry(new RibbonCurve(aX, aY, bX, phase, twist), 180, radius, 8, true),
          new THREE.MeshPhongMaterial({
            color: COLORS[ci],
            emissive: COLORS[ci],
            emissiveIntensity,
            transparent: true,
            opacity,
            shininess: 120,
            side: (THREE as any).DoubleSide,
          }),
        );
        mesh.position.x = offsetX;
        scene.add(mesh);
        return mesh;
      });

      scene.add(new THREE.AmbientLight(0xffffff, 0.3));
      const pA = new THREE.PointLight(0x00aaff, 2.5, 20);
      pA.position.set(4, 3, 4);
      scene.add(pA);
      const pB = new THREE.PointLight(parseInt('#00e5ff'.replace('#', ''), 16), 1.8, 20);
      pB.position.set(-3, -2, 3);
      scene.add(pB);

      let tRX = 0,
        tRY = 0,
        cRX = 0,
        cRY = 0;
      document.addEventListener('mousemove', (e) => {
        tRY = (e.clientX / window.innerWidth - 0.5) * 0.5;
        tRX = -(e.clientY / window.innerHeight - 0.5) * 0.3;
      });

      let t = 0;
      (function animate() {
        if (!mountedRef.current) return;
        requestAnimationFrame(animate);
        t += 0.004;
        cRX += (tRX - cRX) * 0.05;
        cRY += (tRY - cRY) * 0.05;

        ribbons.forEach((m, i) => {
          m.rotation.y = t * (0.12 + i * 0.008) + cRY;
          m.rotation.x = Math.sin(t * 0.3 + i * 0.2) * 0.15 + cRX;
          m.rotation.z = Math.cos(t * 0.2 + i * 0.15) * 0.08;
          m.material.emissiveIntensity = 0.3 + Math.sin(t * 1.2 + i * 0.5) * 0.15;
        });

        pA.position.x = Math.cos(t * 0.4) * 5;
        pA.position.z = Math.sin(t * 0.4) * 5;

        renderer.render(scene, camera);
      })();

      console.log(`Ribbon initialized successfully for ${canvasId}, ribbon count:`, ribbons.length);

      return () => {
        mountedRef.current = false;
        window.removeEventListener('resize', resize);
      };
    }

    if (window.gsap && window.ScrollTrigger && window.THREE) {
      setTimeout(initRibbon, 100);
    } else {
      window.addEventListener('libs-ready', initRibbon);
    }

    return () => {
      mountedRef.current = false;
    };
  }, [canvasId, cameraZ, ribbonRadius, ribbonOpacity, emissiveIntensity, offsetX]);

  return null;
}
