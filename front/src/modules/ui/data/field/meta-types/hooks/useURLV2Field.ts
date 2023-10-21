import { useContext } from 'react';
import { useRecoilState } from 'recoil';

import { FieldContext } from '../../contexts/FieldContext';
import { usePersistField } from '../../hooks/usePersistField';
import { entityFieldsFamilySelector } from '../../states/selectors/entityFieldsFamilySelector';
import { FieldURLV2Value } from '../../types/FieldMetadata';
import { assertFieldMetadata } from '../../types/guards/assertFieldMetadata';
import { isFieldURLV2 } from '../../types/guards/isFieldURLV2';
import { isFieldURLV2Value } from '../../types/guards/isFieldURLV2Value';

export const useURLV2Field = () => {
  const { entityId, fieldDefinition, hotkeyScope } = useContext(FieldContext);

  assertFieldMetadata('urlV2', isFieldURLV2, fieldDefinition);

  const fieldName = fieldDefinition.metadata.fieldName;

  const [fieldValue, setFieldValue] = useRecoilState<FieldURLV2Value>(
    entityFieldsFamilySelector({
      entityId: entityId,
      fieldName: fieldName,
    }),
  );

  const persistField = usePersistField();

  const persistURLField = (newValue: FieldURLV2Value) => {
    if (!isFieldURLV2Value(newValue)) {
      return;
    }

    persistField(newValue);
  };

  return {
    fieldDefinition,
    fieldValue,
    setFieldValue,
    hotkeyScope,
    persistURLField,
  };
};
