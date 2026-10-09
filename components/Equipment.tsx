"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

type Drone = {
  imageSrc: string;
  name: string;
  role: string;
  description: string;
  tags: string[];
  accentColor: "blue" | "green";
};

const DRONES: Drone[] = [
  {
    imageSrc: "/mini.jpg", // დარწმუნდი რომ public ფოლდერში ეს ფაილი გაქვს
    name: "DJI Mini 5 Pro",
    role: "Aerial Imagery & Visual Inspection",
    description:
      "A compact drone for aerial photography, site overviews, and visual inspection imagery.",
    tags: ["Compact", "Fast Deployment", "Visual Inspection"],
    accentColor: "blue",
  },
  {
    imageSrc: "/matrice.jpg", // დარწმუნდი რომ public ფოლდერში ეს ფაილი გაქვს
    name: "DJI Matrice 4E",
    role: "Surveying & Mapping",
    description:
      "A survey and mapping drone with RTK positioning and a mechanical-shutter camera for detailed maps and 3D models.",
    tags: ["RTK Precision", "Large Scale", "Topography"],
    accentColor: "blue",
  },
  {
    imageSrc: "/mavic.jpg", // დარწმუნდი რომ public ფოლდერში ეს ფაილი გაქვს
    name: "DJI Mavic 3M",
    role: "Multispectral Agriculture",
    description:
      "Captures RGB and multispectral imagery for NDVI mapping, crop analysis, and field monitoring.",
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
            Our DJI Drone Fleet
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            We select the drone and camera system to suit your site, the work required, and the data you need.
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
          {DRONES.map(({ imageSrc, name, role, description, tags, accentColor }) => {
            const isBlue = accentColor === "blue";

            return (
              <motion.div
                key={name}
                variants={cardVariants}
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md overflow-hidden flex flex-col"
              >
                {/* Image Section - ჩაანაცვლა აიქონები */}
                <div className="relative h-48 w-full bg-slate-100">
                  <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-text-main">
                    {name}
                  </h3>
                  <div className="text-sm font-semibold text-text-muted mt-1">
                    {role}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted flex-1">
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
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}