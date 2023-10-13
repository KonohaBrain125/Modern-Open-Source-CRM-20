import { EntityChip } from '@/ui/display/chip/components/EntityChip';

export type UserChipProps = {
  id: string;
  name: string;
  pictureUrl?: string;
};

export const UserChip = ({ id, name, pictureUrl }: UserChipProps) => (
  <EntityChip
    entityId={id}
    name={name}
    avatarType="rounded"
    pictureUrl={pictureUrl}
  />
);
