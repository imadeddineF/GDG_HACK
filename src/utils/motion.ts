interface Transition {
  type: string;
  stiffness?: number;
  damping?: number;
  delay?: number;
  duration?: number;
  ease?: string;
}

interface Variant {
  hidden: {
    opacity: number;
    y: number;
    transition?: Transition;
  };
  show: {
    opacity: number;
    y: number;
    transition?: Transition;
  };
}

export const navVariants: Variant = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.02,
    },
  },
};

export const textVariant2: Variant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const footerVariants: Variant = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.02,
    },
  },
};
