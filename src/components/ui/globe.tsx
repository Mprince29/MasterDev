"use client"
import { useEffect, useRef } from "react"
import createGlobe from "cobe"
import type { Globe as GlobeInstance } from "cobe"

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let phi = 1.8
    let rafId: number
    const globeInstance: GlobeInstance = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 600,
      height: 600,
      phi,
      theta: 0.3,
      dark: 1,
      diffuse: 1.8,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.08, 0.06, 0.15],
      markerColor: [0.545, 0.914, 0.992],
      glowColor: [0.3, 0.2, 0.55],
      markers: [
        { location: [28.6139, 77.209], size: 0.07 },    // Delhi
        { location: [3.139, 101.6869], size: 0.05 },     // Kuala Lumpur
        { location: [37.7749, -122.4194], size: 0.04 },  // SF
        { location: [51.5074, -0.1278], size: 0.04 },    // London
        { location: [1.3521, 103.8198], size: 0.04 },    // Singapore
        { location: [52.52, 13.405], size: 0.04 },       // Berlin
        { location: [19.076, 72.8777], size: 0.035 },    // Mumbai
        { location: [12.9716, 77.5946], size: 0.035 },   // Bangalore
      ],
    })

    function animate() {
      phi += 0.003
      globeInstance.update({ phi })
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId)
      globeInstance.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  )
}
