import { motion } from "motion/react";

import ProjectCard from "../components/ProjectCard";
import RevealText from "../components/RevealText";

const projects = [
  {
    title: "Musicly",
    category: "Social Platform",
    description:
      "A campus-focused music social platform designed around discovering music, connecting students and building communities.",
    tech: [
      "React",
      "FastAPI",
      "Python",
    ],
  },

  {
    title: "ResQ AI",
    category: "AI / Disaster Response",
    description:
      "An AI-assisted disaster response platform combining satellite imagery, reports and environmental data to identify high-priority zones.",
    tech: [
      "React",
      "AI",
      "Python",
    ],
  },

  {
    title: "Leave Management",
    category: "Enterprise / SAP",
    description:
      "An employee leave management system built around enterprise workflows, manager approvals and leave balance tracking.",
    tech: [
      "SAP",
      "ABAP",
      "S/4HANA",
      "CDS",
    ],
  },
];

function Projects() {
  return (
    <section
      id="work"
      className="border-t border-white/10"
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          py-32
          lg:px-10
        "
      >
        <div
          className="
            mb-16
            flex
            flex-col
            justify-between
            gap-8
            sm:flex-row
            sm:items-end
          "
        >
          <div>
            <p className="section-label">
              01 / SELECTED WORK
            </p>

            <RevealText>
              <h2
                className="
                  mt-6
                  text-5xl
                  font-semibold
                  tracking-tight
                  sm:text-7xl
                "
              >
                Things I've
                <br />

                <span className="text-zinc-600">
                  built.
                </span>
              </h2>
            </RevealText>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              max-w-sm
              text-sm
              leading-7
              text-zinc-500
            "
          >
            A collection of experiments,
            products and systems focused on
            solving actual problems.
          </motion.p>
        </div>

        <div
          className="
            grid
            gap-6
            lg:grid-cols-2
          "
        >
          {projects.map(
            (project, index) => (
              <div
                key={project.title}
                className={
                  index === 2
                    ? "lg:col-span-2"
                    : ""
                }
              >
                <ProjectCard
                  project={project}
                  index={index}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;