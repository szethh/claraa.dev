<script>
	import TechIcon from '$lib/components/cv/tech-icon.svelte';
	import ScrollFollower from '$lib/components/cv/animation/scroll-follower.svelte';
	import ExperienceItem from '$lib/components/cv/experience-item.svelte';
	import Typewriter from '$lib/components/typewriter/typewriter.svelte';
	import { EMAIL_ADDRESS, studies, workExperience } from '$lib/config';
	import { ArrowDown, ArrowUp } from 'lucide-svelte';

	import Saos from 'saos';
	import Stars from '$lib/components/cv/stars.svelte';

	let scrollY = 0;

	function handleScroll() {
		scrollY = window.scrollY;
	}
</script>

<svelte:window on:scroll={handleScroll} />

{#if scrollY > 400}
	<button
		on:click={() => document.body.scrollIntoView({ behavior: 'smooth' })}
		class="fixed bottom-[5%] z-50 right-[5%] card !bg-slate-700 p-4 rounded-full group hover:brightness-105 flex items-center gap-1"
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

		<div class="space-y-8 text-xl font-light">
			<p>
				👋 Hello there! I'm Clara Periago, a passionate web developer from Spain 🇪🇸, currently based
				in Nijmegen, The Netherlands 🇳🇱.
			</p>
			<p>
				💻 I specialize in creating dynamic and visually appealing websites, combining my technical
				skills with a keen eye for design. My work reflects a commitment to delivering high-quality,
				user-centric web experiences.
			</p>
			<p>
				📖 Currently, I am pursuing a Bachelor in Artificial Intelligence at Radboud University,
				where I continue to deepen my knowledge and stay on top of the latest industry trends. This
				dual focus on academia and professional development allows me to bring fresh insights and
				innovation to my projects.
			</p>
			<p>
				🚀 I am always excited to take on new challenges and contribute to projects that make a
				positive impact. Let's connect and explore the possibilities!
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
		<h2>work</h2>

		<div class="">
			<div class="mt-12 card p-8 gap-4 justify-center items-center">
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
	<section class="text-right">
		<h2>study</h2>

		<div class="mt-12 card p-8 gap-4 justify-center items-center">
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
	><section>
		<h2>technologies</h2>

		<div class="space-y-6">
			<p>Here are some of the technologies I use in my day to day!</p>
			<p>
				For designing websites (like this one!) or at work, I use <TechIcon name="svelte"
					>SvelteKit</TechIcon
				> and <TechIcon name="ts">TypeScript</TechIcon>. I specialize in fullstack development,
				deploying applications on Azure, implementing CI/CD pipelines and containerizing apps with
				Docker for streamlined workflows.
			</p>
			<p>
				For data science and machine learning projects, my go-to is <TechIcon name="python"
					>Python</TechIcon
				>, which I have more than 4 years of experience with.
			</p>
			<p>
				You can see the source of this website on
				<a href="https://github.com/szethh/claraa.io" target="_blank">my GitHub</a>.
			</p>
		</div>

		<div class="mt-4">
			<p>The full list of technologies I use:</p>
			<table class="table-auto border-2 border-slate-500 border-collapse">
				<thead>
					<tr>
						<th>Tech</th>
						<th>Proficiency</th>
						<th>Notes</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td width="25%"><TechIcon name="svelte">SvelteKit</TechIcon></td>
						<td><Stars stars={4} /></td>
						<td>This is my current favorite framework, and what powers this site!</td>
					</tr>
					<tr>
						<td><TechIcon name="ts">TypeScript</TechIcon></td>
						<td><Stars stars={4} /></td>
						<td>
							Typescript is my go-to language for both frontend and backend development. I use it
							alongisde SvelteKit to build my apps.
						</td>
					</tr>
					<tr>
						<td><TechIcon name="effect">Effect</TechIcon></td>
						<td><Stars stars={3} /></td>
						<td>
							I use Effect to build robust and safe web applications, allowing me to build reliable
							and maintainable code.
						</td>
					</tr>
					<tr>
						<td><TechIcon name="python">Python</TechIcon></td>
						<td><Stars stars={5} /></td>
						<td>
							I use Python for data science and machine learning projects. It's the language I have
							most experience with.
						</td>
					</tr>
					<tr>
						<td><TechIcon name="azure">Azure / Azure DevOps</TechIcon></td>
						<td><Stars stars={3} /></td>
						<td>
							At work I use Azure DevOps to manage my projects. I have experience managing Azure
							resources and deploying applications to Azure, using Bicep and Azure Pipelines to
							fully automate app deployments.
						</td>
					</tr>
					<tr>
						<td><TechIcon name="docker">Docker</TechIcon></td>
						<td><Stars stars={5} /></td>
						<td
							>I have over 3 years of experience containerizing apps with Docker, as well as
							deploying them with tools like Docker Compose.</td
						>
					</tr>
					<tr>
						<td><TechIcon name="ansible">Ansible</TechIcon></td>
						<td><Stars stars={3} /></td>
						<td
							>For infrastructure automation, I have used Ansible for a few years. However, I am
							currently moving away from it, towards Nix.</td
						>
					</tr>
					<tr>
						<td><TechIcon name="nix">Nix</TechIcon></td>
						<td><Stars stars={2} /></td>
						<td>
							I'm currently learning Nix as a replacement for Ansible. I'm loving it so far, but I'm
							still learning the ropes.
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</Saos>

<Saos
	animation={'fade-in-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'}
	animation_out={'fade-out-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'}
	top={200}
>
	<section>
		<h2>homelab</h2>

		<div class="space-y-6">
			<p>
				As a hobby, I maintain a homelab where automation and infrastructure as code play a pivotal
				role to manage my personal servers. Ansible is my go-to tool for automation, allowing me to
				streamline tasks and manage configurations efficiently. Nix complements this setup,
				providing a declarative approach to system configuration and package management. This
				combination not only enhances productivity but also ensures my setup is reproducible and
				automated.
			</p>
			<p>
				I started this hobby during the 2020 pandemic, and it has allowed me to learn lots about
				Docker, Linux and server administration in general. I'm always eager to try new ways of
				improve my servers and keep learning.
			</p>
		</div>
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
			<a href="mailto:{EMAIL_ADDRESS}" target="_blank"
				><code class="text-cyan-400">{EMAIL_ADDRESS}</code></a
			>
		</p>

		<p>
			you can also find me on <TechIcon name="linkedin">
				<a href="https://www.linkedin.com/in/clara-periago/" target="_blank">LinkedIn</a>
			</TechIcon>.
		</p>
	</section>
</Saos>

<style lang="postcss">
	h2 {
		@apply mb-8;
	}

	p {
		@apply my-2;
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

	thead > tr > th {
		@apply bg-zinc-800 border-t-2 border-slate-600;
	}

	tr > td {
		@apply border-t-2 border-slate-600 bg-neutral-800;
	}

	tr > td:nth-child(2) {
		@apply px-0;
	}

	tr > td:nth-child(3) {
		@apply px-20;
	}

	tr > td,
	th {
		@apply p-4;
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
			@apply text-5xl;
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
</style>
