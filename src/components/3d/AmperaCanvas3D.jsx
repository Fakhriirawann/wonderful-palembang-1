import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "../../context/ThemeContext";
import { Sparkles, RotateCcw, Eye, Compass, Info, Sun, Moon } from "lucide-react";

export default function AmperaCanvas3D() {
  const mountRef = useRef(null);
  const { isDark } = useTheme();
  const [activeView, setActiveView] = useState("cinematic");
  const [autoRotate, setAutoRotate] = useState(true);
  const [selectedHotspot, setSelectedHotspot] = useState(null);

  // References to keep three objects across renders
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsStateRef = useRef({
    isDragging: false,
    prevMouseX: 0,
    prevMouseY: 0,
    targetRotX: 0.25,
    targetRotY: 0.6,
    currentRotX: 0.25,
    currentRotY: 0.6,
    distance: 26,
    targetDistance: 26,
  });

  const lightsGroupRef = useRef({});
  const materialsRef = useRef([]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // SCENE
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // CAMERA
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(20, 14, 24);
    camera.lookAt(0, 3, 0);
    cameraRef.current = camera;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.6 : 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(isDark ? 0x88ccff : 0xfffaed, isDark ? 1.0 : 2.5);
    dirLight.position.set(30, 40, 20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // Bridge Decorative Glow Lights (Point Lights)
    const towerLight1 = new THREE.PointLight(0xffaa33, 2, 20);
    towerLight1.position.set(-6, 9, 0);
    scene.add(towerLight1);

    const towerLight2 = new THREE.PointLight(0x00e5ff, 2, 20);
    towerLight2.position.set(6, 9, 0);
    scene.add(towerLight2);

    lightsGroupRef.current = { ambientLight, dirLight, towerLight1, towerLight2 };

    // -------------------------------------------------------------
    // BUILD 3D AMPERA BRIDGE
    // -------------------------------------------------------------
    const bridgeGroup = new THREE.Group();
    scene.add(bridgeGroup);

    // Materials
    const bridgeRedColor = isDark ? 0xcc2936 : 0xdf2b37;
    const towerMat = new THREE.MeshStandardMaterial({
      color: bridgeRedColor,
      roughness: 0.35,
      metalness: 0.25,
    });
    materialsRef.current.push(towerMat);

    const deckMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x242b35 : 0x3d4450,
      roughness: 0.7,
      metalness: 0.1,
    });
    materialsRef.current.push(deckMat);

    const roadLineMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
    const cableMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x5eead4 : 0xe2e8f0,
      roughness: 0.2,
      metalness: 0.8,
    });
    materialsRef.current.push(cableMat);

    const waterMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x092635 : 0x1e6f8a,
      roughness: 0.1,
      metalness: 0.85,
      transparent: true,
      opacity: 0.88,
    });
    materialsRef.current.push(waterMat);

    // 1. Water Plane (Musi River)
    const waterGeo = new THREE.PlaneGeometry(60, 45, 40, 40);
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.rotation.x = -Math.PI / 2;
    waterMesh.position.y = 0;
    waterMesh.receiveShadow = true;
    scene.add(waterMesh);

    // 2. Bridge Road Deck
    const deckGeo = new THREE.BoxGeometry(38, 0.8, 4.8);
    const deckMesh = new THREE.Mesh(deckGeo, deckMat);
    deckMesh.position.set(0, 4, 0);
    deckMesh.castShadow = true;
    deckMesh.receiveShadow = true;
    bridgeGroup.add(deckMesh);

    // Road Divider & Lines
    const lineGeo = new THREE.BoxGeometry(36, 0.05, 0.2);
    const lineMesh = new THREE.Mesh(lineGeo, roadLineMat);
    lineMesh.position.set(0, 4.43, 0);
    bridgeGroup.add(lineMesh);

    // Guard Rails
    const railMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.3 });
    const railGeo = new THREE.BoxGeometry(38, 0.4, 0.15);
    const rail1 = new THREE.Mesh(railGeo, railMat);
    rail1.position.set(0, 4.6, 2.3);
    const rail2 = new THREE.Mesh(railGeo, railMat);
    rail2.position.set(0, 4.6, -2.3);
    bridgeGroup.add(rail1, rail2);

    // 3. Two Iconic Red Towers
    const createTower = (posX) => {
      const tower = new THREE.Group();
      tower.position.set(posX, 4, 0);

      // Left column
      const colGeo = new THREE.BoxGeometry(1.2, 13, 1.2);
      const colL = new THREE.Mesh(colGeo, towerMat);
      colL.position.set(0, 6.5, -1.8);
      colL.castShadow = true;
      tower.add(colL);

      // Right column
      const colR = new THREE.Mesh(colGeo, towerMat);
      colR.position.set(0, 6.5, 1.8);
      colR.castShadow = true;
      tower.add(colR);

      // Cross Beams (Top and middle portals)
      const topBeamGeo = new THREE.BoxGeometry(1.4, 1.2, 5.2);
      const topBeam = new THREE.Mesh(topBeamGeo, towerMat);
      topBeam.position.set(0, 12.8, 0);
      topBeam.castShadow = true;
      tower.add(topBeam);

      const midBeamGeo = new THREE.BoxGeometry(1.3, 0.8, 4.8);
      const midBeam = new THREE.Mesh(midBeamGeo, towerMat);
      midBeam.position.set(0, 8.5, 0);
      tower.add(midBeam);

      // Top Roof / Crown characteristic of Ampera
      const crownGeo = new THREE.ConeGeometry(1.4, 1.6, 4);
      const crownL = new THREE.Mesh(crownGeo, towerMat);
      crownL.position.set(0, 14.1, -1.8);
      crownL.rotation.y = Math.PI / 4;
      const crownR = new THREE.Mesh(crownGeo, towerMat);
      crownR.position.set(0, 14.1, 1.8);
      crownR.rotation.y = Math.PI / 4;
      tower.add(crownL, crownR);

      // Suspension Cables
      for (let i = 1; i <= 6; i++) {
        const offset = i * 2.2;
        // Inner and outer cables
        [-offset, offset].forEach((cableX) => {
          const cableLength = Math.hypot(cableX, 9);
          const cableGeo = new THREE.CylinderGeometry(0.04, 0.04, cableLength, 6);

          const cL = new THREE.Mesh(cableGeo, cableMat);
          cL.position.set(cableX / 2, 7.5, -1.8);
          cL.rotation.z = Math.atan2(cableX, 9);
          tower.add(cL);

          const cR = new THREE.Mesh(cableGeo, cableMat);
          cR.position.set(cableX / 2, 7.5, 1.8);
          cR.rotation.z = Math.atan2(cableX, 9);
          tower.add(cR);
        });
      }

      // Concrete Pier Foundation into water
      const pierGeo = new THREE.BoxGeometry(2.4, 4.5, 5.8);
      const pierMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.9 });
      const pier = new THREE.Mesh(pierGeo, pierMat);
      pier.position.set(0, -2, 0);
      pier.receiveShadow = true;
      tower.add(pier);

      return tower;
    };

    const towerLeft = createTower(-7);
    const towerRight = createTower(7);
    bridgeGroup.add(towerLeft, towerRight);

    // 4. Moving Traffic / Light Beams
    const carsGroup = new THREE.Group();
    bridgeGroup.add(carsGroup);

    const carGeo = new THREE.BoxGeometry(1.2, 0.6, 0.7);
    const carMat1 = new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.5 });
    const carMat2 = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 });
    const carMat3 = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.5 });

    const cars = [
      { mesh: new THREE.Mesh(carGeo, carMat1), speed: 0.12, laneZ: 1.1, dir: 1, x: -14 },
      { mesh: new THREE.Mesh(carGeo, carMat2), speed: 0.16, laneZ: 0.9, dir: 1, x: 0 },
      { mesh: new THREE.Mesh(carGeo, carMat3), speed: 0.14, laneZ: -1.1, dir: -1, x: 12 },
      { mesh: new THREE.Mesh(carGeo, carMat1), speed: 0.1, laneZ: -0.9, dir: -1, x: -4 },
    ];

    cars.forEach((c) => {
      c.mesh.position.set(c.x, 4.7, c.laneZ);
      carsGroup.add(c.mesh);
    });

    // 5. Traditional Palembang Boat (Perahu Ketek) on Musi River
    const boatGroup = new THREE.Group();
    const hullGeo = new THREE.CylinderGeometry(0.8, 0.4, 4.5, 8);
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x92400e, roughness: 0.8 });
    const hull = new THREE.Mesh(hullGeo, woodMat);
    hull.rotation.z = Math.PI / 2;
    hull.rotation.y = Math.PI / 2;
    hull.position.y = 0.2;
    hull.castShadow = true;
    boatGroup.add(hull);

    // Boat Roof
    const roofGeo = new THREE.BoxGeometry(1.2, 0.8, 2.2);
    const roofMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.5 });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.set(0, 1.0, 0);
    boatGroup.add(roof);

    // Boat Lantern
    const boatLight = new THREE.PointLight(0xffb703, 1.5, 8);
    boatLight.position.set(0, 1.6, 1.8);
    boatGroup.add(boatLight);

    boatGroup.position.set(-10, 0.1, 8);
    boatGroup.rotation.y = -0.4;
    scene.add(boatGroup);

    // 6. Particle field (Stars / River Sparks)
    const particleCount = isDark ? 250 : 80;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 60;
      particlePos[i + 1] = Math.random() * 25 + 2;
      particlePos[i + 2] = (Math.random() - 0.5) * 50;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isDark ? 0.35 : 0.2,
      color: isDark ? 0x93c5fd : 0xfef08a,
      transparent: true,
      opacity: isDark ? 0.85 : 0.45,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // -------------------------------------------------------------
    // INTERACTION & ANIMATION LOOP
    // -------------------------------------------------------------
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // 1. Water Ripple Effect
      const posAttr = waterGeo.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const u = posAttr.getX(i);
        const v = posAttr.getY(i);
        const z = Math.sin(u * 0.4 + elapsedTime * 2.2) * 0.15 + Math.cos(v * 0.3 + elapsedTime * 1.5) * 0.12;
        posAttr.setZ(i, z);
      }
      posAttr.needsUpdate = true;

      // 2. Animated Cars
      cars.forEach((c) => {
        c.x += c.speed * c.dir;
        if (c.dir > 0 && c.x > 18) c.x = -18;
        if (c.dir < 0 && c.x < -18) c.x = 18;
        c.mesh.position.x = c.x;
      });

      // 3. Boat Floating Bobbing
      boatGroup.position.y = 0.2 + Math.sin(elapsedTime * 1.8) * 0.12;
      boatGroup.rotation.z = Math.sin(elapsedTime * 1.2) * 0.04;
      boatGroup.position.x += Math.sin(elapsedTime * 0.5) * 0.008;

      // 4. Lights pulsing in night mode
      if (isDark) {
        towerLight1.intensity = 1.8 + Math.sin(elapsedTime * 3) * 0.6;
        towerLight2.intensity = 1.8 + Math.cos(elapsedTime * 3) * 0.6;
      }

      // 5. Camera & Orbit Interpolation
      const ctrl = controlsStateRef.current;
      if (autoRotate && !ctrl.isDragging) {
        ctrl.targetRotY += 0.003;
      }

      // Smooth lerp
      ctrl.currentRotX += (ctrl.targetRotX - ctrl.currentRotX) * 0.08;
      ctrl.currentRotY += (ctrl.targetRotY - ctrl.currentRotY) * 0.08;
      ctrl.distance += (ctrl.targetDistance - ctrl.distance) * 0.08;

      // Clamp X rotation to prevent flipping
      ctrl.currentRotX = Math.max(-0.2, Math.min(Math.PI / 2.5, ctrl.currentRotX));

      // Calculate camera spherical coordinates
      const camY = Math.sin(ctrl.currentRotX) * ctrl.distance + 4;
      const horizontalDist = Math.cos(ctrl.currentRotX) * ctrl.distance;
      const camX = Math.sin(ctrl.currentRotY) * horizontalDist;
      const camZ = Math.cos(ctrl.currentRotY) * horizontalDist;

      camera.position.set(camX, camY, camZ);
      camera.lookAt(0, 4.5, 0);

      renderer.render(scene, camera);
    };

    animate();

    // -------------------------------------------------------------
    // MOUSE / TOUCH EVENT LISTENERS
    // -------------------------------------------------------------
    const handleMouseDown = (e) => {
      controlsStateRef.current.isDragging = true;
      controlsStateRef.current.prevMouseX = e.clientX;
      controlsStateRef.current.prevMouseY = e.clientY;
    };

    const handleMouseMove = (e) => {
      const ctrl = controlsStateRef.current;
      if (!ctrl.isDragging) return;

      const deltaX = e.clientX - ctrl.prevMouseX;
      const deltaY = e.clientY - ctrl.prevMouseY;

      ctrl.targetRotY += deltaX * 0.008;
      ctrl.targetRotX += deltaY * 0.008;

      ctrl.prevMouseX = e.clientX;
      ctrl.prevMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      controlsStateRef.current.isDragging = false;
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const ctrl = controlsStateRef.current;
      ctrl.targetDistance = Math.max(12, Math.min(42, ctrl.targetDistance + e.deltaY * 0.03));
    };

    // Touch controls for mobile
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        controlsStateRef.current.isDragging = true;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        controlsStateRef.current.prevMouseX = touchStartX;
        controlsStateRef.current.prevMouseY = touchStartY;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 1 && controlsStateRef.current.isDragging) {
        const deltaX = e.touches[0].clientX - controlsStateRef.current.prevMouseX;
        const deltaY = e.touches[0].clientY - controlsStateRef.current.prevMouseY;

        controlsStateRef.current.targetRotY += deltaX * 0.01;
        controlsStateRef.current.targetRotX += deltaY * 0.01;

        controlsStateRef.current.prevMouseX = e.touches[0].clientX;
        controlsStateRef.current.prevMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      controlsStateRef.current.isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    domElement.addEventListener("wheel", handleWheel, { passive: false });

    domElement.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // RESIZE HANDLER
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    // CLEANUP
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      domElement.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      domElement.removeEventListener("wheel", handleWheel);
      domElement.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update theme colors when isDark changes
  useEffect(() => {
    if (!sceneRef.current) return;
    const { ambientLight, dirLight, towerLight1, towerLight2 } = lightsGroupRef.current;

    if (ambientLight) ambientLight.intensity = isDark ? 0.7 : 1.4;
    if (dirLight) {
      dirLight.color.setHex(isDark ? 0x88ccff : 0xfffaed);
      dirLight.intensity = isDark ? 1.2 : 2.5;
    }
    if (towerLight1) towerLight1.intensity = isDark ? 2.5 : 0.8;
    if (towerLight2) towerLight2.intensity = isDark ? 2.5 : 0.8;
  }, [isDark]);

  // Camera preset switches
  const setCameraPreset = (type) => {
    setActiveView(type);
    const ctrl = controlsStateRef.current;
    if (type === "cinematic") {
      ctrl.targetRotX = 0.25;
      ctrl.targetRotY = 0.6;
      ctrl.targetDistance = 26;
    } else if (type === "top") {
      ctrl.targetRotX = 1.2;
      ctrl.targetRotY = 0;
      ctrl.targetDistance = 32;
    } else if (type === "deck") {
      ctrl.targetRotX = 0.05;
      ctrl.targetRotY = 1.55;
      ctrl.targetDistance = 16;
    } else if (type === "river") {
      ctrl.targetRotX = 0.08;
      ctrl.targetRotY = 0.1;
      ctrl.targetDistance = 20;
    }
  };

  const hotspots = [
    {
      id: "tower",
      title: "Menara Ikonik Ampera",
      desc: "Menara kembar setinggi 63 meter bercat merah megah yang menjadi landmark nomor satu kota Palembang.",
    },
    {
      id: "musi",
      title: "Sungai Musi",
      desc: "Sungai terpanjang di Sumatera (750 km) yang membelah kota menjadi wilayah Seberang Ulu dan Seberang Ilir.",
    },
    {
      id: "ketek",
      title: "Perahu Ketek Tradisional",
      desc: "Moda transportasi air khas Palembang yang siap mengantar wisatawan menyusuri pesona Sungai Musi.",
    },
  ];

  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-b from-slate-100/90 via-slate-50 to-slate-200/90 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="w-full h-[450px] sm:h-[520px] md:h-[600px] cursor-grab active:cursor-grabbing" />

      {/* Top Header Overlay */}
      <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between pointer-events-none gap-2">
        <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-white/40 dark:border-slate-700/60 pointer-events-auto">
          <Sparkles className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: "6s" }} />
          <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#316D7C] to-[#C1A175] dark:from-[#38bdf8] dark:to-[#fbbf24] bg-clip-text text-transparent">
            3D Interactive Landmark
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-cyan-300 font-bold uppercase tracking-wider">
            Realtime
          </span>
        </div>

        {/* Interaction Hint */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 dark:border-slate-800">
          <Compass className="w-3.5 h-3.5 text-primary" />
          <span>Klik & Geser untuk rotasi 360° • Scroll untuk zoom</span>
        </div>
      </div>

      {/* Camera Controls & Presets Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        {/* View Presets */}
        <div className="flex items-center gap-1.5 p-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 dark:border-slate-700/70 pointer-events-auto">
          <button
            onClick={() => setCameraPreset("cinematic")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeView === "cinematic"
                ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            Cinematic
          </button>
          <button
            onClick={() => setCameraPreset("deck")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeView === "deck"
                ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            Jembatan
          </button>
          <button
            onClick={() => setCameraPreset("river")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeView === "river"
                ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            Sungai Musi
          </button>
          <button
            onClick={() => setCameraPreset("top")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeView === "top"
                ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            Bird's Eye
          </button>
        </div>

        {/* Right Tools (Auto-Rotate & Reset) */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            title={autoRotate ? "Jeda Rotasi Otomatis" : "Mulai Rotasi Otomatis"}
            className={`p-2.5 rounded-2xl backdrop-blur-md shadow-lg border transition-all duration-300 ${
              autoRotate
                ? "bg-primary text-white border-primary/40 shadow-primary/30"
                : "bg-white/90 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 border-white/50 dark:border-slate-700/70 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <RotateCcw className={`w-4 h-4 ${autoRotate ? "animate-spin" : ""}`} style={{ animationDuration: "10s" }} />
          </button>

          <button
            onClick={() => setCameraPreset("cinematic")}
            title="Reset Sudut Pandang"
            className="p-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-600 dark:text-slate-300 border border-white/50 dark:border-slate-700/70 shadow-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hotspots Info Drawer / Badges */}
      <div className="absolute top-16 left-4 flex flex-col gap-2 max-w-xs pointer-events-auto">
        <div className="flex flex-wrap gap-1.5">
          {hotspots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setSelectedHotspot(selectedHotspot?.id === spot.id ? null : spot)}
              className={`text-xs px-2.5 py-1 rounded-xl backdrop-blur-md border transition-all duration-200 flex items-center gap-1 ${
                selectedHotspot?.id === spot.id
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 border-white/40 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800"
              }`}
            >
              <Info className="w-3 h-3" />
              {spot.title}
            </button>
          ))}
        </div>

        {selectedHotspot && (
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-primary/20 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-bold text-slate-900 dark:text-white">{selectedHotspot.title}</h4>
              <button
                onClick={() => setSelectedHotspot(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white font-bold ml-2"
              >
                ✕
              </button>
            </div>
            <p className="leading-relaxed">{selectedHotspot.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}
