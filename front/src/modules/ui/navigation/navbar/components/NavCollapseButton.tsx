import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';

import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightCollapse,
} from '@/ui/display/icon';
import { IconButton } from '@/ui/input/button/components/IconButton';
import { isNavbarOpenedState } from '@/ui/layout/states/isNavbarOpenedState';

const StyledCollapseButton = styled(motion.div)`
  align-items: center;
  background: inherit;
  border: 0;
  &:hover {
    background: ${({ theme }) => theme.background.quaternary};
  }
  border-radius: ${({ theme }) => theme.border.radius.md};

  color: ${({ theme }) => theme.font.color.light};
  cursor: pointer;

  display: flex;
  height: 24px;
  justify-content: center;

  padding: 0;

  user-select: none;
  width: 24px;
`;

type NavCollapseButtonProps = {
  direction?: 'left' | 'right';
  show?: boolean;
};

const NavCollapseButton = ({
  direction = 'left',
  show = true,
}: NavCollapseButtonProps) => {
  const [isNavbarOpened, setIsNavbarOpened] =
    useRecoilState(isNavbarOpenedState);

  const iconSize = 'small';
  const theme = useTheme();

  return (
    <>
      <StyledCollapseButton
        animate={{
          opacity: show ? 1 : 0,
        }}
        transition={{
          duration: theme.animation.duration.normal,
        }}
        onClick={() => setIsNavbarOpened(!isNavbarOpened)}
      >
        <IconButton
          Icon={
            direction === 'left'
              ? IconLayoutSidebarLeftCollapse
              : IconLayoutSidebarRightCollapse
          }
          variant="tertiary"
          size={iconSize}
        />
      </StyledCollapseButton>
    </>
  );
};

export default NavCollapseButton;
