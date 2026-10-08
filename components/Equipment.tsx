"use client";

import { Plane, Cpu, ShieldAlert, type LucideIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Drone = {
  icon: LucideIcon;
  name: string;
  role: string;
  description: string;
  tags: string[];
  accentColor: "blue" | "green";
};

const DRONES: Drone[] = [
  {
    icon: ShieldAlert,
    name: "DJI Mini 5 Pro",
    role: "Compact & Agile Inspection",
    description:
      "Compact, safe, and fast—ideal for inspecting hard-to-reach areas and quick site overviews.",
    tags: ["Compact", "Fast Deployment", "Visual Inspection"],
    accentColor: "blue",
  },
  {
    icon: Cpu,
    name: "DJI Matrice 4E",
    role: "Heavy-Duty Surveying",
    description:
      "A heavy-duty professional drone designed for scanning large areas, precise topography, and infrastructure.",
    tags: ["RTK Precision", "Large Scale", "Topography"],
    accentColor: "blue",
  },
  {
    icon: Plane,
    name: "DJI Mavic 3M",
    role: "Multispectral Agriculture",
    description:
      "The best choice for agriculture, equipped with a multispectral camera for crop health and NDVI mapping.",
    tags: ["Multispectral", "NDVI", "Crop Health"],
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

export default function Equipment() {
  return (
    <section id="equipment" className="py-20 md:py-28 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-2xl"
        >
          <span className="inline-block rounded-full border border-tech-blue/20 bg-tech-blue/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-tech-blue">
            Our Equipment
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
            Enterprise-grade drones for every mission
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            We use industry-leading hardware to ensure high accuracy, safety, and reliability across all our mapping and inspection flights.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {DRONES.map(({ icon: Icon, name, role, description, tags, accentColor }) => {
            const isBlue = accentColor === "blue";

            return (
              <motion.div
                key={name}
                variants={cardVariants}
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"
              >
                <div
                  className={`inline-flex rounded-xl p-3.5 ${
                    isBlue
                      ? "bg-tech-blue/10 text-tech-blue"
                      : "bg-agro-green/10 text-agro-green"
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-text-main">
                  {name}
                </h3>
                <div className="text-sm font-semibold text-text-muted mt-1">
                  {role}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors duration-200 ${
                        isBlue
                          ? "border-slate-200 bg-slate-50 text-text-muted group-hover:border-tech-blue/30 group-hover:text-tech-blue"
                          : "border-slate-200 bg-slate-50 text-text-muted group-hover:border-agro-green/30 group-hover:text-agro-green"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}