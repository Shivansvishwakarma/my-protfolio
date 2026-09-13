import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

const links = [
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Process",
    href: "#process",
  },
];

const menuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
  },

  visible: {
    opacity: 1,
    height: "auto",

    transition: {
      duration: 0.35,
      staggerChildren: 0.06,
    },
  },

  exit: {
    opacity: 0,
    height: 0,

    transition: {
      duration: 0.25,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
};

function Navbar() {
  const [open, setOpen] =
    useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 pt-5 lg:px-10">
        <div
          className="
            flex
            items-center
            justify-between
            rounded-full
            border
            border-white/10
            bg-black/60
            px-5
            py-3
            backdrop-blur-xl
          "
        >
          {/* LOGO */}

          <a
            href="#top"
            className="
              font-mono
              text-sm
              font-bold
              tracking-tight
            "
          >
            sv
            <span className="text-emerald-400">
              .
            </span>
          </a>

          {/* DESKTOP */}

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-xs
                  text-zinc-500
                  transition-colors
                  hover:text-white
                "
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="
                group
                flex
                items-center
                gap-2
                text-xs
                text-white
              "
            >
              Let's talk

              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={() =>
              setOpen((value) => !value)
            }
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              md:hidden
            "
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={16} />
            ) : (
              <Menu size={16} />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}

        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="
                mt-2
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-black/90
                backdrop-blur-xl
                md:hidden
              "
            >
              <div className="flex flex-col p-5">
                {links.map((link) => (
                  <motion.a
                    key={link.name}
                    variants={itemVariants}
                    href={link.href}
                    onClick={() =>
                      setOpen(false)
                    }
                    className="
                      border-b
                      border-white/10
                      py-4
                      text-lg
                    "
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.a
                  variants={itemVariants}
                  href="#contact"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="
                    py-4
                    text-lg
                    text-emerald-400
                  "
                >
                  Let's talk →
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;