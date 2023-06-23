import {
  getHeroeById,
  getHeroesByOwner
} from '../../src/base-pruebas/08-imp-exp';

describe('Testing file 08-imp-exp', () => {
  test('Testing getHeroeById fn should be return a valid hero by id', () => {
    //Arrange
    const heroId = 1;
    const hero = getHeroeById(heroId);

    //Arc
    // N/A

    //Asssert
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('Testing getHeroeById fn if it does not found hero should be return undefiened', () => {
    //Arrange
    const heroId = 100;
    const hero = getHeroeById(heroId);

    //Act
    //N\A

    //Assert
    expect(hero).toBeFalsy();
  });

  test('Testing getHeroesByOwner fn filter heros by owner "DC" it should be return 3 heroes', () => {
    //Arrange
    const heroOwner = 'DC';
    const heroes = getHeroesByOwner(heroOwner);
    const expectedHeroes = [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ];

    //Act
    //N/A

    //Assert
    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(expectedHeroes);
  });

  test('Testing getHeroesByOwner fn filter by owner "Marvel" it should be return 2 heroes', () => {
    //Arrange
    const heroOwner = 'Marvel';
    const heroes = getHeroesByOwner(heroOwner);
    const expectedHeroes = [
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' }
    ];

    //Act
    //N/A

    //Assert
    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(expectedHeroes);
  });
});
