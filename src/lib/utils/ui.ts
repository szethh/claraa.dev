// https://stackoverflow.com/a/8028584
export const getScrollPercent = ({ documentElement: h, body: b }: Document) => {
	const st = 'scrollTop';
	const sh = 'scrollHeight';

	return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
};
