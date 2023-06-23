import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Testing file 09-promesas', () => {
  test('Testing getHeroeByIdAsync fn shoul be return a valid heroe', (done) => {
    //Arrange
    const heroId = 1;

    //Act
    // N/A

    //Assert
    getHeroeByIdAsync(heroId).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
      });
      done();
    });
  });

  test('Testing getHeroeByIdAsync fn if it does not find any hero will be return a message with the heroId', (done) => {
    //Arrange
    const heroId = 100;

    //Act
    // N/A

    //Assert
    getHeroeByIdAsync(heroId).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe ${heroId}`);
      done();
    });
  });
});
