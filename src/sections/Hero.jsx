import { motion } from "motion/react";

import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import HeroScene from "../components/HeroScene";
import Magnetic from "../components/Magnetic";

function Hero() {
  return (
    <section
      id="top"
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[600px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-emerald-500/[0.06]
            blur-[140px]
          "
        />

        <div
          className="
            grid-pattern
            absolute
            inset-0
            opacity-[0.18]
          "
        />

        <div
          className="
            noise
            absolute
            inset-0
            opacity-[0.025]
          "
        />
      </div>

      <div
        className="
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          justify-center
          px-6
          pb-16
          pt-32
          lg:px-10
        "
      >
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* LEFT */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                mb-8
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  status-dot
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                "
              />

              <span
                className="
                  font-mono
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-zinc-500
                "
              >
                Available for selected projects
              </span>
            </motion.div>

            {/* TITLE */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="
                max-w-5xl
                text-[15vw]
                font-semibold
                leading-[0.82]
                tracking-[-0.07em]
                sm:text-8xl
                lg:text-[8.2rem]
              "
            >
              I build
              <br />

              <span className="text-zinc-600">
                digital
              </span>

              <br />

              <span className="text-outline">
                systems.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="
                mt-10
                flex
                flex-col
                gap-6
                sm:flex-row
                sm:items-center
              "
            >
              <p
                className="
                  max-w-md
                  text-sm
                  leading-7
                  text-zinc-500
                "
              >
                Full-stack developer focused on
                building useful, scalable and
                visually distinct digital products.
              </p>

              <Magnetic>
                <a
                  href="#work"
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    px-5
                    py-3
                    text-xs
                    transition-all
                    hover:border-emerald-400
                    hover:bg-emerald-400
                    hover:text-black
                  "
                >
                  View selected work

                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* 3D */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="relative"
          >
            <HeroScene />

            <div
              className="
                pointer-events-none
                absolute
                bottom-8
                left-4
                font-mono
                text-[10px]
                uppercase
                tracking-widest
                text-zinc-700
              "
            >
              SYSTEM / CORE_01
            </div>

            <div
              className="
                pointer-events-none
                absolute
                right-4
                top-8
                text-right
                font-mono
                text-[10px]
                uppercase
                tracking-widest
                text-zinc-700
              "
            >
              React
              <br />
              Three.js
              <br />
              Motion
            </div>
          </motion.div>
        </div>

        {/* BOTTOM METADATA */}

        <div
          className="
            mt-16
            flex
            items-end
            justify-between
            border-t
            border-white/10
            pt-6
          "
        >
          <div
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-widest
              text-zinc-700
            "
          >
            INDIA / 2026
          </div>

          <motion.a
            href="#work"
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="text-zinc-500"
          >
            <ArrowDown size={18} />
          </motion.a>

          <div
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-widest
              text-zinc-700
            "
          >
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;