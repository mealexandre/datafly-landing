"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

type Service = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
  accentColor: "blue" | "green";
  objectPosition?: string;
};

const SERVICES: Service[] = [
  {
    imageSrc: "/service-mapping.jpg",
    imageAlt: "Aerial Mapping & Topographic Surveys",
    title: "Aerial Mapping & Topographic Surveys",
    description:
      "Detailed aerial maps and elevation models for site planning, land development, and engineering work.",
    tags: ["Aerial Maps", "Elevation Models", "CAD & GIS"],
    accentColor: "blue",
    objectPosition: "object-center",
  },
  {
    imageSrc: "/service-3d.jpg",
    imageAlt: "3D Models & Asset Inspection",
    title: "3D Models & Asset Inspection",
    description:
      "3D models and inspection imagery to document infrastructure, map assets, and monitor on-site changes.",
    tags: ["3D Modeling", "Inspection Imagery", "Asset Mapping"],
    accentColor: "blue",
    objectPosition: "object-center",
  },
  {
    imageSrc: "/service-agri.jpg",
    imageAlt: "Agricultural Mapping & Crop Analysis",
    title: "Agricultural Mapping & Crop Analysis",
    description:
      "Multispectral imagery, NDVI maps, and crop analysis to assess crop condition and identify areas for closer inspection.",
    tags: ["Multispectral Imagery", "NDVI Maps", "Crop Analysis"],
    accentColor: "green",
    objectPosition: "object-[50%_35%]", // ცენტრალურ/ეკრანის ნაწილზე ფოკუსირება
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

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
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
            Our Services
          </span>
          
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
            Maps, Models and Agricultural Data
          </h2>
          
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            We plan each flight around your site and the information you need, then process the data into maps, models, and analysis for your project.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 md:grid-cols-3 items-stretch"
        >
          {SERVICES.map(({ imageSrc, imageAlt, title, description, tags, accentColor, objectPosition }) => {
            const isBlue = accentColor === "blue";

            return (
              <motion.div
                key={title}
                variants={cardVariants}
                className="group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative mb-5 h-48 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover ${objectPosition || "object-center"} transition-transform duration-500 group-hover:scale-105`}
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-grow flex-col">
                  {/* სათაური: ეტევა 1 ხაზზე */}
                  <h3 className="text-lg font-bold text-text-main sm:text-xl tracking-tight">
                    {title}
                  </h3>

                  {/* აღწერა */}
                  <p className="mt-2.5 text-sm leading-relaxed text-text-muted">
                    {description}
                  </p>
                </div>

                {/* ტეგები: ჩაჯდა 1-2 ხაზზე ჩამოჭრის გარეშე */}
                <div className="mt-5 flex flex-wrap gap-1.5 pt-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors duration-200 ${
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