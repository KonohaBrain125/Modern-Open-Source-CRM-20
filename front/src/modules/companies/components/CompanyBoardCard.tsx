import { ReactNode, useContext } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import { FieldContext } from '@/ui/data/field/contexts/FieldContext';
import { InlineCell } from '@/ui/data/inline-cell/components/InlineCell';
import { InlineCellHotkeyScope } from '@/ui/data/inline-cell/types/InlineCellHotkeyScope';
import { EntityChipVariant } from '@/ui/display/chip/components/EntityChip';
import { Checkbox, CheckboxVariant } from '@/ui/input/components/Checkbox';
import { BoardCardIdContext } from '@/ui/layout/board/contexts/BoardCardIdContext';
import { useBoardContext } from '@/ui/layout/board/hooks/useBoardContext';
import { useCurrentCardSelected } from '@/ui/layout/board/hooks/useCurrentCardSelected';
import { visibleBoardCardFieldsScopedSelector } from '@/ui/layout/board/states/selectors/visibleBoardCardFieldsScopedSelector';
import { useRecoilScopedValue } from '@/ui/utilities/recoil-scope/hooks/useRecoilScopedValue';
import { useUpdateOnePipelineProgressMutation } from '~/generated/graphql';
import { getLogoUrlFromDomainName } from '~/utils';

import { companyProgressesFamilyState } from '../states/companyProgressesFamilyState';

import { CompanyChip } from './CompanyChip';

const StyledBoardCard = styled.div<{ selected: boolean }>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.accent.quaternary : theme.background.secondary};
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.accent.secondary : theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  color: ${({ theme }) => theme.font.color.primary};
  &:hover {
    background-color: ${({ theme, selected }) =>
      selected && theme.accent.tertiary};
    border: 1px solid
      ${({ theme, selected }) =>
        selected ? theme.accent.primary : theme.border.color.medium};
  }
  cursor: pointer;

  .checkbox-container {
    opacity: ${({ selected }) => (selected ? 1 : 0)};
  }

  &:hover .checkbox-container {
    opacity: 1;
  }
`;

const StyledBoardCardWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  width: 100%;
`;

const StyledBoardCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  height: 24px;
  padding-bottom: ${({ theme }) => theme.spacing(1)};
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
  gap: ${({ theme }) => theme.spacing(0.5)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(2.5)};
  padding-right: ${({ theme }) => theme.spacing(2)};
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

const StyledCheckboxContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
`;

const StyledFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CompanyBoardCard = () => {
  const { BoardRecoilScopeContext } = useBoardContext();

  const { currentCardSelected, setCurrentCardSelected } =
    useCurrentCardSelected();
  const boardCardId = useContext(BoardCardIdContext);

  const [companyProgress] = useRecoilState(
    companyProgressesFamilyState(boardCardId ?? ''),
  );
  const { pipelineProgress, company } = companyProgress ?? {};

  const visibleBoardCardFields = useRecoilScopedValue(
    visibleBoardCardFieldsScopedSelector,
    BoardRecoilScopeContext,
  );

  // boardCardId check can be moved to a wrapper to avoid unnecessary logic above
  if (!company || !pipelineProgress || !boardCardId) {
    return null;
  }

  const PreventSelectOnClickContainer = ({
    children,
  }: {
    children: ReactNode;
  }) => (
    <StyledFieldContainer
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {children}
    </StyledFieldContainer>
  );

  return (
    <StyledBoardCardWrapper>
      <StyledBoardCard
        selected={currentCardSelected}
        onClick={() => setCurrentCardSelected(!currentCardSelected)}
      >
        <StyledBoardCardHeader>
          <CompanyChip
            id={company.id}
            name={company.name}
            pictureUrl={getLogoUrlFromDomainName(company.domainName)}
            variant={EntityChipVariant.Transparent}
          />
          <StyledCheckboxContainer className="checkbox-container">
            <Checkbox
              checked={currentCardSelected}
              onChange={() => setCurrentCardSelected(!currentCardSelected)}
              variant={CheckboxVariant.Secondary}
            />
          </StyledCheckboxContainer>
        </StyledBoardCardHeader>
        <StyledBoardCardBody>
          {visibleBoardCardFields.map((viewField) => (
            <PreventSelectOnClickContainer key={viewField.key}>
              <FieldContext.Provider
                value={{
                  entityId: boardCardId,
                  recoilScopeId: boardCardId + viewField.key,
                  fieldDefinition: {
                    key: viewField.key,
                    name: viewField.name,
                    Icon: viewField.Icon,
                    type: viewField.type,
                    metadata: viewField.metadata,
                    entityChipDisplayMapper: viewField.entityChipDisplayMapper,
                  },
                  useUpdateEntityMutation: useUpdateOnePipelineProgressMutation,
                  hotkeyScope: InlineCellHotkeyScope.InlineCell,
                }}
              >
                <InlineCell />
              </FieldContext.Provider>
            </PreventSelectOnClickContainer>
          ))}
        </StyledBoardCardBody>
      </StyledBoardCard>
    </StyledBoardCardWrapper>
  );
};
