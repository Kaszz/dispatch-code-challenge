import { TimeAgoPipe } from './time-ago.pipe';

describe('TimeAgoPipe', () => {
  let pipe: TimeAgoPipe;

  beforeEach(() => {
    pipe = new TimeAgoPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "0m ago" for the current time', () => {
    const now = new Date().toISOString();
    expect(pipe.transform(now)).toBe('0m ago');
  });

  it('should return "1m ago" for one minute ago', () => {
    const oneMinuteAgo = new Date(Date.now() - 60000).toISOString();
    expect(pipe.transform(oneMinuteAgo)).toBe('1m ago');
  });

  it('should return "1h 0m ago" for one hour ago', () => {
    const oneHourAgo = new Date(Date.now() - 3600000).toISOString();
    expect(pipe.transform(oneHourAgo)).toBe('1h 0m ago');
  });

  it('should handle invalid date string', () => {
    const invalidDate = 'invalid-date';
    expect(pipe.transform(invalidDate)).toBe('Invalid Date');
  });

  it('should return "2h 30m ago" for two and a half hours ago', () => {
    const twoAndHalfHoursAgo = new Date(Date.now() - 9000000).toISOString();
    expect(pipe.transform(twoAndHalfHoursAgo)).toBe('2h 30m ago');
  });
});
