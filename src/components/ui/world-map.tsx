"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Dot {
  start: { lat: number; lng: number }
  end: { lat: number; lng: number }
}

interface WorldMapProps {
  dots?: Dot[]
}

function latLngToXY(lat: number, lng: number, width: number, height: number) {
  const x = ((lng + 180) / 360) * width
  const y = ((90 - lat) / 180) * height
  return { x, y }
}

export function WorldMap({ dots = [] }: WorldMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const width = 800
  const height = 400

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, width, height)

    // Draw subtle world outline dots grid
    ctx.fillStyle = "rgba(255,255,255,0.06)"
    for (let lat = -80; lat <= 80; lat += 10) {
      for (let lng = -180; lng <= 180; lng += 10) {
        const { x, y } = latLngToXY(lat, lng, width, height)
        ctx.beginPath()
        ctx.arc(x, y, 1, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Draw connection lines
    dots.forEach((dot) => {
      const start = latLngToXY(dot.start.lat, dot.start.lng, width, height)
      const end = latLngToXY(dot.end.lat, dot.end.lng, width, height)

      const gradient = ctx.createLinearGradient(start.x, start.y, end.x, end.y)
      gradient.addColorStop(0, "rgba(59,130,246,0.8)")
      gradient.addColorStop(1, "rgba(59,130,246,0.1)")

      ctx.beginPath()
      ctx.moveTo(start.x, start.y)

      const cpX = (start.x + end.x) / 2
      const cpY = Math.min(start.y, end.y) - 60
      ctx.quadraticCurveTo(cpX, cpY, end.x, end.y)

      ctx.strokeStyle = gradient
      ctx.lineWidth = 1.5
      ctx.setLineDash([4, 4])
      ctx.stroke()
      ctx.setLineDash([])

      // Start dot (Delhi)
      ctx.beginPath()
      ctx.arc(start.x, start.y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#3b82f6"
      ctx.fill()

      // End dot
      ctx.beginPath()
      ctx.arc(end.x, end.y, 3, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(59,130,246,0.6)"
      ctx.fill()
    })
  }, [dots])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full overflow-hidden rounded-xl"
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="w-full h-auto"
        style={{ imageRendering: "crisp-edges" }}
      />
    </motion.div>
  )
}
