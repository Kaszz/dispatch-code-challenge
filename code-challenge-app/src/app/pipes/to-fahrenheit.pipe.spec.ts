import { ToFahrenheitPipe } from './to-fahrenheit.pipe';

describe('ToFahrenheitPipe', () => {
  let pipe: ToFahrenheitPipe;

  beforeEach(() => {
    pipe = new ToFahrenheitPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert 0°C to 32°F', () => {
    expect(pipe.transform(0)).toBe(32);
  });

  it('should convert 100°C to 212°F', () => {
    expect(pipe.transform(100)).toBe(212);
  });

  it('should convert -40°C to -40°F', () => {
    expect(pipe.transform(-40)).toBe(-40);
  });

  it('should handle non-numeric input gracefully', () => {
    expect(pipe.transform(NaN)).toBeNaN();
  });
});
