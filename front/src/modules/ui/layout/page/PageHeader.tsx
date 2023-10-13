import { ComponentProps, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { IconChevronLeft } from '@/ui/display/icon/index';
import { IconComponent } from '@/ui/display/icon/types/IconComponent';
import { OverflowingTextWithTooltip } from '@/ui/display/tooltip/OverflowingTextWithTooltip';
import {
  IconButton,
  IconButtonSize,
} from '@/ui/input/button/components/IconButton';
import NavCollapseButton from '@/ui/navigation/navbar/components/NavCollapseButton';
import { useIsMobile } from '@/ui/utilities/responsive/hooks/useIsMobile';

import { isNavbarOpenedState } from '../states/isNavbarOpenedState';

export const PAGE_BAR_MIN_HEIGHT = 40;

const StyledTopBarContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.background.noisy};
  color: ${({ theme }) => theme.font.color.primary};
  display: flex;
  flex-direction: row;
  font-size: ${({ theme }) => theme.font.size.lg};
  justify-content: space-between;
  min-height: ${PAGE_BAR_MIN_HEIGHT}px;
  padding: ${({ theme }) => theme.spacing(2)};
  padding-left: 0;
  padding-right: ${({ theme }) => theme.spacing(3)};
  z-index: 20;
`;

const StyledLeftContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.font.size.md};
  margin-left: ${({ theme }) => theme.spacing(1)};
  max-width: 50%;
`;

const StyledTopBarButtonContainer = styled.div`
  margin-left: ${({ theme }) => theme.spacing(1)};
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

const StyledBackIconButton = styled(IconButton)`
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

const StyledTopBarIconStyledTitleContainer = styled.div<{
  hideLeftPadding?: boolean;
}>`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding-left: ${({ theme, hideLeftPadding }) =>
    hideLeftPadding ? theme.spacing(2) : undefined};
  width: 100%;
`;

const StyledPageActionContainer = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

type PageHeaderProps = ComponentProps<'div'> & {
  title: string;
  hasBackButton?: boolean;
  Icon: IconComponent;
  children?: JSX.Element | JSX.Element[];
};

export const PageHeader = ({
  title,
  hasBackButton,
  Icon,
  children,
}: PageHeaderProps) => {
  const navigate = useNavigate();
  const navigateBack = useCallback(() => navigate(-1), [navigate]);

  const isNavbarOpened = useRecoilValue(isNavbarOpenedState);

  const iconSize: IconButtonSize = useIsMobile() ? 'small' : 'medium';
  const theme = useTheme();

  return (
    <StyledTopBarContainer>
      <StyledLeftContainer>
        {!isNavbarOpened && (
          <StyledTopBarButtonContainer>
            <NavCollapseButton direction="right" />
          </StyledTopBarButtonContainer>
        )}
        {hasBackButton && (
          <StyledTopBarButtonContainer>
            <StyledBackIconButton
              Icon={IconChevronLeft}
              size={iconSize}
              onClick={navigateBack}
              variant="tertiary"
            />
          </StyledTopBarButtonContainer>
        )}
        <StyledTopBarIconStyledTitleContainer hideLeftPadding={!hasBackButton}>
          {Icon && <Icon size={theme.icon.size.md} />}
          <StyledTitleContainer data-testid="top-bar-title">
            <OverflowingTextWithTooltip text={title} />
          </StyledTitleContainer>
        </StyledTopBarIconStyledTitleContainer>
      </StyledLeftContainer>
      <StyledPageActionContainer>{children}</StyledPageActionContainer>
    </StyledTopBarContainer>
  );
};
