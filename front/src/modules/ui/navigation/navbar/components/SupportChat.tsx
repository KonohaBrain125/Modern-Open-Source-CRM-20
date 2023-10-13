import { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { currentUserState } from '@/auth/states/currentUserState';
import { supportChatState } from '@/client-config/states/supportChatState';
import { IconHelpCircle } from '@/ui/display/icon';
import { Button } from '@/ui/input/button/components/Button';
import { User } from '~/generated/graphql';

const StyledButtonContainer = styled.div`
  display: flex;
`;

const insertScript = ({
  src,
  innerHTML,
  onLoad,
}: {
  src?: string;
  innerHTML?: string;
  onLoad?: (...args: any[]) => void;
}) => {
  const script = document.createElement('script');
  if (src) script.src = src;
  if (innerHTML) script.innerHTML = innerHTML;
  if (onLoad) script.onload = onLoad;
  document.body.appendChild(script);
};

const SupportChat = () => {
  const currentUser = useRecoilValue(currentUserState);
  const supportChat = useRecoilValue(supportChatState);
  const [isFrontChatLoaded, setIsFrontChatLoaded] = useState(false);

  const configureFront = useCallback(
    (
      chatId: string,
      currentUser: Pick<User, 'email' | 'displayName' | 'supportUserHash'>,
    ) => {
      const url = 'https://chat-assets.frontapp.com/v1/chat.bundle.js';
      const script = document.querySelector(`script[src="${url}"]`);

      if (!script) {
        insertScript({
          src: url,
          onLoad: () => {
            window.FrontChat?.('init', {
              chatId,
              useDefaultLauncher: false,
              email: currentUser.email,
              name: currentUser.displayName,
              userHash: currentUser?.supportUserHash,
            });
            setIsFrontChatLoaded(true);
          },
        });
      }
    },
    [],
  );

  useEffect(() => {
    if (
      supportChat?.supportDriver === 'front' &&
      supportChat.supportFrontChatId &&
      currentUser?.email &&
      !isFrontChatLoaded
    ) {
      configureFront(supportChat.supportFrontChatId, currentUser);
    }
  }, [
    configureFront,
    currentUser,
    isFrontChatLoaded,
    supportChat?.supportDriver,
    supportChat.supportFrontChatId,
  ]);

  return isFrontChatLoaded ? (
    <StyledButtonContainer>
      <Button
        variant={'tertiary'}
        size={'small'}
        title="Support"
        Icon={IconHelpCircle}
        onClick={() => window.FrontChat?.('show')}
      />
    </StyledButtonContainer>
  ) : null;
};

export default SupportChat;
