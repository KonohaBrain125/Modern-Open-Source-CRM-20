import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { IconCurrencyDollar } from '@tabler/icons-react';

import { RecoilScope } from '@/recoil-scope/components/RecoilScope';
import { InplaceDateInput } from '@/ui/components/inplace-input/types/InplaceDateInput';
import { InplaceTextInput } from '@/ui/components/inplace-input/types/InplaceTextInput';

import { Company, PipelineProgress } from '../../../generated/graphql';
import { Checkbox } from '../../ui/components/form/Checkbox';
import { IconCalendarEvent } from '../../ui/icons';
import { getLogoUrlFromDomainName } from '../../utils/utils';

const StyledBoardCard = styled.div<{ selected: boolean }>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.selectedCard : theme.background.secondary};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  color: ${({ theme }) => theme.font.color.primary};
  &:hover {
    background-color: ${({ theme, selected }) =>
      selected ? theme.selectedCardHover : theme.background.tertiary};
  }
  cursor: pointer;
`;

const StyledBoardCardWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

const StyledBoardCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  height: 24px;
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  padding-top: ${({ theme }) => theme.spacing(2)};
  img {
    height: ${({ theme }) => theme.icon.size.md}px;
    margin-right: ${({ theme }) => theme.spacing(2)};
    object-fit: cover;
    width: ${({ theme }) => theme.icon.size.md}px;
  }
`;
const StyledBoardCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  span {
    align-items: center;
    display: flex;
    flex-direction: row;
    svg {
      color: ${({ theme }) => theme.font.color.tertiary};
      margin-right: ${({ theme }) => theme.spacing(2)};
    }
  }
`;

type CompanyProp = Pick<
  Company,
  'id' | 'name' | 'domainName' | 'employees' | 'accountOwner'
>;

type PipelineProgressProp = Pick<
  PipelineProgress,
  'id' | 'amount' | 'closeDate'
>;

export function CompanyBoardCard({
  company,
  pipelineProgress,
  selected,
  onSelect,
  onCardUpdate,
}: {
  company: CompanyProp;
  pipelineProgress: PipelineProgressProp;
  selected: boolean;
  onSelect: (company: CompanyProp) => void;
  onCardUpdate: (pipelineProgress: PipelineProgressProp) => Promise<void>;
}) {
  const theme = useTheme();
  return (
    <StyledBoardCardWrapper>
      <StyledBoardCard selected={selected}>
        <StyledBoardCardHeader>
          <img
            src={getLogoUrlFromDomainName(company.domainName).toString()}
            alt={`${company.name}-company-logo`}
          />
          <span>{company.name}</span>
          <div style={{ display: 'flex', flex: 1 }} />
          <Checkbox checked={selected} onChange={() => onSelect(company)} />
        </StyledBoardCardHeader>
        <StyledBoardCardBody>
          <span>
            <IconCurrencyDollar size={theme.icon.size.md} />
            <RecoilScope>
              <InplaceTextInput
                content={pipelineProgress.amount?.toString() || ''}
                placeholder="Opportunity amount"
                changeHandler={(value) =>
                  onCardUpdate({
                    ...pipelineProgress,
                    amount: parseInt(value),
                  })
                }
              />
            </RecoilScope>
          </span>
          <span>
            <IconCalendarEvent size={theme.icon.size.md} />
            <RecoilScope>
              <InplaceDateInput
                value={new Date(pipelineProgress.closeDate || Date.now())}
                changeHandler={(value) => {
                  onCardUpdate({
                    ...pipelineProgress,
                    closeDate: value.toISOString(),
                  });
                }}
              />
            </RecoilScope>
          </span>
        </StyledBoardCardBody>
      </StyledBoardCard>
    </StyledBoardCardWrapper>
  );
}
