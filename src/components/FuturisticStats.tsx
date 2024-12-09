'use client';

import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

// Enhanced type definitions that explicitly include className and href
type MotionDivProps = HTMLMotionProps<'div'> & {
  className?: string;
};

type MotionAnchorProps = HTMLMotionProps<'a'> & {
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
};

type MotionCircleProps = HTMLMotionProps<'circle'> & {
  className?: string;
  strokeWidth?: number | string;
  stroke?: string;
  fill?: string;
  r?: number | string;
  cx?: number | string;
  cy?: number | string;
  strokeDasharray?: string;
  style?: React.CSSProperties;
};

type MotionSpanProps = HTMLMotionProps<'span'> & {
  className?: string;
};

type MotionParagraphProps = HTMLMotionProps<'p'> & {
  className?: string;
};

// Create the motion components with enhanced types
const MotionDiv = motion.div as React.FC<MotionDivProps>;
const MotionCircle = motion.circle as React.FC<MotionCircleProps>;
const MotionSpan = motion.span as React.FC<MotionSpanProps>;
const MotionP = motion.p as React.FC<MotionParagraphProps>;
const MotionA = motion.a as React.FC<MotionAnchorProps>;

export function FuturisticStats() {
  const calculateProgress = (percentage: number) => {
    const startAngle = -90;
    const endAngle = startAngle + (percentage * 360/100);
    return {
      arcLength: (endAngle - startAngle) * (Math.PI / 180) * 80,
      endAngle: endAngle
    };
  };

  const stats = [
    {
      label: 'Innovation Progress',
      value: 87,
      ...calculateProgress(87)
    },
    {
      label: 'Systems Ready',
      value: 92,
      ...calculateProgress(92)
    },
    {
      label: 'Launch Readiness',
      value: 95,
      ...calculateProgress(95)
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-8 px-4 sm:px-0">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <span className="text-white/80 text-sm sm:text-base md:text-lg font-light tracking-wider">
          Relaunching Soon | Join Our Innovation Journey
        </span>
      </MotionDiv>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
        {stats.map((stat, index) => {
          const circumference = 2 * Math.PI * 80;
          const dashArray = stat.arcLength;
          const dashOffset = circumference - dashArray;
          // Inside your map function, add these calculations
          const startPoint = circumference; // Starting point (full circle)
          const endPoint = dashOffset; // Where the green progress bar ends

          return (
            <MotionDiv
              key={stat.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className={`flex justify-center ${
                index === 2 && stats.length === 3 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                <svg className="w-full h-full transform -rotate-90"
                  viewBox="0 0 200 200"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle
                    className="text-gray-700"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="80"
                    cx="100"
                    cy="100"
                  />
                  <MotionCircle
                    className="text-green"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="80"
                    cx="100"
                    cy="100"
                    strokeDasharray={`${dashArray} ${circumference}`}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: dashOffset }}
                    transition={{ duration: 2 }}
                  />
                  <MotionCircle
                    className="text-orange"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="80"
                    cx="100"
                    cy="100"
                    strokeDasharray={`${dashArray} ${circumference}`}
                    initial={{ strokeDashoffset: startPoint }}
                    animate={{
                      strokeDashoffset: [startPoint, endPoint],
                      opacity: [0, 1, 0] // Fade in and out
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      times: [0, 0.9, 1], // Controls timing of opacity changes
                      ease: "linear"
                    }}
                    style={{
                      filter: "blur(1px)",
                      strokeLinecap: "round"
                    }}
                  />
                </svg>                <div className="absolute inset-0 flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-[70%] space-y-1">
                    <MotionSpan
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.3 + 0.5 }}
                    >
                      {stat.value}%
                    </MotionSpan>
                    <MotionSpan
                      className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/60 text-center break-words w-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 + 0.7 }}
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {stat.label}
                    </MotionSpan>
                  </div>
                </div>
              </div>            </MotionDiv>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <MotionP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-white/60 text-xs sm:text-sm italic"
        >
          Building the future of sustainable living
        </MotionP>
      </div>
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <MotionA
            href="https://wa.me/2348066404608"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 py-3 bg-green rounded-full text-white hover:bg-orange/80 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium">Live Chat</span>
          </MotionA>
          <MotionA
            href="mailto:contact@zavolah.com"
            className="w-full sm:w-auto text-center px-6 py-3 bg-green rounded-full text-white hover:bg-orange/80 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium">Email Us</span>
          </MotionA>
        </div>
      </div>
  );
}
