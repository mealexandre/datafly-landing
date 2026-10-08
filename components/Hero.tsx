"use client";

import { ArrowRight, Sprout, Box, Radar } from "lucide-react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CAPABILITIES = [
  { icon: Radar, label: "Aerial mapping & topographic surveys" },
  { icon: Box, label: "3D models & infrastructure inspection" },
  { icon: Sprout, label: "Multispectral data & crop analysis" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay, 
        ease: [0.22, 1, 0.36, 1] as const 
      },
    }),
  };

  return (
    <section id="top" className="relative overflow-hidden py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* მარცხენა მხარე: ტექსტი */}
          <div className="lg:col-span-6">
            
            {/* ბეჯი - Hero eyebrow */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-tech-blue/20 bg-tech-blue/10 px-3.5 py-1.5 text-xs font-semibold text-tech-blue sm:text-sm"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-agro-green animate-pulse" />
              Drone Data for Land and Infrastructure
            </motion.div>

            {/* სათაური - Hero heading */}
            <motion.h1
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={fadeUp}
              className="mt-4 text-4xl font-bold tracking-tight text-text-main sm:text-5xl lg:text-6xl leading-[1.1]"
            >
              Drone Mapping,{" "}
              <span className="text-tech-blue">Agricultural Data</span> &amp;{" "}
              <span className="text-agro-green">3D Models</span>
            </motion.h1>

            {/* აღწერა - Hero paragraph */}
            <motion.p
              initial="hidden"
              animate="show"
              custom={0.2}
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed text-text-muted max-w-xl"
            >
              DataFly captures drone data for construction, infrastructure, farming, and land development. We turn it into maps, 3D models, and crop analysis that help your team plan work, monitor change, and inspect assets.
            </motion.p>

            {/* ღილაკები */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.3}
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-tech-blue px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-tech-blue-hover hover:shadow-lg"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border-2 border-agro-green px-7 py-3.5 text-base font-semibold text-agro-green transition-all duration-200 hover:bg-agro-green hover:text-white"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* შესაძლებლობების სია - Three service labels */}
            <motion.ul
              initial="hidden"
              animate="show"
              custom={0.4}
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 border-t border-slate-200/80 pt-6 sm:flex-row sm:gap-6"
            >
              {CAPABILITIES.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-text-muted font-medium">
                  <Icon className="h-4 w-4 shrink-0 text-tech-blue" strokeWidth={2} aria-hidden