"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  accentColor: "blue" | "green";
};

const PLANS: Plan[] = [
  {
    name: "Drone Maps",
    price: "1,900",
    description: "High-resolution orthomosaics and topography.",
    features: [
      "Orthomosaic Maps",
      "Elevation Models (DSM/DTM)",
      "CAD/GIS Ready Exports",
      "Basic Distance & Area Measurements"
    ],
    accentColor: "blue",
  },
  {
    name: "Agricultural Data",
    price: "2,500",
    description: "Multispectral analysis for precision farming.",
    features: [
      "NDVI & Crop Health Analytics",
      "Multispectral Imaging",
      "Irrigation Stress Detection",
      "Field Boundary Mapping"
    ],
    isPopular: true,
    accentColor: "green",
  },
  {
    name: "3D Models & Inspection",
    price: "2,900",
    description: "Detailed digital twins and structural scanning.",
    features: [
      "High-Density Point Clouds",
      "3D Digital Twins",
      "Asset Tracking & Progress",
      "Visual Inspection Imagery"
    ],
    accentColor: "blue",
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

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-slate-50/50 -skew-y-2 transform origin-top-left -z-10" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block rounded-full border border-tech-blue/20 bg-tech-blue/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-tech-blue">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
            Transparent pricing for your projects
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            All prices are starting rates and may vary based on site location, total area size, and specific deliverable requirements.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {PLANS.map((plan) => {
            const isBlue = plan.accentColor === "blue";

            return (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                className={`relative rounded-3xl border bg-white p-8 shadow-sm flex flex-col ${
                  plan.isPopular 
                    ? "border-agro-green shadow-lg shadow-agro-green/10 scale-100 lg:scale-105 z-10" 
                    : "border-slate-200/80 hover:border-slate-300 transition-colors"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-agro-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-text-main">{plan.name}</h3>
                  <p className="text-sm text-text-muted mt-2">{plan.description}</p>
                </div>

                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-text-muted">From</span>
                  <span className="text-4xl font-extrabold tracking-tight text-text-main">
                    ₾{plan.price}
                  </span>
                </div>

                <Link
                  href="#contact"
                  className={`w-full inline-flex justify-center items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    plan.isPopular
                      ? "bg-agro-green text-white hover:bg-agro-green/90 shadow-md"
                      : "bg-slate-100 text-text-main hover:bg-slate-200"
                  }`}
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <ul className="mt-8 space-y-4 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-text-muted">
                      <Check className={`h-5 w-5 shrink-0 ${isBlue ? "text-tech-blue" : "text-agro-green"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}