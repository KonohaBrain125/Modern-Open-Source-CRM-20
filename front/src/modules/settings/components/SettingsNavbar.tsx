import { TbColorSwatch, TbLogout, TbSettings, TbUser } from 'react-icons/tb';
import { useMatch, useResolvedPath } from 'react-router-dom';

import { removeTokens } from '@/auth/services/AuthService';
import NavBackButton from '@/ui/layout/navbar//NavBackButton';
import NavItem from '@/ui/layout/navbar/NavItem';
import NavItemsContainer from '@/ui/layout/navbar/NavItemsContainer';
import NavTitle from '@/ui/layout/navbar/NavTitle';

export function SettingsNavbar() {
  return (
    <>
      <NavBackButton title="Settings" />
      <NavItemsContainer>
        <NavTitle label="User" />
        <NavItem
          label="Profile"
          to="/settings/profile"
          icon={<TbUser size={16} />}
          active={
            !!useMatch({
              path: useResolvedPath('/people').pathname,
              end: true,
            })
          }
        />
        <NavItem
          label="Experience"
          to="/settings/profile/experience"
          icon={<TbColorSwatch size={16} />}
          soon={true}
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
          icon={<TbSettings size={16} />}
          soon={true}
          active={
            !!useMatch({
              path: useResolvedPath('/settings/workspace').pathname,
              end: true,
            })
          }
        />
        <NavTitle label="Other" />
        <NavItem
          label="Logout"
          onClick={removeTokens}
          icon={<TbLogout size={16} />}
          danger={true}
        />
      </NavItemsContainer>
    </>
  );
}
