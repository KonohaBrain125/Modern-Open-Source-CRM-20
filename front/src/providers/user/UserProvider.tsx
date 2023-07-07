import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { currentUserState } from '@/auth/states/currentUserState';
import { useGetCurrentUserQuery } from '~/generated/graphql';

export function UserProvider({ children }: React.PropsWithChildren) {
  const [, setCurrentUser] = useRecoilState(currentUserState);
  const { data, loading } = useGetCurrentUserQuery();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      setIsLoading(false);
    }
    if (data?.currentUser) {
      setCurrentUser(data?.currentUser);
    }
  }, [setCurrentUser, data, isLoading, loading]);

  return isLoading ? <></> : <>{children}</>;
}
