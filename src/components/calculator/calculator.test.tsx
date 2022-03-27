import { render, screen,fireEvent } from '@testing-library/react';
import Calculator from './calculator';

test('should display 4 error text while all required fields are empty and user submits the form!', async () => {
  render(<Calculator />);
  const button = screen.getByRole("button", { name: /Calculate.../i });
  fireEvent.click(button);
  const errorText = await screen.findAllByText('This field is required!');
  expect(errorText).toHaveLength(4);
});
