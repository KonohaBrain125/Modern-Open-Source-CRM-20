import { InternalHotkeysScope } from '@/hotkeys/types/internal/InternalHotkeysScope';
import { PersonChip } from '@/people/components/PersonChip';
import { EditableCell } from '@/ui/components/editable-cell/EditableCell';
import { Company, User } from '~/generated/graphql';

import { CompanyAccountOwnerPicker } from './CompanyAccountOwnerPicker';

export type CompanyAccountOnwer = Pick<Company, 'id'> & {
  accountOwner?: Pick<User, 'id' | 'displayName'> | null;
};

export type OwnProps = {
  company: CompanyAccountOnwer;
};

export function CompanyAccountOwnerCell({ company }: OwnProps) {
  return (
    <EditableCell
      editHotkeysScope={{ scope: InternalHotkeysScope.RelationPicker }}
      editModeContent={<CompanyAccountOwnerPicker company={company} />}
      nonEditModeContent={
        company.accountOwner?.displayName ? (
          <PersonChip
            id={company.accountOwner.id}
            name={company.accountOwner?.displayName ?? ''}
          />
        ) : (
          <></>
        )
      }
    />
  );
}
