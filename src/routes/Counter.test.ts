import { describe, it, expect } from 'vitest';
import { Counter } from './Counter.svelte';

describe('Counter', () => {
    it('should render', () => {
        expect(Counter).toMatchSnapshot();
    });

    it('should be able to increment', () => {
        const { component, getByText } = Counter.render();
        getByText('0');

        component.$set({ count: 1 });
        getByText('1');
    });
}
);