import { useTheme } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import { AnimationDuration } from '@/ui/theme/constants/animation';

type AnimatedEaseInOutProps = {
  isOpen: boolean;
  children: React.ReactNode;
  duration?: AnimationDuration;
  marginBottom?: string;
  marginTop?: string;
};

export const AnimatedEaseInOut = ({
  children,
  isOpen,
  marginBottom,
  marginTop,
  duration = 'normal',
}: AnimatedEaseInOutProps) => {
  const theme = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            marginBottom: marginBottom ?? 0,
            marginTop: marginTop ?? 0,
            height: 0,
            opacity: 0,
          }}
          animate={{ height: 100, opacity: 1 }}
          exit={{ height: 0, opacity: 0, marginBottom: 0, marginTop: 0 }}
          transition={{
            duration: theme.animation.duration[duration],
            ease: 'easeInOut',
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
