import { useCallback, useMemo, useRef } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { IconAlertTriangle, IconX } from '@/ui/display/icon';
import {
  ProgressBar,
  ProgressBarControls,
} from '@/ui/feedback/progress-bar/components/ProgressBar';
import { rgba } from '@/ui/theme/constants/colors';

import { usePausableTimeout } from '../hooks/usePausableTimeout';

const StyledMotionContainer = styled.div<Pick<SnackBarProps, 'variant'>>`
  align-items: center;
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'error':
        return theme.snackBar.error.background;
      case 'success':
        return theme.snackBar.success.background;
      case 'info':
      default:
        return theme.color.gray80;
    }
  }};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  box-shadow: ${({ theme }) => theme.boxShadow.strong};
  color: ${({ theme, variant }) => {
    switch (variant) {
      case 'error':
        return theme.snackBar.error.color;
      case 'success':
        return theme.snackBar.success.color;
      case 'info':
      default:
        return theme.grayScale.gray0;
    }
  }};
  cursor: pointer;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing(2)};
  pointer-events: auto;
  position: relative;
`;

const StyledIconContainer = styled.div`
  display: flex;
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

const StyledProgressBarContainer = styled.div`
  height: 5px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledCloseButton = styled.button<Pick<SnackBarProps, 'variant'>>`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 12px;
  color: ${({ theme, variant }) => {
    switch (variant) {
      case 'error':
        return theme.color.red20;
      case 'success':
        return theme.color.turquoise20;
      case 'info':
      default:
        return theme.grayScale.gray0;
    }
  }};
  cursor: pointer;
  display: flex;
  height: 24px;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing(6)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(1)};
  width: 24px;

  &:hover {
    background-color: ${({ theme }) => rgba(theme.grayScale.gray0, 0.1)};
  }
`;

export type SnackbarVariant = 'info' | 'error' | 'success';

export interface SnackBarProps extends React.ComponentPropsWithoutRef<'div'> {
  role?: 'alert' | 'status';
  icon?: React.ReactNode;
  message?: string;
  allowDismiss?: boolean;
  duration?: number;
  variant?: SnackbarVariant;
  children?: React.ReactNode;
  onClose?: () => void;
}

export const SnackBar = ({
  role = 'status',
  icon: iconComponent,
  message,
  allowDismiss = true,
  duration = 6000,
  variant = 'info',
  children,
  onClose,
  id,
  title,
}: SnackBarProps) => {
  const theme = useTheme();

  // eslint-disable-next-line twenty/no-state-useref
  const progressBarRef = useRef<ProgressBarControls | null>(null);

  const closeSnackbar = useCallback(() => {
    onClose && onClose();
  }, [onClose]);

  const { pauseTimeout, resumeTimeout } = usePausableTimeout(
    closeSnackbar,
    duration,
  );

  const icon = useMemo(() => {
    if (iconComponent) {
      return iconComponent;
    }

    switch (variant) {
      case 'error':
        return (
          <IconAlertTriangle aria-label="Error" size={theme.icon.size.md} />
        );
      case 'success':
      case 'info':
      default:
        return null;
    }
  }, [iconComponent, theme.icon.size.md, variant]);

  const onMouseEnter = () => {
    progressBarRef.current?.pause();
    pauseTimeout();
  };

  const onMouseLeave = () => {
    progressBarRef.current?.start();
    resumeTimeout();
  };

  return (
    <StyledMotionContainer
      aria-live={role === 'alert' ? 'assertive' : 'polite'}
      {...{ id, onMouseEnter, onMouseLeave, role, title, variant }}
    >
      <StyledProgressBarContainer>
        <ProgressBar
          ref={progressBarRef}
          barHeight={5}
          barColor={rgba(theme.grayScale.gray0, 0.3)}
          duration={duration}
        />
      </StyledProgressBarContainer>
      {icon && <StyledIconContainer>{icon}</StyledIconContainer>}
      {children ? children : message}
      {allowDismiss && (
        <StyledCloseButton variant={variant} onClick={closeSnackbar}>
          <IconX aria-label="Close" size={theme.icon.size.md} />
        </StyledCloseButton>
      )}
    </StyledMotionContainer>
  );
};
