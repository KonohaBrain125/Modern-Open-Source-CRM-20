export const isNonEmptyArray = <T>(
  probableArray: T[] | readonly T[] | undefined | null,
): probableArray is NonNullable<T[]> => {
  if (
    Array.isArray(probableArray) &&
    probableArray.length &&
    probableArray.length > 0
  ) {
    return true;
  }

  return false;
};
