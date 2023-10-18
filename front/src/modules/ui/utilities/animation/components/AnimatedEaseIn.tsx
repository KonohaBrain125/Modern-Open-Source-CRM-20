import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';

import { AnimationDuration } from '@/ui/theme/constants/animation';

type AnimatedEaseInProps = Omit<
  React.ComponentProps<typeof motion.div>,
  'initial' | 'animated' | 'transition'
> & {
  duration?: AnimationDuration;
};

export const AnimatedEaseIn = ({
  children,
  duration = 'normal',
}: AnimatedEaseInProps) => {
  const theme = useTheme();
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const transition = {
    ease: 'linear',
    duration: theme.animation.duration[duration],
  };

  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
};
