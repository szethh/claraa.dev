<script lang="ts">
	import type { ExperienceEntry } from '$lib/config';

	interface Props {
		entry: ExperienceEntry;
	}

	let { entry }: Props = $props();

	function monthDiff(date1: Date, date2: Date) {
		const diff =
			(date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth());

		const years = Math.floor(diff / 12);
		let months = diff % 12;
		if (!years && !months) months = 1;

		const fmtUnit = (unit: number, name: string) => `${unit} ${unit > 1 ? `${name}s` : name}`;

		let result: string[] = [];
		if (years > 0) result.push(fmtUnit(years, 'year'));
		if (months > 0) result.push(fmtUnit(months, 'month'));

		return result.join(' & ');
	}

	const fmtDate = (date: Date) => date.toLocaleString('en-GB', { year: 'numeric', month: 'short' });
</script>

<div class="text-xl font-light">
	{entry.title} <span class="brightness-75">- {entry.subtitle}</span>
</div>

<div class="text-gray-400 text-sm">
	{fmtDate(entry.start)} - {(entry.end && fmtDate(entry.end)) || 'present'} ({monthDiff(
		entry.start,
		entry.end ?? new Date()
	)})
</div>
