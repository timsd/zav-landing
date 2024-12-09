'use client'

import { useEffect, useRef } from 'react'

export function BackgroundBeams() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', resize)
    resize()

    let frame = 0
    const animate = () => {
      frame = (frame + 1) % 360
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Using frame for animation
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.sin(frame * 0.02) * 100 + 200
      
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = `hsla(${frame}, 50%, 50%, 0.1)`
      ctx.stroke()
      
      requestAnimationFrame(animate)
    }
    animate()

    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
    />
  )
}
