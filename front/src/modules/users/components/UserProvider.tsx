import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { currentUserState } from '@/auth/states/currentUserState';
import { useGetCurrentUserQuery } from '~/generated/graphql';

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [, setCurrentUser] = useRecoilState(currentUserState);
  const [isLoading, setIsLoading] = useState(true);

  const { data, loading } = useGetCurrentUserQuery();

  useEffect(() => {
    if (!loading) {
      setIsLoading(false);
    }
    if (data?.currentUser?.workspaceMember?.settings) {
      setCurrentUser({
        ...data.currentUser,
        workspaceMember: {
          ...data.currentUser.workspaceMember,
          settings: data.currentUser.workspaceMember.settings,
        },
      });
    }
  }, [setCurrentUser, data, isLoading, loading]);

  return isLoading ? <></> : <>{children}</>;
};
