import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Testing the component CounterApp', () => {
  const initialValue = 100;

  test('Should be a match with the snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test('Should be show the initial value on 100', () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(initialValue)).toBeTruthy();
  });

  test('Testing the button sum', () => {
    //Arrange
    render(<CounterApp value={initialValue} />);

    //Act
    fireEvent.click(screen.getByRole('button', { name: 'btn-sum' }));
    const expectedValue = initialValue + 1;

    //Assert
    expect(
      screen.getByRole('heading', { name: 'heading-counter' }).innerHTML
    ).toBe(String(expectedValue));
  });

  test('Testing the button sub', () => {
    //Arrange
    render(<CounterApp value={initialValue} />);

    //Act
    fireEvent.click(screen.getByRole('button', { name: 'btn-sub' }));
    const expectedValue = initialValue - 1;

    //Assert
    expect(
      screen.getByRole('heading', { name: 'heading-counter' }).innerHTML
    ).toBe(String(expectedValue));
  });

  test('Testing the button reset', () => {
    //Arrange
    render(<CounterApp value={initialValue} />);

    //Act
    fireEvent.click(screen.getByRole('button', { name: 'btn-sub' }));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    //Assert
    expect(
      screen.getByRole('heading', { name: 'heading-counter' }).innerHTML
    ).toBe(String(initialValue));
  });
});
