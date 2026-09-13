import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

import { useRef } from "react";

function Magnetic({
  children,
  strength = 0.25,
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
  });

  const handleMouseMove = (event) => {
    if (!ref.current) return;

    const rect =
      ref.current.getBoundingClientRect();

    const relativeX =
      event.clientX -
      rect.left -
      rect.width / 2;

    const relativeY =
      event.clientY -
      rect.top -
      rect.height / 2;

    x.set(relativeX * strength);
    y.set(relativeY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-fit"
    >
      {children}
    </motion.div>
  );
}

export default Magnetic;