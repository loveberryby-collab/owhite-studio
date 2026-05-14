"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const sp = { stiffness: 40, damping: 20, mass: 0.8 };

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  const y1Raw = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y2Raw = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const y3Raw = useTransform(scrollYProgress, [0, 1], [0, -280]);
  const y4Raw = useTransform(scrollYProgress, [0, 1], [0, 420]);
  const y5Raw = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const x1Raw = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x2Raw = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const x3Raw = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const r1Raw = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const r2Raw = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const s1Raw = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.4, 0.8]);
  const s2Raw = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.2, 1.4]);

  const y1 = useSpring(y1Raw, sp);
  const y2 = useSpring(y2Raw, sp);
  const y3 = useSpring(y3Raw, sp);
  const y4 = useSpring(y4Raw, sp);
  const y5 = useSpring(y5Raw, sp);
  const x1 = useSpring(x1Raw, sp);
  const x2 = useSpring(x2Raw, sp);
  const x3 = useSpring(x3Raw, sp);
  const rotate1 = useSpring(r1Raw, sp);
  const rotate2 = useSpring(r2Raw, sp);
  const scale1 = useSpring(s1Raw, sp);
  const scale2 = useSpring(s2Raw, sp);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="bg-grid absolute inset-0" />

      <motion.div
        style={{ y: y1, x: x1, scale: scale1 }}
        className="absolute -top-20 -left-20 h-[600px] w-[600px] rounded-full opacity-[0.06]"
      >
        <div className="animate-glow-pulse h-full w-full rounded-full bg-cyan-400 blur-[180px]" />
      </motion.div>

      <motion.div
        style={{ y: y2, x: x2, rotate: rotate1 }}
        className="absolute top-[25%] -right-32 h-[500px] w-[500px] rounded-full opacity-[0.05]"
      >
        <div className="animate-glow-pulse h-full w-full rounded-full bg-blue-500 blur-[160px]" style={{ animationDelay: "1.5s" }} />
      </motion.div>

      <motion.div
        style={{ y: y3, x: x3, scale: scale2 }}
        className="absolute top-[50%] left-[20%] h-[400px] w-[400px] rounded-full opacity-[0.04]"
      >
        <div className="animate-glow-pulse h-full w-full rounded-full bg-indigo-500 blur-[140px]" style={{ animationDelay: "3s" }} />
      </motion.div>

      <motion.div
        style={{ y: y4, rotate: rotate2 }}
        className="absolute top-[65%] right-[10%] h-[350px] w-[350px] rounded-full opacity-[0.05]"
      >
        <div className="animate-glow-pulse h-full w-full rounded-full bg-teal-400 blur-[120px]" style={{ animationDelay: "2s" }} />
      </motion.div>

      <motion.div
        style={{ y: y5 }}
        className="absolute top-[80%] left-[5%] h-[300px] w-[300px] rounded-full opacity-[0.04]"
      >
        <div className="animate-glow-pulse h-full w-full rounded-full bg-purple-500 blur-[120px]" style={{ animationDelay: "4s" }} />
      </motion.div>

      <motion.div
        style={{ y: y3, x: x1 }}
        className="absolute top-[10%] left-[10%] h-[2px] w-[60%] opacity-[0.15]"
      >
        <div className="animate-glow-pulse h-full w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-sm" />
      </motion.div>

      <motion.div
        style={{ y: y2, x: x2 }}
        className="absolute top-[55%] left-[20%] h-[2px] w-[50%] opacity-[0.1]"
      >
        <div className="animate-glow-pulse h-full w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-sm" style={{ animationDelay: "2.5s" }} />
      </motion.div>
    </div>
  );
}
