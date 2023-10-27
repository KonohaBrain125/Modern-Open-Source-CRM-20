import { isNumber } from '@sniptt/guards';

import { FieldProbabilityValue } from '../FieldMetadata';

// TODO: add zod
export const isFieldProbabilityValue = (
  fieldValue: unknown,
): fieldValue is FieldProbabilityValue => isNumber(fieldValue);
