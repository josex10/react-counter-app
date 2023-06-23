import { render } from '@testing-library/react';
import { HelloWorld } from '../src/HelloWorld';

describe('Testing component Hello World', () => {
  //   test('Should be a match with the snapshot', () => {
  //     const title = 'Hello World from test';
  //     const { container } = render(<HelloWorld title={title} />);
  //     expect(container).toMatchSnapshot();
  //   });

  test('Should be show a title on h1 tag', () => {
    //Arrange
    const title = 'Hello World from test';
    const { container, getByText, getByTestId } = render(
      <HelloWorld title={title} />
    );

    //Act
    const h1 = container.querySelector('h1');

    //Assert
    // expect(getByText(title)).toBeTruthy();
    // expect(h1.innerHTML).toContain(title);
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('Should be show the subtitle sent by props', () => {
    const title = 'Hello World from test';
    const subTitle = 'Soy un subtitulo';
    const { getAllByText } = render(
      <HelloWorld title={title} subTitle={subTitle} />
    );

    expect(getAllByText(subTitle).length).toBe(1);
  });
});
