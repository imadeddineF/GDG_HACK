interface Transition {
  type: string;
  stiffness?: number;
  damping?: number;
  delay?: number;
  duration?: number;
  ease?: string;
}

interface Variant {
  opacity: number;
  y: number;
  transition?: Transition;
}

interface Variants {
  hidden: Variant;
  show: Variant;
}

export const navVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.02,
    },
  },
} as const;

export const textVariant2: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.3,
      ease: 'easeIn',
    },
  },
} as const;

export const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.02,
    },
  },
} as const;
