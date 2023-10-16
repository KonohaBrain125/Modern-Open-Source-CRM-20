import { useCallback } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

import { useAuth } from '@/auth/hooks/useAuth';
import { AppPath } from '@/types/AppPath';
import {
  IconColorSwatch,
  IconHierarchy2,
  IconLogout,
  IconSettings,
  IconUserCircle,
  IconUsers,
} from '@/ui/display/icon/index';
import NavItem from '@/ui/navigation/navbar/components/NavItem';
import NavTitle from '@/ui/navigation/navbar/components/NavTitle';
import SubMenuNavbar from '@/ui/navigation/navbar/components/SubMenuNavbar';

export const SettingsNavbar = () => {
  const navigate = useNavigate();

  const { signOut } = useAuth();

  const handleLogout = useCallback(() => {
    signOut();
    navigate(AppPath.SignIn);
  }, [signOut, navigate]);

  return (
    <SubMenuNavbar backButtonTitle="Settings" displayVersion={true}>
      <NavTitle label="User" />
      <NavItem
        label="Profile"
        to="/settings/profile"
        Icon={IconUserCircle}
        active={
          !!useMatch({
            path: useResolvedPath('/settings/profile').pathname,
            end: true,
          })
        }
      />
      <NavItem
        label="Experience"
        to="/settings/profile/experience"
        Icon={IconColorSwatch}
        active={
          !!useMatch({
            path: useResolvedPath('/settings/profile/experience').pathname,
            end: true,
          })
        }
      />
      <NavTitle label="Workspace" />
      <NavItem
        label="General"
        to="/settings/workspace"
        Icon={IconSettings}
        active={
          !!useMatch({
            path: useResolvedPath('/settings/workspace').pathname,
            end: true,
          })
        }
      />
      <NavItem
        label="Members"
        to="/settings/workspace-members"
        Icon={IconUsers}
        active={
          !!useMatch({
            path: useResolvedPath('/settings/workspace-members').pathname,
            end: true,
          })
        }
      />
      <NavItem
        label="Data model"
        to="/settings/objects"
        Icon={IconHierarchy2}
        active={
          !!useMatch({
            path: useResolvedPath('/settings/objects').pathname,
            end: false,
          })
        }
      />
      <NavTitle label="Other" />
      <NavItem label="Logout" onClick={handleLogout} Icon={IconLogout} />
    </SubMenuNavbar>
  );
};
