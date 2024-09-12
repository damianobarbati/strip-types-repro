import { expect, test } from 'vitest';
import { fn } from '#helper/foe';

test('foe', () => {
  const actual = fn(1);
  const expected = 2;
  expect(actual).toBe(expected);
});
