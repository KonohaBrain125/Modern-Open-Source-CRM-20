import React, { useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  autoUpdate,
  flip,
  offset,
  size,
  useFloating,
} from '@floating-ui/react';
import debounce from 'lodash.debounce';
import { ReadonlyDeep } from 'type-fest';

import { SelectOption } from '@/spreadsheet-import/types';
import { AppTooltip } from '@/ui/display/tooltip/AppTooltip';
import { DropdownMenu } from '@/ui/layout/dropdown/components/DropdownMenu';
import { DropdownMenuItemsContainer } from '@/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSearchInput } from '@/ui/layout/dropdown/components/DropdownMenuSearchInput';
import { DropdownMenuSeparator } from '@/ui/layout/dropdown/components/DropdownMenuSeparator';
import { MenuItem } from '@/ui/navigation/menu-item/components/MenuItem';
import { MenuItemSelect } from '@/ui/navigation/menu-item/components/MenuItemSelect';
import { useListenClickOutside } from '@/ui/utilities/pointer-event/hooks/useListenClickOutside';
import { useUpdateEffect } from '~/hooks/useUpdateEffect';

const StyledFloatingDropdown = styled.div`
  z-index: ${({ theme }) => theme.lastLayerZIndex};
`;

interface MatchColumnSelectProps {
  onChange: (value: ReadonlyDeep<SelectOption> | null) => void;
  value?: ReadonlyDeep<SelectOption>;
  options: readonly ReadonlyDeep<SelectOption>[];
  placeholder?: string;
  name?: string;
}

export const MatchColumnSelect = ({
  onChange,
  value,
  options: initialOptions,
  placeholder,
}: MatchColumnSelectProps) => {
  const theme = useTheme();

  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [options, setOptions] = useState(initialOptions);

  const { refs, floatingStyles } = useFloating({
    strategy: 'absolute',
    middleware: [
      offset(() => {
        return parseInt(theme.spacing(2), 10);
      }),
      flip(),
      size(),
    ],
    whileElementsMounted: autoUpdate,
    open: isOpen,
    placement: 'bottom-start',
  });

  const handleSearchFilterChange = useCallback(
    (text: string) => {
      setOptions(
        initialOptions.filter((option) => option.label.includes(text)),
      );
    },
    [initialOptions],
  );

  const debouncedHandleSearchFilter = debounce(handleSearchFilterChange, 100, {
    leading: true,
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setSearchFilter(value);
    debouncedHandleSearchFilter(value);
  };

  const handleDropdownItemClick = () => {
    setIsOpen(true);
  };

  const handleChange = (option: ReadonlyDeep<SelectOption>) => {
    onChange(option);
    setIsOpen(false);
  };

  useListenClickOutside({
    refs: [dropdownContainerRef],
    callback: () => {
      setIsOpen(false);
    },
  });

  useUpdateEffect(() => {
    setOptions(initialOptions);
  }, [initialOptions]);

  return (
    <>
      <div ref={refs.setReference}>
        <MenuItem
          LeftIcon={value?.icon}
          onClick={handleDropdownItemClick}
          text={value?.label ?? placeholder ?? ''}
          accent={value?.label ? 'default' : 'placeholder'}
        />
      </div>
      {isOpen &&
        createPortal(
          <StyledFloatingDropdown ref={refs.setFloating} style={floatingStyles}>
            <DropdownMenu
              data-select-disable
              ref={dropdownContainerRef}
              width={refs.domReference.current?.clientWidth}
            >
              <DropdownMenuSearchInput
                value={searchFilter}
                onChange={handleFilterChange}
                autoFocus
              />
              <DropdownMenuSeparator />
              <DropdownMenuItemsContainer hasMaxHeight>
                {options?.map((option) => (
                  <>
                    <MenuItemSelect
                      key={option.label}
                      selected={value?.label === option.label}
                      onClick={() => handleChange(option)}
                      disabled={
                        option.disabled && value?.value !== option.value
                      }
                      LeftIcon={option?.icon}
                      text={option.label}
                    />
                    {option.disabled &&
                      value?.value !== option.value &&
                      createPortal(
                        <AppTooltip
                          key={option.value}
                          anchorSelect={`#${option.value}`}
                          content="You are already importing this column."
                          place="right"
                          offset={-20}
                        />,
                        document.body,
                      )}
                  </>
                ))}
                {options?.length === 0 && <MenuItem text="No result" />}
              </DropdownMenuItemsContainer>
            </DropdownMenu>
          </StyledFloatingDropdown>,
          document.body,
        )}
    </>
  );
};
