import { useRef } from 'react';

import { DropdownMenuSearchInput } from '@/ui/layout/dropdown/components/DropdownMenuSearchInput';
import { StyledDropdownMenu } from '@/ui/layout/dropdown/components/StyledDropdownMenu';
import { StyledDropdownMenuSeparator } from '@/ui/layout/dropdown/components/StyledDropdownMenuSeparator';
import { useListenClickOutside } from '@/ui/utilities/pointer-event/hooks/useListenClickOutside';
import { isDefined } from '~/utils/isDefined';

import { useEntitySelectSearch } from '../hooks/useEntitySelectSearch';
import { EntityForSelect } from '../types/EntityForSelect';

import {
  SingleEntitySelectBase,
  SingleEntitySelectBaseProps,
} from './SingleEntitySelectBase';

export type SingleEntitySelectProps<
  CustomEntityForSelect extends EntityForSelect,
> = {
  disableBackgroundBlur?: boolean;
  onCreate?: () => void;
  width?: number;
} & Pick<
  SingleEntitySelectBaseProps<CustomEntityForSelect>,
  | 'EmptyIcon'
  | 'emptyLabel'
  | 'entitiesToSelect'
  | 'loading'
  | 'onCancel'
  | 'onEntitySelected'
  | 'selectedEntity'
>;

export const SingleEntitySelect = <
  CustomEntityForSelect extends EntityForSelect,
>({
  EmptyIcon,
  disableBackgroundBlur = false,
  emptyLabel,
  entitiesToSelect,
  loading,
  onCancel,
  onCreate,
  onEntitySelected,
  selectedEntity,
  width = 200,
}: SingleEntitySelectProps<CustomEntityForSelect>) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { searchFilter, handleSearchFilterChange } = useEntitySelectSearch();

  const showCreateButton = isDefined(onCreate) && searchFilter !== '';

  useListenClickOutside({
    refs: [containerRef],
    callback: (event) => {
      event.stopImmediatePropagation();

      onCancel?.();
    },
  });

  return (
    <StyledDropdownMenu
      disableBlur={disableBackgroundBlur}
      ref={containerRef}
      width={width}
      data-select-disable
    >
      <DropdownMenuSearchInput
        value={searchFilter}
        onChange={handleSearchFilterChange}
        autoFocus
      />
      <StyledDropdownMenuSeparator />
      <SingleEntitySelectBase
        {...{
          EmptyIcon,
          emptyLabel,
          entitiesToSelect,
          loading,
          onCancel,
          onCreate,
          onEntitySelected,
          selectedEntity,
          showCreateButton,
        }}
      />
    </StyledDropdownMenu>
  );
};
