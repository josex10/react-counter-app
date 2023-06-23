import { describe, expect, test } from '@jest/globals';
import { getGreetings } from '../../src/base-pruebas/02-template-string';

describe('Suit test for file 02-template-string', () => {
  test("Test getGreetings fn should be 'Hola Jose'", () => {
    //Arrange
    const name = 'Jose';

    //Act
    const finalGreetings = `Hola ${name}`;

    //Assert
    expect(getGreetings(name)).toBe(finalGreetings);
  });
});
