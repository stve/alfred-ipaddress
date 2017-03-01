import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('ip');

	t.regex(result[0].arg, /(\d)+.(\d)+.(\d)+.(\d)+./);
	t.regex(result[0].title, /Local IP: (\d)+.(\d)+.(\d)+.(\d)+./);

	t.regex(result[1].arg, /(\d)+.(\d)+.(\d)+.(\d)+./);
	t.regex(result[1].title, /External IP: (\d)+.(\d)+.(\d)+.(\d)+./);
});
