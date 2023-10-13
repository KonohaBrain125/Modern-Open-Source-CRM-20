import { useRef } from 'react';
import { Key } from 'ts-key-enum';

import { IconPlus } from '@/ui/display/icon';
import { IconComponent } from '@/ui/display/icon/types/IconComponent';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { StyledDropdownMenuSeparator } from '@/ui/layout/dropdown/components/StyledDropdownMenuSeparator';
import { MenuItem } from '@/ui/navigation/menu-item/components/MenuItem';
import { MenuItemSelect } from '@/ui/navigation/menu-item/components/MenuItemSelect';
import { MenuItemSelectAvatar } from '@/ui/navigation/menu-item/components/MenuItemSelectAvatar';
import { useScopedHotkeys } from '@/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { Avatar } from '@/users/components/Avatar';
import { assertNotNull } from '~/utils/assert';
import { isNonEmptyString } from '~/utils/isNonEmptyString';

import { CreateButtonId, EmptyButtonId } from '../constants';
import { useEntitySelectScroll } from '../hooks/useEntitySelectScroll';
import { EntityForSelect } from '../types/EntityForSelect';
import { RelationPickerHotkeyScope } from '../types/RelationPickerHotkeyScope';

import { DropdownMenuSkeletonItem } from './skeletons/DropdownMenuSkeletonItem';
import { CreateNewButton } from './CreateNewButton';

export type SingleEntitySelectBaseProps<
  CustomEntityForSelect extends EntityForSelect,
> = {
  EmptyIcon?: IconComponent;
  emptyLabel?: string;
  entitiesToSelect: CustomEntityForSelect[];
  loading?: boolean;
  onCancel?: () => void;
  onEntitySelected: (entity?: CustomEntityForSelect) => void;
  selectedEntity?: CustomEntityForSelect;
  onCreate?: () => void;
  showCreateButton?: boolean;
  SelectAllIcon?: IconComponent;
  selectAllLabel?: string;
  isAllEntitySelected?: boolean;
  isAllEntitySelectShown?: boolean;
  onAllEntitySelected?: () => void;
};

export const SingleEntitySelectBase = <
  CustomEntityForSelect extends EntityForSelect,
>({
  EmptyIcon,
  emptyLabel,
  entitiesToSelect,
  loading,
  onCancel,
  onEntitySelected,
  selectedEntity,
  onCreate,
  showCreateButton,
  SelectAllIcon,
  selectAllLabel,
  isAllEntitySelected,
  isAllEntitySelectShown,
  onAllEntitySelected,
}: SingleEntitySelectBaseProps<CustomEntityForSelect>) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const entitiesInDropdown = [selectedEntity, ...entitiesToSelect].filter(
    (entity): entity is CustomEntityForSelect =>
      assertNotNull(entity) && isNonEmptyString(entity.name.trim()),
  );

  const { preselectedOptionId, resetScroll } = useEntitySelectScroll({
    selectableOptionIds: [
      EmptyButtonId,
      ...entitiesInDropdown.map((item) => item.id),
      ...(showCreateButton ? [CreateButtonId] : []),
    ],
    containerRef,
  });

  useScopedHotkeys(
    Key.Enter,
    () => {
      if (showCreateButton && preselectedOptionId === CreateButtonId) {
        onCreate?.();
      } else {
        const entity = entitiesInDropdown.findIndex(
          (entity) => entity.id === preselectedOptionId,
        );
        onEntitySelected(entitiesInDropdown[entity]);
      }

      resetScroll();
    },
    RelationPickerHotkeyScope.RelationPicker,
    [entitiesInDropdown, preselectedOptionId, onEntitySelected],
  );

  useScopedHotkeys(
    Key.Escape,
    () => {
      onCancel?.();
    },
    RelationPickerHotkeyScope.RelationPicker,
    [onCancel],
  );

  return (
    <div ref={containerRef}>
      <DropdownMenuItemsContainer hasMaxHeight>
        {loading ? (
          <DropdownMenuSkeletonItem />
        ) : entitiesInDropdown.length === 0 && !isAllEntitySelectShown ? (
          <MenuItem text="No result" />
        ) : (
          <>
            {isAllEntitySelectShown &&
              selectAllLabel &&
              onAllEntitySelected && (
                <MenuItemSelect
                  onClick={() => onAllEntitySelected()}
                  LeftIcon={SelectAllIcon}
                  text={selectAllLabel}
                  hovered={preselectedOptionId === EmptyButtonId}
                  selected={!!isAllEntitySelected}
                />
              )}
            {emptyLabel && (
              <MenuItemSelect
                onClick={() => onEntitySelected()}
                LeftIcon={EmptyIcon}
                text={emptyLabel}
                hovered={preselectedOptionId === EmptyButtonId}
                selected={!selectedEntity}
              />
            )}
            {entitiesInDropdown?.map((entity) => (
              <MenuItemSelectAvatar
                key={entity.id}
                testId="menu-item"
                selected={selectedEntity?.id === entity.id}
                onClick={() => onEntitySelected(entity)}
                text={entity.name}
                hovered={preselectedOptionId === entity.id}
                avatar={
                  <Avatar
                    avatarUrl={entity.avatarUrl}
                    colorId={entity.id}
                    placeholder={entity.name}
                    size="md"
                    type={entity.avatarType ?? 'rounded'}
                  />
                }
              />
            ))}
          </>
        )}
      </DropdownMenuItemsContainer>
      {showCreateButton && (
        <>
          <DropdownMenuItemsContainer hasMaxHeight>
            <StyledDropdownMenuSeparator />
            <CreateNewButton
              onClick={onCreate}
              LeftIcon={IconPlus}
              text="Add New"
              hovered={preselectedOptionId === CreateButtonId}
            />
          </DropdownMenuItemsContainer>
        </>
      )}
    </div>
  );
};
