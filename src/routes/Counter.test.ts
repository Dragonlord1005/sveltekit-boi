import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Counter from './Counter.svelte';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
    it('should render', () => {
        render(Counter);
        expect(Counter).toMatchSnapshot();
    });

    it('should be able to increment', async () => {
        const user = userEvent.setup()

        const { component } = render(Counter);

        // Mock the increment function
        let count = 0;
        const mock = vi.fn((event) => {
            count = event.detail.count;
            console.log('count', count);
        });
        component.$on('increment', mock);

        const button = screen.getByRole('button', { name: /increase the counter by one/i });
        await user.click(button);

        // expect(mock).toHaveBeenCalled();
        expect(count).toBe(1);

    });
}
);