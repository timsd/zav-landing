import { TypewriterEffect } from '@/components/TypewriterEffect'
import { BackgroundBeams } from '@/components/BackgroundBeams'
import { FuturisticStats } from '@/components/FuturisticStats'

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-black">
      <BackgroundBeams />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-orange-500 mb-8">
          ZAVOLAH
        </h1>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {['Renewable Energy', 'Smart Furniture', 'Construction'].map((service) => (
            <div 
              key={service}
              className="px-4 py-2 bg-white/10 rounded-full text-white/70 backdrop-blur-sm"
            >
              {service}
            </div>
          ))}
        </div>

        <TypewriterEffect />
        
        <FuturisticStats />
      </div>
    </main>
  )
}

