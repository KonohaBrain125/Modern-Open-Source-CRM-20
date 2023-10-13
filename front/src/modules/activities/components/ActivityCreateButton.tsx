import {
  IconCheckbox,
  IconNotes,
  IconTimelineEvent,
} from '@/ui/display/icon/index';
import { Button } from '@/ui/input/button/components/Button';
import { ButtonGroup } from '@/ui/input/button/components/ButtonGroup';

type ActivityCreateButtonProps = {
  onNoteClick?: () => void;
  onTaskClick?: () => void;
  onActivityClick?: () => void;
};

export const ActivityCreateButton = ({
  onNoteClick,
  onTaskClick,
  onActivityClick,
}: ActivityCreateButtonProps) => (
  <ButtonGroup variant={'secondary'}>
    <Button Icon={IconNotes} title="Note" onClick={onNoteClick} />
    <Button Icon={IconCheckbox} title="Task" onClick={onTaskClick} />
    <Button
      Icon={IconTimelineEvent}
      title="Activity"
      soon={true}
      onClick={onActivityClick}
    />
  </ButtonGroup>
);
