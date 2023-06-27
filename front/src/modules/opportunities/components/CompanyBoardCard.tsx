import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { Company } from '../../../generated/graphql';
import { PersonChip } from '../../people/components/PersonChip';
import { IconCalendarEvent, IconUser, IconUsers } from '../../ui/icons';
import { getLogoUrlFromDomainName, humanReadableDate } from '../../utils/utils';

const StyledBoardCard = styled.div`
  background: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  color: ${({ theme }) => theme.font.color.primary};
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
  gap: ${({ theme }) => theme.spacing(2)};
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
  'id' | 'name' | 'domainName' | 'employees' | 'createdAt' | 'accountOwner'
>;

export function CompanyBoardCard({ company }: { company: CompanyProp }) {
  const theme = useTheme();
  return (
    <StyledBoardCardWrapper>
      <StyledBoardCard>
        <StyledBoardCardHeader>
          <img
            src={getLogoUrlFromDomainName(company.domainName).toString()}
            alt={`${company.name}-company-logo`}
          />
          <span>{company.name}</span>
        </StyledBoardCardHeader>
        <StyledBoardCardBody>
          <span>
            <IconUser size={theme.icon.size.md} />
            <PersonChip name={company.accountOwner?.displayName || ''} />
          </span>
          <span>
            <IconUsers size={theme.icon.size.md} /> {company.employees}
          </span>
          <span>
            <IconCalendarEvent size={theme.icon.size.md} />
            {humanReadableDate(new Date(company.createdAt as string))}
          </span>
        </StyledBoardCardBody>
      </StyledBoardCard>
    </StyledBoardCardWrapper>
  );
}
