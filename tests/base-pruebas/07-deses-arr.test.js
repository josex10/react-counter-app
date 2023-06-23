import { returnArray } from '../../src/base-pruebas/07-deses-arr';
describe('Testing file 07-deses-arr', () => {
  test('Testing returnArray fn should be return an array on position 0 expect string and 1 position expect a number', () => {
    //Arrange
    const [letters, numbers] = returnArray();

    //Act
    //N\A

    //Assert
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });
});
