import { useContext } from 'react';
import { useRecoilValue } from 'recoil';

import { FieldContext } from '../contexts/FieldContext';
import { isEntityFieldEmptyFamilySelector } from '../states/selectors/isEntityFieldEmptyFamilySelector';

export const useIsFieldEmpty = () => {
  const { entityId, fieldDefinition } = useContext(FieldContext);

  const isFieldEmpty = useRecoilValue(
    isEntityFieldEmptyFamilySelector({
      fieldDefinition: {
        fieldId: fieldDefinition.fieldId,
        label: fieldDefinition.label,
        type: fieldDefinition.type,
        metadata: fieldDefinition.metadata,
      },
      entityId,
    }),
  );

  return isFieldEmpty;
};
