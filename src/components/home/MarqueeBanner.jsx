import { motion } from 'framer-motion'
import { Sparkle } from 'lucide-react'

export default function MarqueeBanner() {
  const items = [
    '3D Event Visualization',
    'Event Visual Design',
    'Spatial & Stage Layout',
    'Graphic & Social Media Design',
    'SketchUp & Enscape Rendering',
    'WordPress Development',
    'Event Booth & Venue Concepts',
  ]

  return (
    <div className="relative w-full overflow-hidden bg-[#FFB800] text-[#0A213D] py-4 sm:py-5 border-y-2 border-[#0A213D]/15 shadow-sm transform -rotate-1 scale-102 my-6">
      {/* Repeating Marquee Row */}
      <div className="flex items-center whitespace-nowrap">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 22,
            ease: 'linear',
          }}
          className="flex items-center gap-8 sm:gap-12 text-sm sm:text-base md:text-lg font-black tracking-tight uppercase"
        >
          {/* Double repeat for seamless loop */}
          {[...items, ...items].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 sm:gap-12 shrink-0">
              <span className="hover:opacity-80 transition-opacity cursor-default">
                {item}
              </span>
              <Sparkle className="w-4 h-4 sm:w-5 sm:h-5 fill-[#0A213D] text-[#0A213D] shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
