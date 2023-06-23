import { render, screen } from '@testing-library/react';
import { HelloWorld } from '../src/HelloWorld';

describe('Testing component Hello World 2', () => {
  const title = 'Hello World from test';
  const subtitle = 'Hello World from test - subtitle';

  test('Should be a match with the snapshot', () => {
    const { container } = render(<HelloWorld title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Should be a meesage "Hello World from test"', () => {
    render(<HelloWorld title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('Should be the title on h1 tag', () => {
    render(<HelloWorld title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test('should be show the subtiitle sent by props', () => {
    render(<HelloWorld title={title} subTitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(1);
  });
});
