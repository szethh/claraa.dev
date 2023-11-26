<script lang="ts">
	import type { ExperienceEntry } from '$lib/config';

	export let entry: ExperienceEntry;

	function monthDiff(date1: Date, date2: Date) {
		const diff =
			(date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth());

		const years = Math.floor(diff / 12);
		let months = diff % 12;
		if (!years && !months) months = 1;

		let result = '';
		if (years > 0) {
			result += `${years} year`;
			if (years > 1) result += 's';
			result += ' & ';
		}
		if (months > 0) {
			result += `${months} month`;
			if (months > 1) result += 's';
		}
		return result;
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
