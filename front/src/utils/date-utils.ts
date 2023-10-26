import { isDate, isNumber, isString } from '@sniptt/guards';
import { differenceInCalendarDays, formatDistanceToNow } from 'date-fns';
import { DateTime } from 'luxon';

import { logError } from './logError';

export const DEFAULT_DATE_LOCALE = 'en-EN';

export const parseDate = (dateToParse: Date | string | number) => {
  let formattedDate: DateTime | null = null;

  if (!dateToParse) {
    throw new Error(`Invalid date passed to formatPastDate: "${dateToParse}"`);
  } else if (isString(dateToParse)) {
    formattedDate = DateTime.fromISO(dateToParse);
  } else if (isDate(dateToParse)) {
    formattedDate = DateTime.fromJSDate(dateToParse);
  } else if (isNumber(dateToParse)) {
    formattedDate = DateTime.fromMillis(dateToParse);
  }

  if (!formattedDate) {
    throw new Error(`Invalid date passed to formatPastDate: "${dateToParse}"`);
  }

  if (!formattedDate.isValid) {
    throw new Error(`Invalid date passed to formatPastDate: "${dateToParse}"`);
  }

  return formattedDate.setLocale(DEFAULT_DATE_LOCALE);
};

const isSameDay = (a: DateTime, b: DateTime): boolean =>
  a.hasSame(b, 'day') && a.hasSame(b, 'month') && a.hasSame(b, 'year');

const formatDate = (dateToFormat: Date | string | number, format: string) => {
  try {
    const parsedDate = parseDate(dateToFormat);
    return parsedDate.toFormat(format);
  } catch (error) {
    logError(error);
    return '';
  }
};

export const beautifyExactDateTime = (
  dateToBeautify: Date | string | number,
) => {
  const isToday = isSameDay(parseDate(dateToBeautify), DateTime.local());
  const dateFormat = isToday ? 'T' : 'DD · T';
  return formatDate(dateToBeautify, dateFormat);
};

export const beautifyExactDate = (dateToBeautify: Date | string | number) => {
  const isToday = isSameDay(parseDate(dateToBeautify), DateTime.local());
  const dateFormat = isToday ? "'Today'" : 'DD';
  return formatDate(dateToBeautify, dateFormat);
};

export const beautifyPastDateRelativeToNow = (
  pastDate: Date | string | number,
) => {
  try {
    const parsedDate = parseDate(pastDate);

    return formatDistanceToNow(parsedDate.toJSDate(), {
      addSuffix: true,
    }).replace('less than a minute ago', 'now');
  } catch (error) {
    logError(error);
    return '';
  }
};

export const beautifyPastDateAbsolute = (pastDate: Date | string | number) => {
  try {
    const parsedPastDate = parseDate(pastDate);

    const hoursDiff = parsedPastDate.diffNow('hours').negate().hours;

    if (hoursDiff <= 24) {
      return parsedPastDate.toFormat('HH:mm');
    } else if (hoursDiff <= 7 * 24) {
      return parsedPastDate.toFormat('cccc - HH:mm');
    } else if (hoursDiff <= 365 * 24) {
      return parsedPastDate.toFormat('MMMM d - HH:mm');
    } else {
      return parsedPastDate.toFormat('dd/MM/yyyy - HH:mm');
    }
  } catch (error) {
    logError(error);
    return '';
  }
};

export const hasDatePassed = (date: Date | string | number) => {
  try {
    const parsedDate = parseDate(date);

    return (
      differenceInCalendarDays(
        DateTime.local().toJSDate(),
        parsedDate.toJSDate(),
      ) >= 1
    );
  } catch (error) {
    logError(error);
    return false;
  }
};

export const beautifyDateDiff = (
  date: string,
  dateToCompareWith?: string,
  short: boolean = false,
) => {
  const dateDiff = DateTime.fromISO(date).diff(
    dateToCompareWith ? DateTime.fromISO(dateToCompareWith) : DateTime.now(),
    ['years', 'days'],
  );
  let result = '';
  if (dateDiff.years) result = result + `${dateDiff.years} year`;
  if (![0, 1].includes(dateDiff.years)) result = result + 's';
  if (short && dateDiff.years) return result;
  if (dateDiff.years && dateDiff.days) result = result + ' and ';
  if (dateDiff.days) result = result + `${Math.floor(dateDiff.days)} day`;
  if (![0, 1].includes(dateDiff.days)) result = result + 's';
  return result;
};
