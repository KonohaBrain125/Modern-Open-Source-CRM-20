import styled from '@emotion/styled';

import { MatchColumnSelect } from '@/spreadsheet-import/components/core/MatchColumnSelect';
import { useRsi } from '@/spreadsheet-import/hooks/useRsi';
import { SelectOption } from '@/spreadsheet-import/types';
import { getFieldOptions } from '@/spreadsheet-import/utils/getFieldOptions';

import type {
  MatchedOptions,
  MatchedSelectColumn,
  MatchedSelectOptionsColumn,
} from '../MatchColumnsStep';

const Container = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  padding-left: ${({ theme }) => theme.spacing(2)};
`;

const SelectLabel = styled.span`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  padding-top: ${({ theme }) => theme.spacing(1)};
`;

interface Props<T> {
  option: MatchedOptions<T> | Partial<MatchedOptions<T>>;
  column: MatchedSelectColumn<T> | MatchedSelectOptionsColumn<T>;
  onSubChange: (val: T, index: number, option: string) => void;
}

export const SubMatchingSelect = <T extends string>({
  option,
  column,
  onSubChange,
}: Props<T>) => {
  const { fields } = useRsi<T>();
  const options = getFieldOptions(fields, column.value) as SelectOption[];
  const value = options.find((opt) => opt.value === option.value);

  return (
    <Container>
      <SelectLabel>{option.entry}</SelectLabel>
      <MatchColumnSelect
        value={value}
        placeholder="Select..."
        onChange={(value) =>
          onSubChange(value?.value as T, column.index, option.entry ?? '')
        }
        options={options}
        name={option.entry}
      />
    </Container>
  );
};
