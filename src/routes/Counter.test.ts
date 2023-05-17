import { render, fireEvent } from '@testing-library/svelte';
// Switch to userEvent

import Counter from './Counter.svelte';

test('renders', () => {
  // Imports
  const { getByLabelText, getByTestId } = render(Counter);
  // Defines the elements to be tested
  const decreaseButton = getByLabelText('Decrease the counter by one');
  const increaseButton = getByLabelText('Increase the counter by one');
  const counterDigits = getByTestId('counter-digits');

  // Checks if the elements are in the document
  expect(decreaseButton).toBeInTheDocument();
  expect(increaseButton).toBeInTheDocument();
  expect(counterDigits).toBeInTheDocument();
});

test('increases count', async () => {
  const { getByLabelText, getByText, getByTestId } = render(Counter);

  const CounterDigits = getByTestId('counter-digits');
  const increaseButton = getByLabelText('Increase the counter by one');

  expect(CounterDigits).toHaveTextContent('0');

  await fireEvent.click(increaseButton);

  expect(getByText('1')).toBeInTheDocument();
  expect(CounterDigits).toHaveTextContent('1');
});