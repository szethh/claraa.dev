<script>
	import { TechIcon, TechEntry } from '$lib/components/cv/tech';
	import ScrollFollower from '$lib/components/cv/animation/scroll-follower.svelte';
	import ExperienceItem from '$lib/components/cv/experience-item.svelte';
	import Typewriter from '$lib/components/typewriter/typewriter.svelte';
	import { EMAIL, REPO, studies, workExperience } from '$lib/config';
	import { ArrowDown, ArrowUp } from 'lucide-svelte';

	import Saos from 'saos';
	import { getScrollPercent } from '$lib/utils/ui';
	import { fly } from 'svelte/transition';

	let scrollPerc = 0;

	function handleScroll() {
		scrollPerc = getScrollPercent(document);
	}
</script>

<svelte:window on:scroll={handleScroll} />

<svelte:head>
	<title>Clara Periago</title>
</svelte:head>

{#if scrollPerc > 10 && scrollPerc < 95}
	<button
		on:click={() => document.body.scrollIntoView({ behavior: 'smooth' })}
		class="fixed bottom-[5%] z-50 right-[5%] card !bg-slate-700 p-4 rounded-full group hover:brightness-105 flex items-center gap-1"
		transition:fly
	>
		<ArrowUp />
		<span class="group-hover:block hidden transition-opacity duration-300">Back to top</span>
	</button>
{/if}

<section class="flex flex-col justify-center items-center gap-4 h-[75vh]">
	<h1>hi!</h1>
	<h3 class="text-gray-300 mt-8">I'm...</h3>

	<div class=" text-orange-500 text-3xl font-mono max-w-[30%] text-center">
		<Typewriter
			duration={75}
			pause={2000}
			texts={[
				{ text: 'Clara :)', color: 'text-purple-500', duration: 5000 },
				{ text: 'a fullstack developer...', color: 'text-orange-500' },
				{ text: 'an artificial intelligence student...' },
				{ text: 'an open source enthusiast...' }
				// { text: 'a linux hobbyist...' }
			]}
		/>
	</div>

	<div class="fixed top-3/4 animate-[pulse_3s_ease-in-out_infinite]">
		<ScrollFollower top={600}>
			<div class="flex flex-col items-center text-xs mt-20 text-gray-300 pointer-events-none">
				<div class=""><ArrowDown /></div>
				<div>scroll down...</div>
			</div>
		</ScrollFollower>
	</div>
</section>

<Saos
	animation={'fade-in-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'}
	animation_out={'fade-out-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'}
	top={200}
>
	<section>
		<h2>about me</h2>

		<div class="!space-y-8 text-xl font-light md:max-w-[60%] card p-8">
			<p>
				👋 Hello there! I'm Clara Periago, a web developer from Spain 🇪🇸, currently based in
				Nijmegen, The Netherlands 🇳🇱.
			</p>
			<p>
				💻 I specialize in fullstack development with SvelteKit and TypeScript. I also have
				experience building and deploying artificial intelligence models with Python.
			</p>
			<p>
				📖 Currently, I am pursuing a Bachelor in Artificial Intelligence at Radboud University,
				where I am combining both technical AI development with neuroscience and psychology.
			</p>
		</div>
	</section>
</Saos>

<Saos
	animation={'fade-in-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'}
	animation_out={'fade-out-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'}
	top={200}
>
	<section>
		<h2 class="text-right">work</h2>

		<div class="md:max-w-[60%] ml-auto">
			<div class="card p-8 gap-4 justify-center items-center">
				{#each workExperience as entry, i}
					{#if i !== 0}
						<hr class="col-span-3 border-gray-700 my-6" />
					{/if}

					<ExperienceItem {entry} />

					<p class="my-4">
						{entry.description}
					</p>
				{/each}
			</div>
		</div>
	</section>
</Saos>

<Saos
	animation={'fade-in-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'}
	animation_out={'fade-out-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'}
	top={200}
>
	<section>
		<h2>study</h2>

		<div class="card p-8 gap-4 justify-center items-center md:max-w-[60%]">
			{#each studies as entry, i}
				{#if i !== 0}
					<hr class="col-span-3 border-gray-700 my-6" />
				{/if}

				<div class="">
					<ExperienceItem {entry} />
				</div>

				<p class="my-4">
					{entry.description}
				</p>
			{/each}
		</div>
	</section>
</Saos>

<Saos
	animation={'fade-in-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'}
	animation_out={'fade-out-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'}
	top={200}
>
	<section>
		<h2 class="text-right">homelab</h2>

		<div class="space-y-6 card p-8 md:max-w-[60%] ml-auto">
			<p>
				As a hobby, I maintain a homelab where I self host a variety of services over multiple
				networks and servers. Some of the services I run include a home media server with Jellyfin,
				a home automation server with Home Assistant, and a personal git instance. You can see all
				of them in my <a href="https://github.com/szethh/nixie" target="_blank">nix repo</a>.
			</p>
			<p>
				I initally used Docker for running most of the apps, as well as
				<a href="https://github.com/szethh/infra" target="_blank">Ansible</a> for automation, but I am
				now moving to NixOS. Now most of the services are managed by systemd instead of being in docker
				containers, and my setup is much more reliable thanks to nix.
			</p>
			<p>
				I started this hobby during the 2020 pandemic, and it has allowed me to learn lots about
				Docker, Linux and server administration in general. I'm always eager to try new ways of
				<span class="line-through">breaking</span> improving my infrastructure and keep learning :)
			</p>
		</div>
	</section>
</Saos>

<Saos
	animation={'fade-in-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'}
	animation_out={'fade-out-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'}
	top={200}
>
	<section>
		<h2>technologies</h2>

		<div class="space-y-6 md:max-w-[60%] card p-8">
			<p class="">Here are some of the technologies I use in my day to day!</p>
			<ul class="list-disc space-y-2">
				<li>
					<p>
						For designing websites (like this one!) or at work, I use <TechIcon name="svelte"
							>SvelteKit</TechIcon
						> and <TechIcon name="ts">TypeScript</TechIcon>. I specialize in fullstack development,
						deploying applications on Azure, implementing CI/CD pipelines and containerizing apps
						with Docker.
					</p>
				</li>
				<li>
					<p>
						For data science and machine learning projects, my go-to is <TechIcon name="python"
							>Python</TechIcon
						>, which I have more than 4 years of experience with.
					</p>
				</li>
			</ul>
		</div>

		<div class="mt-8">
			<p>The full list of technologies I use:</p>

			<div class="card rounded p-8 md:max-w-[60%] grid md:grid-cols-1 gap-4">
				<TechEntry name="svelte" stars={4.5}>
					<p>This is my current favorite framework, and what powers this site!</p>
				</TechEntry>

				<TechEntry name="ts" stars={4.5}>
					<p>
						Typescript is my go-to language for both frontend and backend development. I use it
						alongisde SvelteKit to build my apps.
					</p>
				</TechEntry>

				<TechEntry name="effect" stars={3}>
					<p>
						I use Effect to build robust and safe web applications, allowing me to build reliable
						and maintainable code.
					</p>
				</TechEntry>

				<TechEntry name="python" stars={5}>
					<p>
						I use Python for data science and machine learning projects, as well as for most of my
						university courses. It's the language I have most experience with.
					</p>
				</TechEntry>

				<TechEntry name="azure" stars={3}>
					<p>
						At work I use Azure DevOps to manage my projects. I have experience managing Azure
						resources and deploying applications to Azure, using Bicep and Azure Pipelines to fully
						automate app deployments.
					</p>
				</TechEntry>

				<TechEntry name="docker" stars={5}>
					<p>
						I have over 4 years of experience containerizing apps with Docker, as well as deploying
						them with tools like Docker Compose.
					</p>
				</TechEntry>

				<TechEntry name="ansible" stars={3}>
					<p>
						For infrastructure automation, I have used Ansible for a few years. However, I am
						currently moving away from it, towards Nix.
					</p>
				</TechEntry>

				<TechEntry name="nix" stars={2}>
					<p>
						I'm currently learning Nix as a replacement for Ansible. I'm loving it so far, but I'm
						still learning the ropes.
					</p>
				</TechEntry>
			</div>
		</div>

		<p>
			You can see the source of this website on
			<a href="https://github.com/szethh/{REPO}" target="_blank">my GitHub</a>.
		</p>
	</section>
</Saos>

<Saos
	animation={'fade-in-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'}
	animation_out={'fade-out-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'}
	top={200}
>
	<section class="text-center">
		<h2>contact</h2>

		<p>want to contact me?</p>
		<p>
			send an email to
			<a href="mailto:{EMAIL}" target="_blank"><code class="text-cyan-400">{EMAIL}</code></a>
		</p>

		<p>
			you can also find me on <TechIcon name="linkedin" cls="!text-cyan-400">LinkedIn</TechIcon>.
		</p>
	</section>
</Saos>

<style lang="postcss">
	h2 {
		@apply md:mb-8 mb-4;
	}

	p {
		@apply my-2 font-light;
	}

	a {
		@apply text-cyan-400;
		text-decoration: underline;
	}

	section {
		margin-bottom: 6rem;
	}

	@keyframes -global-fade-in-bottom {
		0% {
			transform: translateY(100px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes -global-fade-out-bottom {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		100% {
			transform: translateY(100px);
			opacity: 0;
		}
	}

	/* GENERAL ATTRIBUTES */

	h1 {
		@apply text-9xl;
	}

	h2 {
		@apply text-7xl;
	}

	@media (max-width: 640px) {
		h2 {
			@apply text-4xl;
		}
	}

	h3 {
		@apply text-5xl;
	}

	@media (max-width: 640px) {
		h3 {
			@apply text-3xl;
		}
	}

	ul li {
		display: list-item;
		margin-left: 1.5em;
	}
</style>
