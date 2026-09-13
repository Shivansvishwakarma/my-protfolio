import { motion } from "motion/react";

import {
  ArrowUpRight,
} from "lucide-react";

import CustomCursor from "./components/CustomCursor";
import Magnetic from "./components/Magnetic";
import Navbar from "./components/Navbar";
import RevealText from "./components/RevealText";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern responsive websites and web applications built with React and scalable frontend architecture.",
    },

    {
      number: "02",
      title: "Full-Stack Development",
      description:
        "Frontend, APIs, databases and backend systems connected into one working product.",
    },

    {
      number: "03",
      title: "Interactive Experiences",
      description:
        "Motion, 3D and interactive interfaces for products that need something beyond a standard website.",
    },

    {
      number: "04",
      title: "Enterprise Systems",
      description:
        "Business applications, SAP development and enterprise-focused solutions.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      text:
        "Figure out the actual problem before touching the code.",
    },

    {
      number: "02",
      title: "Design",
      text:
        "Turn the idea into a clear interface and technical direction.",
    },

    {
      number: "03",
      title: "Build",
      text:
        "Develop the product with scalable and maintainable architecture.",
    },

    {
      number: "04",
      title: "Refine",
      text:
        "Test, optimize and polish until the rough edges stop screaming.",
    },
  ];

  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-[#050505]
        text-white
      "
    >
      <CustomCursor />

      <Navbar />

      <main>
        {/* HERO */}

        <Hero />

        {/* PROJECTS */}

        <Projects />

        {/* -------------------------------- */}
        {/* ABOUT / CAPABILITIES */}
        {/* -------------------------------- */}

        <section
          id="about"
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
                grid
                gap-16
                lg:grid-cols-[0.8fr_1.2fr]
              "
            >
              {/* LEFT */}

              <div>
                <p className="section-label">
                  02 / CAPABILITIES
                </p>

                <RevealText>
                  <h2
                    className="
                      mt-6
                      max-w-lg
                      text-5xl
                      font-semibold
                      tracking-tight
                      sm:text-6xl
                    "
                  >
                    More than just
                    <span className="text-zinc-600">
                      {" "}
                      pretty screens.
                    </span>
                  </h2>
                </RevealText>
              </div>

              {/* RIGHT */}

              <div className="space-y-12">
                <p
                  className="
                    max-w-2xl
                    text-xl
                    leading-9
                    text-zinc-400
                  "
                >
                  I build digital products where
                  design, engineering and
                  functionality actually work
                  together.
                </p>

                <div
                  className="
                    grid
                    gap-8
                    sm:grid-cols-2
                  "
                >
                  {services.map(
                    (service) => (
                      <div
                        key={service.number}
                        className="
                          border-t
                          border-white/10
                          pt-5
                        "
                      >
                        <div
                          className="
                            flex
                            items-start
                            justify-between
                            gap-5
                          "
                        >
                          <span
                            className="
                              font-mono
                              text-xs
                              text-emerald-400
                            "
                          >
                            {service.number}
                          </span>

                          <h3
                            className="
                              text-xl
                              font-medium
                              text-right
                            "
                          >
                            {service.title}
                          </h3>
                        </div>

                        <p
                          className="
                            mt-5
                            text-sm
                            leading-7
                            text-zinc-500
                          "
                        >
                          {service.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------- */}
        {/* PROCESS */}
        {/* -------------------------------- */}

        <section
          id="process"
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
                grid
                gap-16
                lg:grid-cols-[0.7fr_1.3fr]
              "
            >
              {/* LEFT */}

              <div>
                <p className="section-label">
                  03 / PROCESS
                </p>

                <RevealText>
                  <h2
                    className="
                      mt-6
                      text-5xl
                      font-semibold
                      tracking-tight
                      sm:text-6xl
                    "
                  >
                    From
                    <br />

                    <span className="text-zinc-600">
                      idea →
                    </span>

                    <br />

                    product.
                  </h2>
                </RevealText>
              </div>

              {/* RIGHT */}

              <div>
                {process.map(
                  (step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{
                        opacity: 0,
                        x: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.5,
                      }}
                      transition={{
                        duration: 0.6,
                        delay:
                          index * 0.1,
                      }}
                      className="
                        group
                        grid
                        grid-cols-[60px_1fr]
                        gap-6
                        border-t
                        border-white/10
                        py-8
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-xs
                          text-zinc-600
                        "
                      >
                        {step.number}
                      </span>

                      <div>
                        <h3
                          className="
                            text-2xl
                            font-medium
                            transition-colors
                            group-hover:text-emerald-400
                          "
                        >
                          {step.title}
                        </h3>

                        <p
                          className="
                            mt-3
                            max-w-xl
                            text-sm
                            leading-7
                            text-zinc-500
                          "
                        >
                          {step.text}
                        </p>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------- */}
        {/* MARQUEE */}
        {/* -------------------------------- */}

        <section
          className="
            overflow-hidden
            border-y
            border-white/10
            py-8
          "
        >
          <div className="marquee">
            <div className="marquee-track">
              <span>BUILD</span>
              <span>DESIGN</span>
              <span>ENGINEER</span>
              <span>DEPLOY</span>

              <span>BUILD</span>
              <span>DESIGN</span>
              <span>ENGINEER</span>
              <span>DEPLOY</span>
            </div>
          </div>
        </section>

        {/* -------------------------------- */}
        {/* CONTACT */}
        {/* -------------------------------- */}

        <section id="contact">
          <div
            className="
              mx-auto
              max-w-7xl
              px-6
              py-40
              lg:px-10
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-emerald-400/20
                bg-emerald-400/[0.04]
                p-8
                sm:p-12
                lg:p-20
              "
            >
              {/* GLOW */}

              <div
                className="
                  absolute
                  -right-32
                  -top-32
                  h-96
                  w-96
                  rounded-full
                  bg-emerald-400/10
                  blur-[100px]
                "
              />

              <div className="relative z-10">
                <p className="section-label">
                  04 / CONTACT
                </p>

                <RevealText>
                  <h2
                    className="
                      mt-8
                      max-w-4xl
                      text-5xl
                      font-semibold
                      tracking-tight
                      sm:text-7xl
                      lg:text-8xl
                    "
                  >
                    Have a project
                    <span className="text-emerald-400">
                      {" "}
                      in mind?
                    </span>
                  </h2>
                </RevealText>

                <p
                  className="
                    mt-8
                    max-w-xl
                    text-lg
                    leading-8
                    text-zinc-500
                  "
                >
                  Tell me what you're building,
                  what problem you're solving,
                  and where you want it to go.
                </p>

                <Magnetic>
                  <a
                    href="mailto:vishwakarmashivansh147@gmail.com"
                    className="
                      mt-10
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white
                      px-7
                      py-4
                      text-sm
                      font-medium
                      text-black
                      transition-transform
                      hover:scale-105
                    "
                  >
                    Start a conversation

                    <ArrowUpRight
                      size={16}
                    />
                  </a>
                </Magnetic>

                {/* SOCIALS */}

                <div
                  className="
                    mt-10
                    flex
                    flex-wrap
                    gap-6
                  "
                >
                  <a
                    href="https://github.com/Shivansvishwakarma"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-sm
                      text-zinc-500
                      transition-colors
                      hover:text-white
                    "
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shivans-vishwakarma-4b90542b3/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-sm
                      text-zinc-500
                      transition-colors
                      hover:text-white
                    "
                  >
                    LinkedIn ↗
                  </a>

                  <a
                    href="mailto:vishwakarmashivansh147@gmail.com"
                    className="
                      text-sm
                      text-zinc-500
                      transition-colors
                      hover:text-white
                    "
                  >
                    Email ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* -------------------------------- */}
      {/* FOOTER */}
      {/* -------------------------------- */}

      <footer className="border-t border-white/10">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-4
            px-6
            py-8
            text-xs
            text-zinc-600
            sm:flex-row
            sm:items-center
            sm:justify-between
            lg:px-10
          "
        >
          <span>
            © 2026 Shivans Vishwakarma.
          </span>

          <span className="font-mono">
            BUILT WITH REACT / THREE / MOTION
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;