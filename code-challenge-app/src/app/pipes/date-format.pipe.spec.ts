import { DateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {
  let pipe: DateFormatPipe;

  beforeEach(() => {
    pipe = new DateFormatPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format date string correctly', () => {
    const dateStr = '2023-10-01T14:30:00Z';
    const formattedDate = pipe.transform(dateStr);
    expect(formattedDate).toBe('9:30 AM CDT');
  });

  it('should handle invalid date string', () => {
    const dateStr = 'invalid-date';
    const formattedDate = pipe.transform(dateStr);
    expect(formattedDate).toBe('Invalid Date');
  });

  it('should format date string with different time', () => {
    const dateStr = '2023-10-01T23:45:00Z';
    const formattedDate = pipe.transform(dateStr);
    expect(formattedDate).toBe('6:45 PM CDT');
  });

  it('should format date string with different timezone', () => {
    const dateStr = '2023-10-01T14:30:00-05:00';
    const formattedDate = pipe.transform(dateStr);
    expect(formattedDate).toBe('2:30 PM CDT');
  });
});
