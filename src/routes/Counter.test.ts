import { render } from '@testing-library/svelte';
// Switch to userEvent
import userEvent from '@testing-library/user-event';
import Counter from './Counter.svelte';

describe('Counter testing', () => {
	test('renders', () => {
		const counterComponent = render(Counter);
		// Defines the elements to be tested
		const decreaseButton = counterComponent.getByLabelText('Decrease the counter by one');
		const increaseButton = counterComponent.getByLabelText('Increase the counter by one');
		const counterDigits = counterComponent.getByTestId('counter-digits');

		// Checks if the elements are in the document
		expect(decreaseButton).toBeInTheDocument();
		expect(increaseButton).toBeInTheDocument();
		expect(counterDigits).toBeInTheDocument();
	});

	test('increases count', async () => {
		const { getByLabelText, getByText } = render(Counter);

		const increaseButton = getByLabelText('Increase the counter by one');

		expect(getByText('0')).toBeInTheDocument();

		await userEvent.click(increaseButton);

		expect(getByText('1')).toBeInTheDocument();
	});
});
