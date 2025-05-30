import { FirebaseTimeStampPipe } from './firebase-time-stamp.pipe';

describe('FirebaseTimeStampPipe', () => {
  it('create an instance', () => {
    const pipe = new FirebaseTimeStampPipe();
    expect(pipe).toBeTruthy();
  });
});
