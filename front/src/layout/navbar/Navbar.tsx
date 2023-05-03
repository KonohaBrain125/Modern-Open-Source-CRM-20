import styled from '@emotion/styled';
import { useMatch, useResolvedPath } from 'react-router-dom';
import { User } from '../../interfaces/user.interface';
import { Workspace } from '../../interfaces/workspace.interface';
import NavItem from './NavItem';
import NavTitle from './NavTitle';
import WorkspaceContainer from './WorkspaceContainer';
import { FaRegUser, FaRegBuilding, FaBullseye } from 'react-icons/fa';

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.noisyBackground};
  min-width: 220px;
  padding: ${(props) => props.theme.spacing(2)};
`;

const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

type OwnProps = {
  user?: User;
  workspace?: Workspace;
};

function Navbar({ workspace }: OwnProps) {
  return (
    <>
      <NavbarContainer>
        {workspace && <WorkspaceContainer workspace={workspace} />}
        <NavItemsContainer>
          <NavTitle label="Workspace" />
          <NavItem
            label="People"
            to="/people"
            icon={<FaRegUser />}
            active={
              !!useMatch({
                path: useResolvedPath('/people').pathname,
                end: true,
              })
            }
          />
          <NavItem
            label="Companies"
            to="/companies"
            icon={<FaRegBuilding />}
            active={
              !!useMatch({
                path: useResolvedPath('/companies').pathname,
                end: true,
              })
            }
          />
          <NavItem
            label="Opportunities"
            to="/opportunities"
            icon={<FaBullseye />}
            active={
              !!useMatch({
                path: useResolvedPath('/opportunities').pathname,
                end: true,
              })
            }
          />
        </NavItemsContainer>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
