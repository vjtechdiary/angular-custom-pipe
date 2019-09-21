import { SqrtPipe } from './sqrt.pipe';

describe('CustomPipe', () => {
  it('create an instance', () => {
    const pipe = new SqrtPipe();
    expect(pipe).toBeTruthy();
  });
});
