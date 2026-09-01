import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "../../context/ThemeContext";
import { Sparkles, Layers, RotateCcw, Award } from "lucide-react";

export default function HeritageModelViewer3D() {
  const mountRef = useRef(null);
  const { isDark } = useTheme();
  const [activeModel, setActiveModel] = useState("tanjak");
  const [isRotating, setIsRotating] = useState(true);

  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const modelGroupRef = useRef(null);
  const lightsRef = useRef({});

  const artifacts = [
    {
      id: "tanjak",
      title: "Tanjak Palembang",
      subtitle: "Mahkota & Penutup Kepala Adat",
      desc: "Simbol kehormatan dan martabat bangsawan Sriwijaya dengan lipatan kain songket emas khas Palembang.",
      badge: "Simbol Bangsawan",
    },
    {
      id: "songket",
      title: "Songket Berlapis Emas",
      subtitle: "Ratu Segala Kain Nusantara",
      desc: "Tenunan benang emas murni dengan motif Lepus Bintang dan pucuk rebung warisan kejayaan kemaritiman Sriwijaya.",
      badge: "Warisan Budaya",
    },
    {
      id: "limas",
      title: "Rumah Limas Palembang",
      subtitle: "Arsitektur Bertingkat Tradisional",
      desc: "Bangunan panggung beratap limas bertingkat lima (Kekijing) yang merepresentasikan strata sosial masyarakat Palembang.",
      badge: "Arsitektur Ikonik",
    },
    {
      id: "bidar",
      title: "Perahu Bidar Prestise",
      subtitle: "Perahu Naga Tradisi Musi",
      desc: "Perahu panjang ramping dengan ukiran naga khas Sungai Musi yang dipacu saat festival HUT Kota Palembang.",
      badge: "Tradisi Sungai",
    },
  ];

  // Helper to build 3D geometry based on selected model
  const buildModel = (modelType, group, isDarkMode) => {
    // Clear existing children
    while (group.children.length > 0) {
      const obj = group.children[0];
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material.dispose();
      }
      group.remove(obj);
    }

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x78350f,
      emissiveIntensity: isDarkMode ? 0.35 : 0.15,
    });

    const rubyMat = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      metalness: 0.4,
      roughness: 0.15,
      emissive: 0x991b1b,
      emissiveIntensity: 0.5,
    });

    const darkWoodMat = new THREE.MeshStandardMaterial({
      color: 0x451a03,
      roughness: 0.65,
      metalness: 0.1,
    });

    const songketTealMat = new THREE.MeshStandardMaterial({
      color: 0x0d9488,
      roughness: 0.4,
      metalness: 0.3,
    });

    // 1. TANJAK MODEL
    if (modelType === "tanjak") {
      // Main Crown Headband Base
      const bandGeo = new THREE.CylinderGeometry(2.2, 2.4, 1.2, 32, 1, true);
      const band = new THREE.Mesh(bandGeo, songketTealMat);
      group.add(band);

      // Gold Trim on Band
      const trimGeo = new THREE.TorusGeometry(2.3, 0.08, 16, 32);
      const trim1 = new THREE.Mesh(trimGeo, goldMat);
      trim1.rotation.x = Math.PI / 2;
      trim1.position.y = 0.5;
      const trim2 = new THREE.Mesh(trimGeo, goldMat);
      trim2.rotation.x = Math.PI / 2;
      trim2.position.y = -0.5;
      group.add(trim1, trim2);

      // Tanjak Peak (Folded cloth peak angled upward)
      const peakGeo = new THREE.ConeGeometry(1.8, 3.2, 3);
      const peak = new THREE.Mesh(peakGeo, goldMat);
      peak.position.set(0, 1.8, 0.8);
      peak.rotation.x = -0.3;
      group.add(peak);

      // Side wings / folds
      const wingGeo = new THREE.BoxGeometry(0.2, 1.8, 2.4);
      const wingL = new THREE.Mesh(wingGeo, songketTealMat);
      wingL.position.set(-1.6, 0.6, 0);
      wingL.rotation.z = 0.25;
      const wingR = new THREE.Mesh(wingGeo, songketTealMat);
      wingR.position.set(1.6, 0.6, 0);
      wingR.rotation.z = -0.25;
      group.add(wingL, wingR);

      // Center Ruby Brooch / Gem
      const gemGeo = new THREE.OctahedronGeometry(0.5, 0);
      const gem = new THREE.Mesh(gemGeo, rubyMat);
      gem.position.set(0, 0.2, 2.3);
      group.add(gem);

      // Gem Gold Surround
      const gemRingGeo = new THREE.TorusGeometry(0.65, 0.08, 16, 24);
      const gemRing = new THREE.Mesh(gemRingGeo, goldMat);
      gemRing.position.set(0, 0.2, 2.3);
      group.add(gemRing);
    }

    // 2. SONGKET GOLD PRISM
    else if (modelType === "songket") {
      // Rotating multifaceted Gold Jewel Prism
      const prismGeo = new THREE.IcosahedronGeometry(2.4, 0);
      const prism = new THREE.Mesh(prismGeo, goldMat);
      group.add(prism);

      // Outer Wireframe Lattice representing weaving threads
      const wireMat = new THREE.MeshBasicMaterial({
        color: isDarkMode ? 0x38bdf8 : 0x0d9488,
        wireframe: true,
      });
      const wireGeo = new THREE.IcosahedronGeometry(2.8, 1);
      const wireLattice = new THREE.Mesh(wireGeo, wireMat);
      group.add(wireLattice);

      // Floating gold orbiting rings
      const ringGeo1 = new THREE.TorusGeometry(3.6, 0.06, 16, 64);
      const ring1 = new THREE.Mesh(ringGeo1, goldMat);
      ring1.rotation.x = Math.PI / 3;
      const ring2 = new THREE.Mesh(ringGeo1, goldMat);
      ring2.rotation.y = Math.PI / 3;
      group.add(ring1, ring2);
    }

    // 3. RUMAH LIMAS ARCHITECTURE
    else if (modelType === "limas") {
      // Elevated Wooden Base / Pillars
      const baseGeo = new THREE.BoxGeometry(4.5, 0.4, 4.5);
      const base = new THREE.Mesh(baseGeo, darkWoodMat);
      base.position.y = -1.2;
      group.add(base);

      // 4 Pillars
      const pillarGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.2, 8);
      [
        [-1.8, -1.8],
        [1.8, -1.8],
        [-1.8, 1.8],
        [1.8, 1.8],
      ].forEach(([px, pz]) => {
        const pillar = new THREE.Mesh(pillarGeo, darkWoodMat);
        pillar.position.set(px, -1.8, pz);
        group.add(pillar);
      });

      // Main House Body (Carved walls)
      const bodyGeo = new THREE.BoxGeometry(3.8, 1.4, 3.8);
      const body = new THREE.Mesh(bodyGeo, darkWoodMat);
      body.position.y = -0.3;
      group.add(body);

      // Stepped Limas Roof (Tier 1)
      const roof1Geo = new THREE.ConeGeometry(3.6, 1.2, 4);
      const roof1 = new THREE.Mesh(roof1Geo, goldMat);
      roof1.position.y = 1.0;
      roof1.rotation.y = Math.PI / 4;
      group.add(roof1);

      // Stepped Limas Roof (Tier 2 - Crown)
      const roof2Geo = new THREE.ConeGeometry(2.2, 1.0, 4);
      const roof2 = new THREE.Mesh(roof2Geo, rubyMat);
      roof2.position.y = 1.8;
      roof2.rotation.y = Math.PI / 4;
      group.add(roof2);

      // Top Simbar / Gold Finial
      const finialGeo = new THREE.OctahedronGeometry(0.4, 0);
      const finial = new THREE.Mesh(finialGeo, goldMat);
      finial.position.y = 2.5;
      group.add(finial);
    }

    // 4. PERAHU BIDAR MODEL
    else if (modelType === "bidar") {
      // Long Narrow Boat Hull
      const hullCurve = new THREE.CylinderGeometry(0.7, 0.2, 6.5, 16);
      const hull = new THREE.Mesh(hullCurve, darkWoodMat);
      hull.rotation.z = Math.PI / 2;
      hull.rotation.y = Math.PI / 2;
      group.add(hull);

      // Gold Dragon Prow / Head at the front
      const prowGeo = new THREE.ConeGeometry(0.7, 1.6, 4);
      const prow = new THREE.Mesh(prowGeo, goldMat);
      prow.position.set(0, 0.6, 3.8);
      prow.rotation.x = -Math.PI / 3;
      group.add(prow);

      // Gold Stern / Tail at the rear
      const tailGeo = new THREE.ConeGeometry(0.5, 1.4, 4);
      const tail = new THREE.Mesh(tailGeo, goldMat);
      tail.position.set(0, 0.6, -3.8);
      tail.rotation.x = Math.PI / 3;
      group.add(tail);

      // Row of Paddles / Oars along both sides
      const paddleGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.6, 6);
      for (let i = -2.2; i <= 2.2; i += 0.9) {
        const pL = new THREE.Mesh(paddleGeo, goldMat);
        pL.position.set(-0.8, -0.3, i);
        pL.rotation.z = -Math.PI / 4;

        const pR = new THREE.Mesh(paddleGeo, goldMat);
        pR.position.set(0.8, -0.3, i);
        pR.rotation.z = Math.PI / 4;

        group.add(pL, pR);
      }

      // Traditional Banner / Flags
      const flagGeo = new THREE.BoxGeometry(0.02, 0.6, 0.8);
      const flag = new THREE.Mesh(flagGeo, rubyMat);
      flag.position.set(0, 1.2, 0);
      group.add(flag);
    }
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // SCENE
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // CAMERA
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2, 7.5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 1.0 : 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffaed, 2.5);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(isDark ? 0x06b6d4 : 0xc1a175, 1.8);
    fillLight.position.set(-6, -2, -4);
    scene.add(fillLight);

    lightsRef.current = { ambientLight, keyLight, fillLight };

    // MODEL GROUP
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    buildModel(activeModel, modelGroup, isDark);

    // ANIMATION LOOP & MOUSE CONTROLS
    let animId;
    let clock = new THREE.Clock();

    let isMouseDown = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isRotating && !isMouseDown) {
        targetRotationY += delta * 0.6;
      }

      // Smooth rotation lerp
      modelGroup.rotation.y += (targetRotationY - modelGroup.rotation.y) * 0.1;
      modelGroup.rotation.x += (targetRotationX - modelGroup.rotation.x) * 0.1;

      // Gentle floating bob
      modelGroup.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    // Event handlers for drag rotation
    const onMouseDown = (e) => {
      isMouseDown = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!isMouseDown) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      targetRotationY += deltaX * 0.01;
      targetRotationX += deltaY * 0.01;
      targetRotationX = Math.max(-0.6, Math.min(0.6, targetRotationX));
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Touch handlers for mobile
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isMouseDown = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length === 1 && isMouseDown) {
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;
        targetRotationY += deltaX * 0.012;
        targetRotationX += deltaY * 0.012;
        targetRotationX = Math.max(-0.6, Math.min(0.6, targetRotationX));
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      isMouseDown = false;
    };

    dom.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      dom.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      dom.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update model when activeModel or isDark changes
  useEffect(() => {
    if (modelGroupRef.current) {
      buildModel(activeModel, modelGroupRef.current, isDark);
    }
    if (lightsRef.current.fillLight) {
      lightsRef.current.fillLight.color.setHex(isDark ? 0x06b6d4 : 0xc1a175);
    }
  }, [activeModel, isDark]);

  const selectedArtifact = artifacts.find((a) => a.id === activeModel) || artifacts[0];

  return (
    <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-2xl transition-all duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* 3D Visualizer Canvas */}
        <div className="lg:col-span-7 relative flex flex-col items-center">
          <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100/80 via-transparent to-slate-200/50 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 border border-slate-200/60 dark:border-slate-800">
            {/* Realtime 3D Viewport */}
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* Badge Overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-slate-200 dark:border-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: "8s" }} />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {selectedArtifact.badge}
              </span>
            </div>

            {/* Auto Rotate Control */}
            <button
              onClick={() => setIsRotating(!isRotating)}
              title={isRotating ? "Jeda Rotasi" : "Putar 3D"}
              className={`absolute top-4 right-4 p-2 rounded-xl backdrop-blur-md shadow-md border transition-all ${
                isRotating
                  ? "bg-primary text-white border-primary"
                  : "bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
              }`}
            >
              <RotateCcw className={`w-3.5 h-3.5 ${isRotating ? "animate-spin" : ""}`} style={{ animationDuration: "8s" }} />
            </button>

            {/* Drag Hint */}
            <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none">
              <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 bg-white/70 dark:bg-slate-900/70 px-3 py-1 rounded-full backdrop-blur-sm">
                Sentuh & putar objek 360°
              </span>
            </div>
          </div>
        </div>

        {/* Artifact Details & Switcher */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-teal-300 text-xs font-bold mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Koleksi 3D Warisan Budaya</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">
              {selectedArtifact.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[#C1A175] dark:text-[#fbbf24] mb-4">
              {selectedArtifact.subtitle}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {selectedArtifact.desc}
            </p>
          </div>

          {/* Model Selector Buttons */}
          <div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-3">
              Pilih Artefak 3D:
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {artifacts.map((art) => (
                <button
                  key={art.id}
                  onClick={() => setActiveModel(art.id)}
                  className={`p-3 rounded-2xl text-left border transition-all duration-300 ${
                    activeModel === art.id
                      ? "bg-gradient-to-r from-primary/15 to-secondary/15 dark:from-primary/25 dark:to-secondary/25 border-primary text-primary dark:text-teal-300 shadow-md font-bold scale-[1.02]"
                      : "bg-slate-50 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs font-semibold truncate">{art.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
