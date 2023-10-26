import { formatDistanceToNow } from 'date-fns';
import { DateTime } from 'luxon';

import {
  beautifyDateDiff,
  beautifyExactDate,
  beautifyExactDateTime,
  beautifyPastDateAbsolute,
  beautifyPastDateRelativeToNow,
  DEFAULT_DATE_LOCALE,
  hasDatePassed,
  parseDate,
} from '../date-utils';
import { logError } from '../logError';

jest.mock('~/utils/logError');
jest.useFakeTimers().setSystemTime(new Date('2024-01-01T00:00:00.000Z'));

describe('beautifyExactDateTime', () => {
  it('should return the date in the correct format with time', () => {
    const mockDate = '2023-01-01T12:13:24';
    const actualDate = new Date(mockDate);
    const expected = DateTime.fromJSDate(actualDate)
      .setLocale(DEFAULT_DATE_LOCALE)
      .toFormat('DD · T');

    const result = beautifyExactDateTime(mockDate);
    expect(result).toEqual(expected);
  });
  it('should return the time in the correct format for a datetime that is today', () => {
    const todayString = DateTime.local().toISODate();
    const mockDate = `${todayString}T12:13:24`;
    const actualDate = new Date(mockDate);
    const expected = DateTime.fromJSDate(actualDate)
      .setLocale(DEFAULT_DATE_LOCALE)
      .toFormat('T');

    const result = beautifyExactDateTime(mockDate);
    expect(result).toEqual(expected);
  });
});

describe('beautifyExactDate', () => {
  it('should return the past date in the correct format without time', () => {
    const mockDate = '2023-01-01T12:13:24';
    const actualDate = new Date(mockDate);
    const expected = DateTime.fromJSDate(actualDate)
      .setLocale(DEFAULT_DATE_LOCALE)
      .toFormat('DD');

    const result = beautifyExactDate(mockDate);
    expect(result).toEqual(expected);
  });
  it('should return "Today" if the date is today', () => {
    const todayString = DateTime.local().toISODate();
    const mockDate = `${todayString}T12:13:24`;
    const expected = 'Today';

    const result = beautifyExactDate(mockDate);
    expect(result).toEqual(expected);
  });
});

describe('parseDate', () => {
  it('should log an error and return empty string when passed an invalid date string', () => {
    expect(() => {
      parseDate('invalid-date-string');
    }).toThrow(
      Error('Invalid date passed to formatPastDate: "invalid-date-string"'),
    );
  });

  it('should log an error and return empty string when passed NaN', () => {
    expect(() => {
      parseDate(NaN);
    }).toThrow(Error('Invalid date passed to formatPastDate: "NaN"'));
  });

  it('should log an error and return empty string when passed invalid Date object', () => {
    expect(() => {
      parseDate(new Date(NaN));
    }).toThrow(Error('Invalid date passed to formatPastDate: "Invalid Date"'));
  });
});

describe('beautifyPastDateRelativeToNow', () => {
  it('should return the correct relative date', () => {
    const mockDate = '2023-01-01';
    const actualDate = new Date(mockDate);
    const expected = formatDistanceToNow(actualDate, { addSuffix: true });

    const result = beautifyPastDateRelativeToNow(mockDate);
    expect(result).toEqual(expected);
  });

  it('should log an error and return empty string when passed an invalid date string', () => {
    const result = beautifyPastDateRelativeToNow('invalid-date-string');

    expect(logError).toHaveBeenCalledWith(
      Error('Invalid date passed to formatPastDate: "invalid-date-string"'),
    );
    expect(result).toEqual('');
  });

  it('should log an error and return empty string when passed NaN', () => {
    const result = beautifyPastDateRelativeToNow(NaN);

    expect(logError).toHaveBeenCalledWith(
      Error('Invalid date passed to formatPastDate: "NaN"'),
    );
    expect(result).toEqual('');
  });

  it('should log an error and return empty string when passed invalid Date object', () => {
    const result = beautifyPastDateRelativeToNow(
      new Date('invalid-date-asdasd'),
    );

    expect(logError).toHaveBeenCalledWith(
      Error('Invalid date passed to formatPastDate: "Invalid Date"'),
    );
    expect(result).toEqual('');
  });
});

