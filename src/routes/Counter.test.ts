import { describe, it, expect } from 'vitest';
import { Counter } from './Counter.svelte';

describe('Counter', () => {
    it('should render', () => {
        expect(Counter).toMatchSnapshot();
    });
    }
);