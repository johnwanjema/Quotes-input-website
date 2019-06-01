import { TimePastPipe } from './time-past.pipe';

describe('TimePastPipe', () => {
  it('create an instance', () => {
    const pipe = new TimePastPipe();
    expect(pipe).toBeTruthy();
  });
});
