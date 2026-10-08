"use client";

import { CheckCircle2, ShieldCheck, Target, Globe2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const HIGHLIGHTS = [
  {
    icon: Target,
    title: "Scoped to Your Project",
    description:
      "Before we fly, we agree on the area to cover, the level of detail, and the outputs your team needs.",
    color: "blue",
  },
  {
    icon: CheckCircle2,
    title: "Agricultural Analysis",
    description:
      "We process multispectral imagery into NDVI maps and crop analysis to help you assess variation across your fields.",
    color: "green",
  },
  {
    icon: ShieldCheck,
    title: "Field Operations",
    description:
      "We plan flights around site access, weather, and project requirements, then process the captured data for delivery.",
    color: "blue",
  },
  {
    icon: Globe2,
    title: "Backed by December32",
    description:
      "Developed within the December32 Venture Studio, combining drone expertise with commercial and operational support.",
    color: "green",
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

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-7"
          >
            <span className="inline-block rounded-full border border-tech-blue/20 bg-tech-blue/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-tech-blue">
              About DataFly
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-main sm:text-4xl lg:text-5xl">
              Drone Mapping and Analysis from Georgia
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-5 text-base sm:text-lg leading-relaxed text-text-muted"
          >
            DataFly is a December32 venture providing drone mapping, agricultural analysis, and infrastructure inspection. Based in Georgia, we handle data capture and processing for teams working on land, crops, and built assets.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {HIGHLIGHTS.map(({ icon: Icon, title, description, color }) => {
            const isBlue = color === "blue";

            return (
              <motion.div
                key={title}
                variants={cardVariants}
                className="group relative rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`inline-flex rounded-xl p-3 ${
                      isBlue
                        ? "bg-tech-blue/10 text-tech-blue"
                        : "bg-agro-green/10 text-agro-green"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-text-main">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* December32 Studio Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-12 rounded-2xl border border-slate-200/80 bg-white/60 p-6 sm:p-8 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-tech-blue">
              A December32 Venture
            </div>
            <h4 className="text-lg font-bold text-text-main mt-1">
              Part of the December32 Venture Studio
            </h4>
            <p className="text-sm text-text-muted mt-1 max-w-2xl">
              Based in Tbilisi, DataFly serves projects across Georgia. For work outside Georgia, contact us to discuss location, scope, and delivery.
            </p>
          </div>

          <div className="shrink-0 text-xs font-semibold text-text-muted bg-slate-100 px-4 py-2.5 rounded-lg border border-slate-200">
            December32 LLC
          </div>
        </motion.div>

      </div>
    </section>
  );
}