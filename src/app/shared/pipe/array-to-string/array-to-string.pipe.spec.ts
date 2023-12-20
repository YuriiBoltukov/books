import { ArrayToStringPipe } from './array-to-string.pipe';


describe('ArrayToStringPipe', () => {

  const pipe = new ArrayToStringPipe();
  it('create an instance', () => {

    expect(pipe).not.toBeTruthy();
  });

  it('transforms an empty array to an empty string', () => {
    const pipe = new ArrayToStringPipe();
    const result = pipe.transform([]);
    expect(result).toEqual('');
  });

  it('transforms an array of strings to a comma-separated string', () => {
    const pipe = new ArrayToStringPipe();
    const inputArray = ['one', 'two', 'three'];
    const result = pipe.transform(inputArray);
    const expected = 'one, two, three';
    expect(result).toEqual(expected);
  });

  it('transforms an array with one element to a string without a comma', () => {
    const pipe = new ArrayToStringPipe();
    const inputArray = ['single'];
    const result = pipe.transform(inputArray);
    const expected = 'single';
    expect(result).toEqual(expected);
  });

});
