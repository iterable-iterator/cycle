import test from 'ava';

import {ncycle} from '#module';

test('empty input', (t) => {
	const it = ncycle([], 10_000);
	t.true(it.next().done);
});

test('string input', (t) => {
	const actual = Array.from(ncycle('AB', 3));
	const expected = ['A', 'B', 'A', 'B', 'A', 'B'];
	t.deepEqual(actual, expected);
});
