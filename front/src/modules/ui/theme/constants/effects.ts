import { css } from '@emotion/react';

import { ThemeType } from './theme';

export const overlayBackground = (props: { theme: ThemeType }) =>
  css`
    backdrop-filter: blur(8px);
    background: ${props.theme.background.transparent.secondary};
    box-shadow: ${props.theme.boxShadow.strong};
  `;

export const textInputStyle = (props: { theme: ThemeType }) =>
  css`
    background-color: transparent;
    border: none;
    color: ${props.theme.font.color.primary};
    font-family: ${props.theme.font.family};
    font-size: inherit;
    font-weight: inherit;
    outline: none;
    padding: ${props.theme.spacing(0)} ${props.theme.spacing(2)};

    &::placeholder,
    &::-webkit-input-placeholder {
      color: ${props.theme.font.color.light};
      font-family: ${props.theme.font.family};
      font-weight: ${props.theme.font.weight.medium};
    }
  `;

export const hoverBackground = (props: any) =>
  css`
    transition: background 0.1s ease;
    &:hover {
      background: ${props.theme.background.transparent.light};
    }
  `;
