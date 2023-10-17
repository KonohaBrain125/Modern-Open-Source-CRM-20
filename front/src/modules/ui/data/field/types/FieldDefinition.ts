import { IconComponent } from '@/ui/display/icon/types/IconComponent';
import { AvatarType } from '@/users/components/Avatar';

import { FieldMetadata } from './FieldMetadata';
import { FieldType } from './FieldType';

export type FieldDefinition<T extends FieldMetadata> = {
  key: string;
  name: string;
  Icon?: IconComponent;
  type: FieldType;
  metadata: T;
  basePathToShowPage?: string;
  infoTooltipContent?: string;
  entityChipDisplayMapper?: (dataObject: any) => {
    name: string;
    pictureUrl?: string;
    avatarType: AvatarType;
  };
};
