import { getUser, getActiveUser } from '../../src/base-pruebas/05-funciones';

describe('Testing the file 05-funciones', () => {
  test('Testing getUser fn should be return a valid User', () => {
    //Arrange
    const expectedUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();
    //Act
    //N\A

    //Assert
    expect(user).toEqual(expectedUser);
  });

  test('Testing getActiveUser fn should be return a active user', () => {
    //Arrange
    const expectedUser = {
      uid: 'ABC567',
      username: 'Jose Manuel'
    };

    const user = getActiveUser(expectedUser.username);

    //Act
    // N/A

    //Assert
    expect(user).toEqual(expectedUser);
  });
});
