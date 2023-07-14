import { useHotkeysContext } from 'react-hotkeys-hook';
import { useRecoilCallback } from 'recoil';

import { internalHotkeysEnabledScopesState } from '../../states/internal/internalHotkeysEnabledScopesState';

export function useHotkeyScopes() {
  const { disableScope, enableScope } = useHotkeysContext();

  const disableAllHotkeyScopes = useRecoilCallback(
    ({ set, snapshot }) => {
      return async () => {
        const enabledScopes = await snapshot.getPromise(
          internalHotkeysEnabledScopesState,
        );

        for (const enabledScope of enabledScopes) {
          disableScope(enabledScope);
        }

        set(internalHotkeysEnabledScopesState, []);
      };
    },
    [disableScope],
  );

  const enableHotkeyScope = useRecoilCallback(
    ({ set, snapshot }) => {
      return async (scopeToEnable: string) => {
        const enabledScopes = await snapshot.getPromise(
          internalHotkeysEnabledScopesState,
        );

        if (!enabledScopes.includes(scopeToEnable)) {
          enableScope(scopeToEnable);
          set(internalHotkeysEnabledScopesState, [
            ...enabledScopes,
            scopeToEnable,
          ]);
        }
      };
    },
    [enableScope],
  );

  const disableHotkeyScope = useRecoilCallback(
    ({ set, snapshot }) => {
      return async (scopeToDisable: string) => {
        const enabledScopes = await snapshot.getPromise(
          internalHotkeysEnabledScopesState,
        );

        const scopeToRemoveIndex = enabledScopes.findIndex(
          (scope) => scope === scopeToDisable,
        );

        if (scopeToRemoveIndex > -1) {
          disableScope(scopeToDisable);

          enabledScopes.splice(scopeToRemoveIndex);

          set(internalHotkeysEnabledScopesState, enabledScopes);
        }
      };
    },
    [disableScope],
  );

  const setHotkeyScopes = useRecoilCallback(
    ({ set, snapshot }) => {
      return async (scopesToSet: string[]) => {
        const enabledScopes = await snapshot.getPromise(
          internalHotkeysEnabledScopesState,
        );

        const scopesToDisable = enabledScopes.filter(
          (enabledScope) => !scopesToSet.includes(enabledScope),
        );

        const scopesToEnable = scopesToSet.filter(
          (scopeToSet) => !enabledScopes.includes(scopeToSet),
        );

        for (const scopeToDisable of scopesToDisable) {
          disableScope(scopeToDisable);
        }

        for (const scopeToEnable of scopesToEnable) {
          enableScope(scopeToEnable);
        }

        set(internalHotkeysEnabledScopesState, scopesToSet);
      };
    },
    [disableScope, enableScope],
  );

  return {
    disableAllHotkeyScopes,
    enableHotkeyScope,
    disableHotkeyScope,
    setHotkeyScopes,
  };
}
