import { useEffect } from 'react';

import { useSetHotkeysScope } from '@/hotkeys/hooks/useSetHotkeysScope';
import { InternalHotkeysScope } from '@/hotkeys/types/internal/InternalHotkeysScope';
import { PageHotkeysScope } from '@/hotkeys/types/internal/PageHotkeysScope';

import { useIsMatchingLocation } from './hooks/useIsMatchingLocation';
import { AppBasePath } from './types/AppBasePath';
import { AppPath } from './types/AppPath';
import { AuthPath } from './types/AuthPath';
import { SettingsPath } from './types/SettingsPath';

export function HotkeysScopeBrowserRouterSync() {
  const isMatchingLocation = useIsMatchingLocation();

  const setHotkeysScope = useSetHotkeysScope();

  useEffect(() => {
    switch (true) {
      case isMatchingLocation(AppBasePath.Root, AppPath.CompaniesPage): {
        setHotkeysScope(InternalHotkeysScope.Table, { goto: true });
        break;
      }
      case isMatchingLocation(AppBasePath.Root, AppPath.PeoplePage): {
        setHotkeysScope(InternalHotkeysScope.Table, { goto: true });
        break;
      }
      case isMatchingLocation(AppBasePath.Root, AppPath.CompanyShowPage): {
        setHotkeysScope(PageHotkeysScope.CompanyShowPage, { goto: true });
        break;
      }
      case isMatchingLocation(AppBasePath.Root, AppPath.PersonShowPage): {
        setHotkeysScope(PageHotkeysScope.PersonShowPage, { goto: true });
        break;
      }
      case isMatchingLocation(AppBasePath.Root, AppPath.OpportunitiesPage): {
        setHotkeysScope(PageHotkeysScope.OpportunitiesPage, { goto: true });
        break;
      }
      case isMatchingLocation(AppBasePath.Auth, AuthPath.Index): {
        setHotkeysScope(InternalHotkeysScope.AuthIndex);
        break;
      }
      case isMatchingLocation(AppBasePath.Auth, AuthPath.CreateProfile): {
        setHotkeysScope(InternalHotkeysScope.CreateProfile);
        break;
      }
      case isMatchingLocation(AppBasePath.Auth, AuthPath.CreateWorkspace): {
        setHotkeysScope(InternalHotkeysScope.CreateWokspace);
        break;
      }
      case isMatchingLocation(AppBasePath.Auth, AuthPath.PasswordLogin): {
        setHotkeysScope(InternalHotkeysScope.PasswordLogin);
        break;
      }
      case isMatchingLocation(AppBasePath.Settings, SettingsPath.ProfilePage): {
        setHotkeysScope(PageHotkeysScope.ProfilePage, { goto: true });
        break;
      }
      case isMatchingLocation(
        AppBasePath.Settings,
        SettingsPath.WorkspaceMembersPage,
      ): {
        setHotkeysScope(PageHotkeysScope.WorkspaceMemberPage, { goto: true });
        break;
      }
    }
  }, [isMatchingLocation, setHotkeysScope]);

  return <></>;
}
