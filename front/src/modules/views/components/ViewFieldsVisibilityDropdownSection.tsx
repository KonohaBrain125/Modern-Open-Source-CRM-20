import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  DropResult,
  OnDragEndResponder,
  ResponderProvided,
} from '@hello-pangea/dnd';

import { ColumnDefinition } from '@/ui/data/data-table/types/ColumnDefinition';
import { FieldMetadata } from '@/ui/data/field/types/FieldMetadata';
import { IconMinus, IconPlus } from '@/ui/display/icon';
import { AppTooltip } from '@/ui/display/tooltip/AppTooltip';
import { IconInfoCircle } from '@/ui/input/constants/icons';
import { DraggableItem } from '@/ui/layout/draggable-list/components/DraggableItem';
import { DraggableList } from '@/ui/layout/draggable-list/components/DraggableList';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { StyledDropdownMenuSubheader } from '@/ui/layout/dropdown/components/StyledDropdownMenuSubheader';
import { MenuItem } from '@/ui/navigation/menu-item/components/MenuItem';
import { MenuItemDraggable } from '@/ui/navigation/menu-item/components/MenuItemDraggable';
import { useListenClickOutside } from '@/ui/utilities/pointer-event/hooks/useListenClickOutside';
import { isDefined } from '~/utils/isDefined';

type ViewFieldsVisibilityDropdownSectionProps = {
  fields: Omit<ColumnDefinition<FieldMetadata>, 'size'>[];
  onVisibilityChange: (
    field: Omit<ColumnDefinition<FieldMetadata>, 'size' | 'position'>,
  ) => void;
  title: string;
  isDraggable: boolean;
  onDragEnd?: OnDragEndResponder;
};

export const ViewFieldsVisibilityDropdownSection = ({
  fields,
  onVisibilityChange,
  title,
  isDraggable,
  onDragEnd,
}: ViewFieldsVisibilityDropdownSectionProps) => {
  const handleOnDrag = (result: DropResult, provided: ResponderProvided) => {
    onDragEnd?.(result, provided);
  };

  const [openToolTipIndex, setOpenToolTipIndex] = useState<number>();

  const handleInfoButtonClick = (index: number) => {
    if (index === openToolTipIndex) setOpenToolTipIndex(undefined);
    else setOpenToolTipIndex(index);
  };

  const getIconButtons = (
    index: number,
    field: Omit<ColumnDefinition<FieldMetadata>, 'size' | 'position'>,
  ) => {
    if (field.infoTooltipContent) {
      return [
        {
          Icon: IconInfoCircle,
          onClick: () => handleInfoButtonClick(index),
          isActive: openToolTipIndex === index,
        },
        {
          Icon: field.isVisible ? IconMinus : IconPlus,
          onClick: () => onVisibilityChange(field),
        },
      ];
    }
    if (!field.infoTooltipContent) {
      return [
        {
          Icon: field.isVisible ? IconMinus : IconPlus,
          onClick: () => onVisibilityChange(field),
        },
      ];
    }
  };

  const ref = useRef<HTMLDivElement>(null);

  useListenClickOutside({
    refs: [ref],
    callback: () => {
      setOpenToolTipIndex(undefined);
    },
  });

  return (
    <div ref={ref}>
      <StyledDropdownMenuSubheader>{title}</StyledDropdownMenuSubheader>
      <DropdownMenuItemsContainer>
        {isDraggable ? (
          <DraggableList
            onDragEnd={handleOnDrag}
            draggableItems={
              <>
                {[...fields]
                  .sort((a, b) => a.position - b.position)
                  .map((field, index) => (
                    <DraggableItem
                      key={field.fieldId}
                      draggableId={field.fieldId}
                      index={index + 1}
                      itemComponent={
                        <MenuItemDraggable
                          key={field.fieldId}
                          LeftIcon={field.Icon}
                          iconButtons={getIconButtons(index + 1, field)}
                          isTooltipOpen={openToolTipIndex === index + 1}
                          text={field.label}
                          className={`${title}-draggable-item-tooltip-anchor-${
                            index + 1
                          }`}
                        />
                      }
                    />
                  ))}
              </>
            }
          />
        ) : (
          fields.map((field, index) => (
            <MenuItem
              key={field.fieldId}
              LeftIcon={field.Icon}
              iconButtons={getIconButtons(index, field)}
              isTooltipOpen={openToolTipIndex === index}
              text={field.label}
              className={`${title}-fixed-item-tooltip-anchor-${index}`}
            />
          ))
        )}
      </DropdownMenuItemsContainer>
      {isDefined(openToolTipIndex) &&
        createPortal(
          <AppTooltip
            anchorSelect={`.${title}-${
              isDraggable ? 'draggable' : 'fixed'
            }-item-tooltip-anchor-${openToolTipIndex}`}
            place="left"
            content={fields[openToolTipIndex].infoTooltipContent}
            isOpen={true}
          />,
          document.body,
        )}
    </div>
  );
};
