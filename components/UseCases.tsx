"use client";

import { Building2, Tractor, HardHat, Zap, type LucideIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type UseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: "blue" | "green";
};

const USE_CASES: UseCase[] = [
  {
    icon: HardHat,
    title: "Construction & Infrastructure",
    description:
      "Record site conditions, monitor construction progress, and inspect infrastructure using aerial imagery and 3D models.",
    accentColor: "blue",
  },
  {
    icon: Tractor,
    title: "Agriculture & Agribusiness",
    description:
      "Assess crop condition with multispectral imagery and NDVI analysis, and pinpoint areas to check in the field.",
    accentColor: "green",
  },
  {
    icon: Building2,
    title: "Surveying & Land Development",
    description:
      "Use topographic surveys, elevation models, and detailed aerial maps to assess land and support site planning.",
    accentColor: "blue",
  },
  {
    icon: Zap,
    title: "Energy & Utility Inspection",
    description:
      "Capture visual inspection imagery of energy and utility infrastructure to document asset conditions and help plan follow-up work.",
    accentColor: "green",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-2xl"
        >
          <span className="inline-block rounded-full border border-agro-green/20 bg-agro-green/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-agro-green">
            Use Cases
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
            Data for Your Site and Your Work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            From construction sites and farmland to utility networks, our mapping and inspection services help teams understand on-the-ground conditions and plan next steps.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {USE_CASES.map(({ icon: Icon, title, description, accentColor }) => {
            const isBlue = accentColor === "blue";

            return (
              <motion.div
                key={title}
                variants={cardVariants}
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`inline-flex shrink-0 rounded-xl p-3.5 ${
                      isBlue
                        ? "bg-tech-blue/10 text-tech-blue"
                        : "bg-agro-green/10 text-agro-green"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-main">
                      {title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-text-muted">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}