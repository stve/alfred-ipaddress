import test from 'ava';
import alfyTest from 'alfy-test';

if (!process.env.CI) {
	test('local IP arg', async t => {
		const alfy = alfyTest();
		const result = await alfy('ip');

		t.regex(result[0].arg, /(\d)+\.(\d)+\.(\d)+\.(\d)+/);
	});

	test('local IP title', async t => {
		const alfy = alfyTest();
		const result = await alfy('ip');

		t.regex(result[0].title, /Local IP: (\d)+\.(\d)+\.(\d)+\.(\d)+/);
	});
}

test('external IP arg', async t => {
	const alfy = alfyTest();
	const result = await alfy('ip');

	t.regex(result[1].arg, /(\d)+\.(\d)+\.(\d)+\.(\d)+/);
});

test('external IP title', async t => {
	const alfy = alfyTest();
	const result = await alfy('ip');

	t.regex(result[1].title, /External IP: (\d)+\.(\d)+\.(\d)+\.(\d)+/);
});
