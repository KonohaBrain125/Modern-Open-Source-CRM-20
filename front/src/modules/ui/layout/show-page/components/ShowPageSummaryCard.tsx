import { Tooltip } from 'react-tooltip';
import styled from '@emotion/styled';
import { v4 as uuidV4 } from 'uuid';

import { Avatar } from '@/users/components/Avatar';
import {
  beautifyExactDate,
  beautifyPastDateRelativeToNow,
} from '~/utils/date-utils';

import { OverflowingTextWithTooltip } from '../../../tooltip/OverflowingTextWithTooltip';

type OwnProps = {
  id?: string;
  logoOrAvatar?: string;
  title: string;
  date: string;
  renderTitleEditComponent?: () => JSX.Element;
};

const StyledShowPageSummaryCard = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(3)}
    ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(3)};
`;

const StyledInfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
`;

const StyledDate = styled.div`
  color: ${({ theme }) => theme.font.color.tertiary};
  cursor: pointer;
`;

const StyledTitle = styled.div`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  max-width: 100%;
`;

const StyledTooltip = styled(Tooltip)`
  background-color: ${({ theme }) => theme.background.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.light};

  color: ${({ theme }) => theme.font.color.primary};

  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  padding: ${({ theme }) => theme.spacing(2)};
`;

export function ShowPageSummaryCard({
  id,
  logoOrAvatar,
  title,
  date,
  renderTitleEditComponent,
}: OwnProps) {
  const beautifiedCreatedAt =
    date !== '' ? beautifyPastDateRelativeToNow(date) : '';
  const exactCreatedAt = date !== '' ? beautifyExactDate(date) : '';
  const dateElementId = `date-id-${uuidV4()}`;

  return (
    <StyledShowPageSummaryCard>
      <Avatar
        avatarUrl={logoOrAvatar}
        size="xl"
        colorId={id}
        placeholder={title}
        type="rounded"
      />
      <StyledInfoContainer>
        <StyledTitle>
          {renderTitleEditComponent ? (
            renderTitleEditComponent()
          ) : (
            <OverflowingTextWithTooltip text={title} />
          )}
        </StyledTitle>
        <StyledDate id={dateElementId}>
          Added {beautifiedCreatedAt} ago
        </StyledDate>
        <StyledTooltip
          anchorSelect={`#${dateElementId}`}
          content={exactCreatedAt}
          clickable
          noArrow
          place="right"
        />
      </StyledInfoContainer>
    </StyledShowPageSummaryCard>
  );
}
