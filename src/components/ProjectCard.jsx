import { motion } from "motion/react";

import {
  ArrowUpRight,
} from "lucide-react";

function ProjectCard({
  project,
  index,
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
      }}
      className="
        project-card
        group
        relative
        min-h-[420px]
        overflow-hidden
        rounded-[2rem]
        border
        border-white/10
        bg-[#0a0a0a]
        p-7
      "
    >
      {/* BACKGROUND NUMBER */}

      <span
        className="
          absolute
          -right-4
          -top-12
          text-[12rem]
          font-black
          leading-none
          text-white/[0.025]
        "
      >
        0{index + 1}
      </span>

      <div className="relative z-10 flex h-full flex-col">
        {/* HEADER */}

        <div className="flex items-start justify-between">
          <span className="font-mono text-xs text-zinc-700">
            0{index + 1}
          </span>

          <motion.div
            whileHover={{
              rotate: 45,
            }}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              transition-all
              group-hover:border-emerald-400
              group-hover:bg-emerald-400
              group-hover:text-black
            "
          >
            <ArrowUpRight size={17} />
          </motion.div>
        </div>

        {/* CONTENT */}

        <div className="mt-auto">
          <p
            className="
              mb-3
              font-mono
              text-xs
              uppercase
              tracking-widest
              text-emerald-400
            "
          >
            {project.category}
          </p>

          <h3 className="text-4xl font-semibold tracking-tight">
            {project.title}
          </h3>

          <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
            {project.description}
          </p>

          {/* TECH */}

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map(
              (technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-white/10
                    px-3
                    py-1.5
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-wide
                    text-zinc-500
                  "
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* GLOW */}

      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-32
          w-64
          -translate-x-1/2
          rounded-full
          bg-emerald-500/10
          blur-[70px]
        "
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
      />
    </motion.article>
  );
}

export default ProjectCard;