import { Hotkey } from 'react-hotkeys-hook/dist/types';
import { useRecoilCallback } from 'recoil';

import { logDebug } from '~/utils/logDebug';

import { internalHotkeysEnabledScopesState } from '../states/internal/internalHotkeysEnabledScopesState';

const DEBUG_HOTKEY_SCOPE = true;

export const useScopedHotkeyCallback = () =>
  useRecoilCallback(
    ({ snapshot }) =>
      ({
        callback,
        hotkeysEvent,
        keyboardEvent,
        scope,
        preventDefault = true,
      }: {
        keyboardEvent: KeyboardEvent;
        hotkeysEvent: Hotkey;
        callback: (keyboardEvent: KeyboardEvent, hotkeysEvent: Hotkey) => void;
        scope: string;
        preventDefault?: boolean;
      }) => {
        const currentHotkeyScopes = snapshot
          .getLoadable(internalHotkeysEnabledScopesState)
          .valueOrThrow();

        if (!currentHotkeyScopes.includes(scope)) {
          if (DEBUG_HOTKEY_SCOPE) {
            logDebug(
              `%cI can't call hotkey (${
                hotkeysEvent.keys
              }) because I'm in scope [${scope}] and the active scopes are : [${currentHotkeyScopes.join(
                ', ',
              )}]`,
              'color: gray; ',
            );
          }

          return;
        }

        if (DEBUG_HOTKEY_SCOPE) {
          logDebug(
            `%cI can call hotkey (${
              hotkeysEvent.keys
            }) because I'm in scope [${scope}] and the active scopes are : [${currentHotkeyScopes.join(
              ', ',
            )}]`,
            'color: green;',
          );
        }

        if (preventDefault) {
          keyboardEvent.stopPropagation();
          keyboardEvent.preventDefault();
          keyboardEvent.stopImmediatePropagation();
        }

        return callback(keyboardEvent, hotkeysEvent);
      },
    [],
  );
