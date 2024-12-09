'use client'

import { motion } from 'framer-motion'

export function TypewriterEffect() {
  const text = "Transforming Spaces, Powering Future"
  
  return (
    <motion.p
      style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {text}
    </motion.p>
  )
}
