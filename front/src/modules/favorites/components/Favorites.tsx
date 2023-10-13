import styled from '@emotion/styled';

import NavItem from '@/ui/navigation/navbar/components/NavItem';
import NavTitle from '@/ui/navigation/navbar/components/NavTitle';
import { Avatar } from '@/users/components/Avatar';
import { useGetFavoritesQuery } from '~/generated/graphql';
import { getLogoUrlFromDomainName } from '~/utils';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  width: 100%;
`;

export const Favorites = () => {
  const { data } = useGetFavoritesQuery();
  const favorites = data?.findFavorites;

  if (!favorites || favorites.length === 0) return <></>;

  return (
    <StyledContainer>
      <NavTitle label="Favorites" />
      {favorites.map(
        ({ id, person, company }) =>
          (person && (
            <NavItem
              key={id}
              label={`${person.firstName} ${person.lastName}`}
              Icon={() => (
                <Avatar
                  colorId={person.id}
                  avatarUrl={person.avatarUrl ?? ''}
                  type="rounded"
                  placeholder={`${person.firstName} ${person.lastName}`}
                />
              )}
              to={`/person/${person.id}`}
            />
          )) ??
          (company && (
            <NavItem
              key={id}
              label={company.name}
              Icon={() => (
                <Avatar
                  avatarUrl={getLogoUrlFromDomainName(company.domainName) ?? ''}
                  type="squared"
                  placeholder={company.name}
                />
              )}
              to={`/companies/${company.id}`}
            />
          )),
      )}
    </StyledContainer>
  );
};
