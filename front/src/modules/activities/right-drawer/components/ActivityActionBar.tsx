import { getOperationName } from '@apollo/client/utilities';
import { useRecoilState } from 'recoil';

import { GET_ACTIVITIES } from '@/activities/graphql/queries/getActivities';
import { GET_ACTIVITIES_BY_TARGETS } from '@/activities/graphql/queries/getActivitiesByTarget';
import { GET_COMPANIES } from '@/companies/graphql/queries/getCompanies';
import { GET_PEOPLE } from '@/people/graphql/queries/getPeople';
import { IconTrash } from '@/ui/display/icon';
import { LightIconButton } from '@/ui/input/button/components/LightIconButton';
import { isRightDrawerOpenState } from '@/ui/layout/right-drawer/states/isRightDrawerOpenState';
import { useDeleteActivityMutation } from '~/generated/graphql';

type ActivityActionBarProps = {
  activityId: string;
};

export const ActivityActionBar = ({ activityId }: ActivityActionBarProps) => {
  const [deleteActivityMutation] = useDeleteActivityMutation();
  const [, setIsRightDrawerOpen] = useRecoilState(isRightDrawerOpenState);

  const deleteActivity = () => {
    deleteActivityMutation({
      variables: { activityId },
      refetchQueries: [
        getOperationName(GET_COMPANIES) ?? '',
        getOperationName(GET_PEOPLE) ?? '',
        getOperationName(GET_ACTIVITIES_BY_TARGETS) ?? '',
        getOperationName(GET_ACTIVITIES) ?? '',
      ],
    });
    setIsRightDrawerOpen(false);
  };

  return (
    <LightIconButton
      Icon={IconTrash}
      onClick={deleteActivity}
      accent="tertiary"
      size="medium"
    />
  );
};
