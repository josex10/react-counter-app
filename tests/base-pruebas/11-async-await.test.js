import { getImagen } from '../../src/base-pruebas/11-async-await';
describe('Testing file 11-async-await', () => {
  test('getImagen should be return an image url', async () => {
    //Arrange
    const imageUrl = await getImagen();

    //Act
    //N/A

    //Assert
    expect(typeof imageUrl).toBe('string');
  });
});
