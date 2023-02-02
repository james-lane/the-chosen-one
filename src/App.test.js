import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button to start spinner', () => {
  render(<App />);
  // const linkElement = screen.getByText(/Find chosen one/i);
  // expect(linkElement).toBeInTheDocument();
});

test.todo('renders spinning names when button is clicked');
test.todo('renders name and try again button when spinner stops');
