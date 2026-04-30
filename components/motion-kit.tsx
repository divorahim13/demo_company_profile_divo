'use client';

import React from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';

export const motionEase = [0.16, 1, 0.3, 1] as const;

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 34, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.78, ease: motionEase },
  },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  once?: boolean;
  amount?: number;
};

const directionMap = {
  up: { x: 0, y: 34, scale: 1 },
  down: { x: 0, y: -28, scale: 1 },
  left: { x: 38, y: 0, scale: 1 },
  right: { x: -38, y: 0, scale: 1 },
  scale: { x: 0, y: 18, scale: 0.96 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
  amount = 0.24,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const start = directionMap[direction];

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, ...start, filter: 'blur(8px)' }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once, amount, margin: '-70px' }}
      transition={{ duration: 0.78, delay, ease: motionEase }}
    >
      {children}
    </motion.div>
  );
}

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
  delay?: number;
};

function formatCounter(value: number, prefix: string, suffix: string) {
  return `${prefix}${Math.round(value).toLocaleString('id-ID')}${suffix}`;
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  className,
  duration = 1.65,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-70px' });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = React.useState(formatCounter(0, prefix, suffix));

  React.useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: prefersReducedMotion ? 0.01 : duration,
      delay: prefersReducedMotion ? 0 : delay,
      ease: motionEase,
      onUpdate: (latest) => setDisplay(formatCounter(latest, prefix, suffix)),
    });

    return controls.stop;
  }, [delay, duration, inView, prefix, prefersReducedMotion, suffix, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
