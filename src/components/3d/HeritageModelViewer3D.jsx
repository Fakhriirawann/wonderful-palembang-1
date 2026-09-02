import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "../../context/ThemeContext";
import { Sparkles, Layers, RotateCcw, Award, Image as ImageIcon, Box, ZoomIn, ExternalLink } from "lucide-react";
import TiltCard3D from "./TiltCard3D";

export default function HeritageModelViewer3D() {
  const mountRef = useRef(null);
  const { isDark } = useTheme();
  const [activeModel, setActiveModel] = useState("songket"); // Default to songket to showcase new design
  const [isRotating, setIsRotating] = useState(true);
  const [viewMode, setViewMode] = useState("3d"); // "3d" | "photo"
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const modelGroupRef = useRef(null);
  const lightsRef = useRef({});
  const textureLoaderRef = useRef(new THREE.TextureLoader());

  const artifacts = [
    {
      id: "songket",
      title: "Kain Songket Berlapis Emas",
      subtitle: "Ratu Segala Kain Tradisional Nusantara",
      desc: "Kain tenun mewah warisan bangsawan Sriwijaya dengan benang emas murni bersulam motif Lepus Bintang, Naga Besaung, dan Pucuk Rebung. Memerlukan waktu berbulan-bulan penenunan manual dengan keahlian tingkat tinggi.",
      badge: "Warisan Budaya UNESCO",
      photos: [
        { src: "/songket3.jpeg", caption: "Detail Tenunan Benang Emas Motif Lepus" },
        { src: "/songket.jpeg", caption: "Songket Palembang Merah & Emas Kerajaan" },
        { src: "/songket2.jpeg", caption: "Tekstur Halus Benang Emas & Sutra Asli" },
      ],
      features: ["Benang Emas Murni", "Motif Lepus & Pucuk Rebung", "Penenunan Tangan Tradisional"],
    },
    {
      id: "tanjak",
      title: "Tanjak Palembang",
      subtitle: "Mahkota & Penutup Kepala Adat",
      desc: "Simbol kehormatan dan martabat bangsawan Sriwijaya dengan lipatan kain songket emas khas Palembang yang memiliki filosofi keteguhan dan wibawa pemimpin.",
      badge: "Simbol Bangsawan",
      photos: [
        { src: "/tari.jpeg", caption: "Tanjak & Busana Adat Gending Sriwijaya" },
        { src: "/songket.jpeg", caption: "Bahan Kain Songket Tanjak Palembang" },
      ],
      features: ["Lipatan Songket Khas", "Batu Permata Merah", "Lambang Kepemimpinan"],
    },
    {
      id: "limas",
      title: "Rumah Limas Palembang",
      subtitle: "Arsitektur Bertingkat Tradisional",
      desc: "Bangunan panggung beratap limas bertingkat lima (Kekijing) yang merepresentasikan strata sosial masyarakat Palembang dengan ukiran kayu tembesu berlapis emas.",
      badge: "Arsitektur Ikonik",
      photos: [
        { src: "/museum_balput.jpg", caption: "Rumah Limas Asli di Museum Balaputradewa" },
        { src: "/museum.jpeg", caption: "Arsitektur Klasik Sultanate Palembang" },
      ],
      features: ["5 Tingkatan Kekijing", "Ukiran Kayu Tembesu", "Atap Limas Bertingkat"],
    },
    {
      id: "bidar",
      title: "Perahu Bidar Prestise",
      subtitle: "Perahu Naga Tradisi Sungai Musi",
      desc: "Perahu panjang ramping dengan ukiran naga khas Sungai Musi yang dipacu saat festival HUT Kota Palembang dengan puluhan pendayung bersemangat juang tinggi.",
      badge: "Tradisi Sungai",
      photos: [
        { src: "/bidar.jpeg", caption: "Perlombaan Perahu Bidar di Sungai Musi" },
        { src: "/musi.jpeg", caption: "Sungai Musi Arena Perahu Bidar" },
      ],
      features: ["Kepala Naga Ukir", "50+ Pendayung Terlatih", "Tradisi HUT Palembang"],
    },
  ];

  // Helper to build authentic 3D geometry based on selected model
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

    // 1. AUTHENTIC SONGKET FABRIC TAPESTRY 3D MODEL
    if (modelType === "songket") {
      const textureLoader = textureLoaderRef.current;

      // 1. Traditional Carved Wooden Top Hanging Bar (Gantungan Kayu Ukir)
      const hangerGeo = new THREE.CylinderGeometry(0.12, 0.12, 5.2, 24);
      const hanger = new THREE.Mesh(hangerGeo, darkWoodMat);
      hanger.rotation.z = Math.PI / 2;
      hanger.position.set(0, 2.3, 0);
      hanger.castShadow = true;
      group.add(hanger);

      // Gold Ornate Finials at both bar ends
      const finialGeo = new THREE.ConeGeometry(0.28, 0.7, 16);
      const finialL = new THREE.Mesh(finialGeo, goldMat);
      finialL.rotation.z = Math.PI / 2;
      finialL.position.set(-2.8, 2.3, 0);
      const finialR = new THREE.Mesh(finialGeo, goldMat);
      finialR.rotation.z = -Math.PI / 2;
      finialR.position.set(2.8, 2.3, 0);
      group.add(finialL, finialR);

      // Top suspension rings
      const ringGeo = new THREE.TorusGeometry(0.22, 0.04, 16, 24);
      const ringL = new THREE.Mesh(ringGeo, goldMat);
      ringL.position.set(-1.6, 2.6, 0);
      const ringR = new THREE.Mesh(ringGeo, goldMat);
      ringR.position.set(1.6, 2.6, 0);
      group.add(ringL, ringR);

      // 2. Realistic 3D Draped Songket Cloth Mesh with Authentic Photo Texture
      const clothTexture = textureLoader.load("/songket3.jpeg");
      clothTexture.wrapS = THREE.ClampToEdgeWrapping;
      clothTexture.wrapT = THREE.ClampToEdgeWrapping;

      // Subdivided plane deformed with realistic fabric S-curve folds
      const clothGeo = new THREE.PlaneGeometry(4.4, 4.4, 40, 40);
      const pos = clothGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i);
        const x = pos.getX(i);
        // Realistic wave draping of heavy gold cloth
        const zWave = Math.sin((y + 2.2) * 1.6) * 0.22 + Math.cos(x * 2.2) * 0.09;
        pos.setZ(i, zWave);
      }
      clothGeo.computeVertexNormals();

      const clothMat = new THREE.MeshStandardMaterial({
        map: clothTexture,
        roughness: 0.4,
        metalness: 0.35,
        side: THREE.DoubleSide,
      });

      const clothMesh = new THREE.Mesh(clothGeo, clothMat);
      clothMesh.position.set(0, 0.05, 0);
      clothMesh.castShadow = true;
      clothMesh.receiveShadow = true;
      group.add(clothMesh);

      // Gold Embroidered Border Trims (Top & Bottom)
      const borderGeo = new THREE.BoxGeometry(4.45, 0.18, 0.12);
      const topBorder = new THREE.Mesh(borderGeo, goldMat);
      topBorder.position.set(0, 2.2, 0.06);
      const bottomBorder = new THREE.Mesh(borderGeo, goldMat);
      bottomBorder.position.set(0, -2.15, 0.06);
      group.add(topBorder, bottomBorder);

      // 3. Gold Fringe Tassels along the bottom edge
      for (let x = -2.1; x <= 2.1; x += 0.22) {
        const tasselGeo = new THREE.CylinderGeometry(0.02, 0.05, 0.45, 8);
        const tassel = new THREE.Mesh(tasselGeo, goldMat);
        tassel.position.set(x, -2.45, 0.08);
        group.add(tassel);
      }
    }

    // 2. TANJAK PALEMBANG 3D MODEL
    else if (modelType === "tanjak") {
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
    camera.position.set(0, 1.5, 7.5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 1.2 : 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffaed, 2.8);
    keyLight.position.set(5, 8, 6);
    keyLight.castShadow = true;
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

      if (isRotating && !isMouseDown && viewMode === "3d") {
        targetRotationY += delta * 0.5;
      }

      // Smooth rotation lerp
      modelGroup.rotation.y += (targetRotationY - modelGroup.rotation.y) * 0.1;
      modelGroup.rotation.x += (targetRotationX - modelGroup.rotation.x) * 0.1;

      // Gentle floating bob
      modelGroup.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.08;

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
    setSelectedPhotoIndex(0);
  }, [activeModel, isDark]);

  const selectedArtifact = artifacts.find((a) => a.id === activeModel) || artifacts[0];

  return (
    <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-2xl transition-all duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* 3D Visualizer or Authentic HD Photo Viewport */}
        <div className="lg:col-span-7 relative flex flex-col items-center">
          {/* View Mode Switcher (3D vs HD Photo) */}
          <div className="w-full flex items-center justify-between mb-3">
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setViewMode("3d")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  viewMode === "3d"
                    ? "bg-primary text-white shadow-md"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>Model 3D Interaktif</span>
              </button>
              <button
                onClick={() => setViewMode("photo")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  viewMode === "photo"
                    ? "bg-primary text-white shadow-md"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Foto Asli HD</span>
              </button>
            </div>

            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 hidden sm:inline-block">
              {viewMode === "3d" ? "Rotasi 360° Real-time" : "Koleksi Galeri Asli"}
            </span>
          </div>

          {/* Main Viewport Card */}
          <div className="relative w-full h-[340px] sm:h-[420px] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100/80 via-transparent to-slate-200/50 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 border border-slate-200/60 dark:border-slate-800">
            {/* 3D Canvas Mode */}
            <div
              ref={mountRef}
              className={`w-full h-full cursor-grab active:cursor-grabbing ${
                viewMode === "3d" ? "block" : "hidden"
              }`}
            />

            {/* Authentic HD Photo Mode */}
            {viewMode === "photo" && (
              <div className="w-full h-full relative flex items-center justify-center p-4 bg-slate-950/40 animate-in fade-in duration-300">
                <TiltCard3D maxTilt={10} scale={1.02} className="w-full h-full">
                  <div className="w-full h-full relative rounded-xl overflow-hidden shadow-2xl border border-white/20">
                    <img
                      src={selectedArtifact.photos[selectedPhotoIndex]?.src || selectedArtifact.photos[0].src}
                      alt={selectedArtifact.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                      <span className="text-xs font-bold text-amber-300 mb-1">
                        {selectedArtifact.title}
                      </span>
                      <p className="text-xs text-white/90">
                        {selectedArtifact.photos[selectedPhotoIndex]?.caption}
                      </p>
                    </div>
                  </div>
                </TiltCard3D>
              </div>
            )}

            {/* Badge Overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-slate-200 dark:border-slate-700 pointer-events-none">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: "8s" }} />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {selectedArtifact.badge}
              </span>
            </div>

            {/* 3D Auto Rotate Control (Only in 3D Mode) */}
            {viewMode === "3d" && (
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
            )}

            {/* Bottom Hint */}
            <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none">
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-white/80 dark:bg-slate-900/80 px-3 py-1 rounded-full backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                {viewMode === "3d" ? "Sentuh & putar objek 3D 360°" : "Foto otentik resolusi tinggi"}
              </span>
            </div>
          </div>

          {/* Photo Gallery Thumbnails */}
          {selectedArtifact.photos && selectedArtifact.photos.length > 0 && (
            <div className="w-full flex items-center gap-2 mt-3 overflow-x-auto pb-1">
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 mr-1 flex-shrink-0">
                Foto Asli:
              </span>
              {selectedArtifact.photos.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedPhotoIndex(idx);
                    setViewMode("photo");
                  }}
                  className={`relative rounded-xl overflow-hidden h-12 w-16 flex-shrink-0 border-2 transition-all ${
                    viewMode === "photo" && selectedPhotoIndex === idx
                      ? "border-primary shadow-lg scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={p.src} alt={p.caption} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Artifact Details & Model Switcher */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-teal-300 text-xs font-bold mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Warisan Budaya Palembang</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white mb-1">
              {selectedArtifact.title}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#C1A175] dark:text-[#fbbf24] mb-4">
              {selectedArtifact.subtitle}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {selectedArtifact.desc}
            </p>

            {/* Key Features Pill Badges */}
            <div className="mb-6">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                Karakteristik Khas:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedArtifact.features.map((feat, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40"
                  >
                    ✨ {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Model Selector Buttons */}
          <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-3">
              Pilih Artefak Budaya:
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {artifacts.map((art) => (
                <button
                  key={art.id}
                  onClick={() => {
                    setActiveModel(art.id);
                  }}
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
