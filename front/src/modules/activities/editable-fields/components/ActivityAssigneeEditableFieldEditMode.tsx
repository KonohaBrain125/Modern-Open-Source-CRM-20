import styled from '@emotion/styled';

import { ActivityAssigneePicker } from '@/activities/components/ActivityAssigneePicker';
import { useInlineCell } from '@/ui/data/inline-cell/hooks/useInlineCell';
import { Activity, User } from '~/generated/graphql';

const StyledContainer = styled.div`
  left: 0px;
  position: absolute;
  top: -8px;
`;

export type ActivityAssigneeEditableFieldEditModeProps = {
  activity: Pick<Activity, 'id'> & {
    assignee?: Pick<User, 'id' | 'displayName'> | null;
  };
  onSubmit?: () => void;
  onCancel?: () => void;
};

export const ActivityAssigneeEditableFieldEditMode = ({
  activity,
  onSubmit,
  onCancel,
}: ActivityAssigneeEditableFieldEditModeProps) => {
  const { closeInlineCell: closeEditableField } = useInlineCell();

  const handleSubmit = () => {
    closeEditableField();
    onSubmit?.();
  };

  const handleCancel = () => {
    closeEditableField();
    onCancel?.();
  };

  return (
    <StyledContainer>
      <ActivityAssigneePicker
        activity={activity}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </StyledContainer>
  );
};
