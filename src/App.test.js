import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi There! How are you!/i);
  expect(linkElement).toBeInTheDocument();
});