describe('beautifyPastDateAbsolute', () => {
  it('should log an error and return empty string when passed an invalid date string', () => {
    const result = beautifyPastDateAbsolute('invalid-date-string');

    expect(logError).toHaveBeenCalledWith(
      Error('Invalid date passed to formatPastDate: "invalid-date-string"'),
    );
    expect(result).toEqual('');
  });

  it('should log an error and return empty string when passed NaN', () => {
    const result = beautifyPastDateAbsolute(NaN);

    expect(logError).toHaveBeenCalledWith(
      Error('Invalid date passed to formatPastDate: "NaN"'),
    );
    expect(result).toEqual('');
  });

  it('should log an error and return empty string when passed invalid Date object', () => {
    const result = beautifyPastDateAbsolute(new Date(NaN));

    expect(logError).toHaveBeenCalledWith(
      Error('Invalid date passed to formatPastDate: "Invalid Date"'),
    );
    expect(result).toEqual('');
  });

  it('should return the correct format when the date difference is less than 24 hours', () => {
    const now = DateTime.local();
    const pastDate = now.minus({ hours: 23 });
    const expected = pastDate.toFormat('HH:mm');

    const result = beautifyPastDateAbsolute(pastDate.toJSDate());
    expect(result).toEqual(expected);
  });

  it('should return the correct format when the date difference is less than 7 days', () => {
    const now = DateTime.local();
    const pastDate = now.minus({ days: 6 });
    const expected = pastDate.toFormat('cccc - HH:mm');

    const result = beautifyPastDateAbsolute(pastDate.toJSDate());
    expect(result).toEqual(expected);
  });

  it('should return the correct format when the date difference is less than 365 days', () => {
    const now = DateTime.local();
    const pastDate = now.minus({ days: 364 });
    const expected = pastDate.toFormat('MMMM d - HH:mm');

    const result = beautifyPastDateAbsolute(pastDate.toJSDate());
    expect(result).toEqual(expected);
  });

  it('should return the correct format when the date difference is more than 365 days', () => {
    const now = DateTime.local();
    const pastDate = now.minus({ days: 366 });
    const expected = pastDate.toFormat('dd/MM/yyyy - HH:mm');

    const result = beautifyPastDateAbsolute(pastDate.toJSDate());
    expect(result).toEqual(expected);
  });
});

describe('hasDatePassed', () => {
  it('should log an error and return false when passed an invalid date string', () => {
    const result = hasDatePassed('invalid-date-string');

    expect(logError).toHaveBeenCalledWith(
      Error('Invalid date passed to formatPastDate: "invalid-date-string"'),
    );
    expect(result).toEqual(false);
  });

  it('should log an error and return false when passed NaN', () => {
    const result = hasDatePassed(NaN);

    expect(logError).toHaveBeenCalledWith(
      Error('Invalid date passed to formatPastDate: "NaN"'),
    );
    expect(result).toEqual(false);
  });

  it('should log an error and return false when passed invalid Date object', () => {
    const result = hasDatePassed(new Date(NaN));

    expect(logError).toHaveBeenCalledWith(
      Error('Invalid date passed to formatPastDate: "Invalid Date"'),
    );
    expect(result).toEqual(false);
  });

  it('should return true when passed past date', () => {
    const now = DateTime.local();
    const pastDate = now.minus({ day: 1 });

    const result = hasDatePassed(pastDate.toJSDate());
    expect(result).toEqual(true);
  });

  it('should return false when passed future date', () => {
    const now = DateTime.local();
    const futureDate = now.plus({ days: 1 });

    const result = hasDatePassed(futureDate.toJSDate());
    expect(result).toEqual(false);
  });

  it('should return false when passed current date', () => {
    const now = DateTime.local();

    const result = hasDatePassed(now.toJSDate());
    expect(result).toEqual(false);
  });
});

describe('beautifyDateDiff', () => {
  it('should return the correct date diff', () => {
    const date = '2023-11-05T00:00:00.000Z';
    const dateToCompareWith = '2023-11-01T00:00:00.000Z';
    const result = beautifyDateDiff(date, dateToCompareWith);
    expect(result).toEqual('4 days');
  });
  it('should return the correct date diff for large diff', () => {
    const date = '2033-11-05T00:00:00.000Z';
    const dateToCompareWith = '2023-11-01T00:00:00.000Z';
    const result = beautifyDateDiff(date, dateToCompareWith);
    expect(result).toEqual('10 years and 4 days');
  });
  it('should return the correct date for negative diff', () => {
    const date = '2013-11-05T00:00:00.000Z';
    const dateToCompareWith = '2023-11-01T00:00:00.000Z';
    const result = beautifyDateDiff(date, dateToCompareWith);
    expect(result).toEqual('-9 years and -361 days');
  });
  it('should return the correct date diff for large diff', () => {
    const date = '2033-11-01T00:00:00.000Z';
    const dateToCompareWith = '2023-11-01T00:00:00.000Z';
    const result = beautifyDateDiff(date, dateToCompareWith);
    expect(result).toEqual('10 years');
  });
  it('should return the proper english date diff', () => {
    const date = '2024-11-02T00:00:00.000Z';
    const dateToCompareWith = '2023-11-01T00:00:00.000Z';
    const result = beautifyDateDiff(date, dateToCompareWith);
    expect(result).toEqual('1 year and 1 day');
  });
  it('should round date diff', () => {
    const date = '2024-11-03T14:04:43.421Z';
    const dateToCompareWith = '2023-11-01T00:00:00.000Z';
    const result = beautifyDateDiff(date, dateToCompareWith);
    expect(result).toEqual('1 year and 2 days');
  });
  it('should compare to now', () => {
    const date = '2027-01-10T00:00:00.000Z';
    const result = beautifyDateDiff(date);
    expect(result).toEqual('3 years and 9 days');
  });
  it('should return short version', () => {
    const date = '2033-11-05T00:00:00.000Z';
    const dateToCompareWith = '2023-11-01T00:00:00.000Z';
    const result = beautifyDateDiff(date, dateToCompareWith, true);
    expect(result).toEqual('10 years');
  });
  it('should return short version for short differences', () => {
    const date = '2023-11-05T00:00:00.000Z';
    const dateToCompareWith = '2023-11-01T00:00:00.000Z';
    const result = beautifyDateDiff(date, dateToCompareWith, true);
    expect(result).toEqual('4 days');
  });
});
