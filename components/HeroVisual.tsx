"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import HeroFallback from "./HeroFallback";

const HeroScene = dynamic(() => import("./three/HeroScene"), { ssr: false, loading: () => <HeroFallback /> });

function webglOk() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function HeroVisual() {
  const [mode, setMode] = useState<"fallback" | "scene" | "scene-small">("fallback");
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !webglOk()) return;
    setMode(window.innerWidth < 640 ? "scene-small" : "scene");
  }, []);
  return (
    <div className="pointer-events-none h-full w-full" aria-hidden={mode === "fallback" ? undefined : true}>
      {mode === "fallback" ? <HeroFallback /> : <HeroScene small={mode === "scene-small"} />}
    </div>
  );
}
