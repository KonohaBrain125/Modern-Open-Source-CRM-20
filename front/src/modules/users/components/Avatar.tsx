import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { isNonEmptyString } from '~/utils/isNonEmptyString';
import { stringToHslColor } from '~/utils/string-to-hsl';

import { getImageAbsoluteURIOrBase64 } from '../utils/getProfilePictureAbsoluteURI';

export type AvatarType = 'squared' | 'rounded';

export type AvatarSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type AvatarProps = {
  avatarUrl: string | null | undefined;
  size?: AvatarSize;
  placeholder: string;
  colorId?: string;
  type?: AvatarType;
};

const StyledAvatar = styled.div<AvatarProps & { colorId: string }>`
  align-items: center;
  background-color: ${({ avatarUrl, colorId }) =>
    !isNonEmptyString(avatarUrl) ? stringToHslColor(colorId, 75, 85) : 'none'};
  ${({ avatarUrl }) =>
    isNonEmptyString(avatarUrl) ? `background-image: url(${avatarUrl});` : ''}
  background-position: center;
  background-size: cover;
  border-radius: ${(props) => (props.type === 'rounded' ? '50%' : '2px')};
  color: ${({ colorId }) => stringToHslColor(colorId, 75, 25)};
  display: flex;

  flex-shrink: 0;
  font-size: ${({ size }) => {
    switch (size) {
      case 'xl':
        return '16px';
      case 'lg':
        return '13px';
      case 'md':
      default:
        return '12px';
      case 'sm':
        return '10px';
      case 'xs':
        return '8px';
    }
  }};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  height: ${({ size }) => {
    switch (size) {
      case 'xl':
        return '40px';
      case 'lg':
        return '24px';
      case 'md':
      default:
        return '16px';
      case 'sm':
        return '14px';
      case 'xs':
        return '12px';
    }
  }};
  justify-content: center;
  width: ${({ size }) => {
    switch (size) {
      case 'xl':
        return '40px';
      case 'lg':
        return '24px';
      case 'md':
      default:
        return '16px';
      case 'sm':
        return '14px';
      case 'xs':
        return '12px';
    }
  }};
`;

export const Avatar = ({
  avatarUrl,
  size = 'md',
  placeholder,
  colorId = placeholder,
  type = 'squared',
}: AvatarProps) => {
  const noAvatarUrl = !isNonEmptyString(avatarUrl);
  const [isInvalidAvatarUrl, setIsInvalidAvatarUrl] = useState(false);

  useEffect(() => {
    if (avatarUrl) {
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(false);
        img.onerror = () => resolve(true);
        img.src = getImageAbsoluteURIOrBase64(avatarUrl) as string;
      }).then((res) => {
        setIsInvalidAvatarUrl(res as boolean);
      });
    }
  }, [avatarUrl]);

  return (
    <StyledAvatar
      avatarUrl={getImageAbsoluteURIOrBase64(avatarUrl)}
      placeholder={placeholder}
      size={size}
      type={type}
      colorId={colorId}
    >
      {(noAvatarUrl || isInvalidAvatarUrl) &&
        placeholder[0]?.toLocaleUpperCase()}
    </StyledAvatar>
  );
};
