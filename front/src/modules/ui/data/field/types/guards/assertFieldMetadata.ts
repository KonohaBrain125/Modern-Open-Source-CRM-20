import { FieldDefinition } from '../FieldDefinition';
import {
  FieldBooleanMetadata,
  FieldChipMetadata,
  FieldDateMetadata,
  FieldDoubleTextChipMetadata,
  FieldDoubleTextMetadata,
  FieldEmailMetadata,
  FieldMetadata,
  FieldMoneyAmountV2Metadata,
  FieldMoneyMetadata,
  FieldNumberMetadata,
  FieldPhoneMetadata,
  FieldProbabilityMetadata,
  FieldRelationMetadata,
  FieldTextMetadata,
  FieldURLMetadata,
  FieldURLV2Metadata,
} from '../FieldMetadata';
import { FieldType } from '../FieldType';

type AssertFieldMetadataFunction = <
  E extends FieldType,
  T extends E extends 'text'
    ? FieldTextMetadata
    : E extends 'relation'
    ? FieldRelationMetadata
    : E extends 'chip'
    ? FieldChipMetadata
    : E extends 'double-text-chip'
    ? FieldDoubleTextChipMetadata
    : E extends 'double-text'
    ? FieldDoubleTextMetadata
    : E extends 'number'
    ? FieldNumberMetadata
    : E extends 'email'
    ? FieldEmailMetadata
    : E extends 'boolean'
    ? FieldBooleanMetadata
    : E extends 'date'
    ? FieldDateMetadata
    : E extends 'phone'
    ? FieldPhoneMetadata
    : E extends 'url'
    ? FieldURLMetadata
    : E extends 'urlV2'
    ? FieldURLV2Metadata
    : E extends 'probability'
    ? FieldProbabilityMetadata
    : E extends 'moneyAmount'
    ? FieldMoneyMetadata
    : E extends 'moneyAmountV2'
    ? FieldMoneyAmountV2Metadata
    : never,
>(
  fieldType: E,
  fieldTypeGuard: (
    a: FieldDefinition<FieldMetadata>,
  ) => a is FieldDefinition<T>,
  fieldDefinition: FieldDefinition<FieldMetadata>,
) => asserts fieldDefinition is FieldDefinition<T>;

export const assertFieldMetadata: AssertFieldMetadataFunction = (
  fieldType,
  fieldTypeGuard,
  fieldDefinition,
) => {
  const fieldDefinitionType = fieldDefinition.type;

  if (!fieldTypeGuard(fieldDefinition) || fieldDefinitionType !== fieldType) {
    throw new Error(
      `Trying to use a "${fieldDefinitionType}" field as a "${fieldType}" field. Verify that the field is defined as a type "${fieldDefinitionType}" field in assertFieldMetadata.ts.`,
    );
  } else {
    return;
  }
};
