<script lang="ts">
	import { SVGS } from '$lib/types/svgs';
	import Card from '$lib/components/card.svelte';
	import LinkCard from '$lib/components/link-card.svelte';

	const phone = '3340250705';
	const email = 'daviduziel.gh@gmail.com';
	const github = 'DavidUGH.github.com';

	let darkMode = $state(false);
	$effect(() => {
		darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	});
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- Dark Mode -->
<button
	class={`text-1xl fixed top-4 right-4 w-20 rounded-2xl p-2 md:fixed md:top-4 md:right-4 md:text-2xl ${darkMode ? 'bg-amber-50' : 'bg-gray-800 text-white'} z-10 rounded`}
	onclick={() => (darkMode = !darkMode)}
>
	{darkMode ? '☀️ Light' : '🌙 Dark'}
</button>

<div
	class={`flex min-h-screen items-start justify-center md:items-center md:p-10 ${darkMode ? 'bg-gray-900 text-white' : 'bg-amber-50 text-black'}`}
>
	<!-- Container -->
	<div
		class={`w-max-full flex max-w-screen-lg flex-col rounded-xl shadow-2xl md:max-w-4/6 md:flex-row md:p-5 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
	>
		<div class="flex w-full flex-col gap-6 p-3 md:w-1/2 md:p-6">
			<img class="w-60 self-center object-cover aspect-2/2 rounded-full md:w-80" src="david.jpg" alt="David Uziel" />
			<div class="mt-4 text-center md:hidden">
				<p class="text-5xl font-bold">David Uziel</p>
				<p class="text-2xl">Guevara Hernández</p>
			</div>
			<!-- Contact -->
			<div class="flex flex-col gap-2">
				<p class="text-3xl font-bold">CONTACT</p>
				<p class="flex flex-wrap items-center gap-2 text-lg sm:text-2xl">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class={`h-6 w-6 shrink-0 ${darkMode ? 'fill-white' : 'fill-black'}`}
						viewBox="0 -960 960 960"
					>
						<path d={SVGS['phone']} />
					</svg>
					{phone}
				</p>
				<p class="flex flex-wrap items-center gap-2 text-lg sm:text-2xl">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class={`h-6 w-6 shrink-0 ${darkMode ? 'fill-white' : 'fill-black'}`}
						viewBox="0 -960 960 960"
					>
						<path d={SVGS['at']} />
					</svg>
					{email}
				</p>
				<a
					class="flex flex-wrap items-center gap-2 text-lg sm:text-2xl"
					href="https://github.com/DavidUGH/"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						class="bi bi-github"
						viewBox="0 0 16 16"
					>
						<path d={SVGS['github']} />
					</svg>
					{github}
				</a>
			</div>

			<!-- Education -->
			<div class="flex flex-col gap-2">
				<p class="text-2xl font-bold md:text-3xl">EDUCATION</p>
				<p class="text-xl md:text-2xl">Universidad de Guadalajara</p>
				<p class="text-xl md:text-2xl">Bachelor's degree in Computer Engineering at CUCEI</p>
			</div>
		</div>

		<div class="mx-2 hidden w-2 bg-black md:block"></div>

		<!-- Column -->
		<div class="flex w-full flex-col gap-6 p-3 md:w-20/20 md:p-6">
			<div>
				<p class="hidden text-4xl font-bold md:block md:text-6xl">David Uziel</p>
				<p class="hidden text-4xl md:block md:text-6xl">Guevara Hernández</p>
			</div>

			<!-- Skills -->
			<div class="flex flex-col gap-3">
				<p class="text-3xl font-bold">SKILLS</p>

				<!-- Programming -->
				<p class="hidden flex-wrap gap-2 text-lg sm:text-2xl md:block">
					<strong class="whitespace-nowrap">🛠 Programming:</strong> Java, C#, C++, Rust, Go, Python,
					JS, TS, PHP, Lisp
				</p>
				<div class="block w-full flex-col text-lg md:hidden">
					<strong>🛠 Programming:</strong>
					<ul class="max-h-2/5 list-inside list-disc columns-2 gap-1">
						<li>Java</li>
						<li>C#</li>
						<li>C++</li>
						<li>Rust</li>
						<li>Go</li>
						<li>Python</li>
						<li>JS</li>
						<li>TS</li>
						<li>PHP</li>
						<li>Lisp</li>
					</ul>
				</div>

				<!-- Frontend -->
				<p class="hidden flex-wrap gap-2 text-lg sm:text-2xl md:flex">
					<strong class="whitespace-nowrap">💻 Frontend:</strong> React, React Native, TailwindCSS, Svelte,
					HTML5, CSS3
				</p>
				<div class="block w-full text-lg md:hidden">
					<strong>💻 Frontend:</strong>
					<ul class="max-h-2/5 list-inside list-disc columns-2 gap-1">
						<li>React</li>
						<li>React Native</li>
						<li>TailwindCSS</li>
						<li>Svelte</li>
						<li>HTML5</li>
						<li>CSS3</li>
					</ul>
				</div>

				<!-- Backend -->
				<p class="hidden flex-wrap gap-2 text-lg sm:text-2xl md:flex">
					<strong class="whitespace-nowrap">⚙️ Backend:</strong> Node.js, Deno, Express.js, MySQL, REST
					APIs
				</p>
				<div class="block w-full text-lg md:hidden">
					<strong>⚙️ Backend:</strong>
					<ul class="max-h-2/5 list-inside list-disc columns-2 gap-1">
						<li>Node.js</li>
						<li>Deno</li>
						<li>Express.js</li>
						<li>MySQL</li>
						<li>REST APIs</li>
					</ul>
				</div>

				<!-- DevOps -->
				<p class="hidden flex-wrap gap-2 text-lg sm:text-2xl md:flex">
					<strong class="whitespace-nowrap">📦 DevOps:</strong> Linux, Docker, Kubernetes, Git, CI/CD,
					NGINX
				</p>
				<div class="block w-full text-lg md:hidden">
					<strong>📦 DevOps:</strong>
					<ul class="max-h-2/5 list-inside list-disc columns-2 gap-1">
						<li>Linux</li>
						<li>Docker</li>
						<li>Git</li>
						<li>CI/CD</li>
						<li>NGINX</li>
					</ul>
				</div>

				<!-- Languages -->
				<p class="hidden flex-wrap items-center gap-2 text-lg sm:text-2xl md:flex">
					<strong class="whitespace-nowrap">🌍 Languages:</strong>
					<strong class={`rounded p-1 ${darkMode ? 'bg-indigo-800' : 'bg-amber-400'}`}
						>English (Professional)</strong
					>, Spanish (Native)
				</p>
				<div class="block w-full text-lg md:hidden">
					<strong>🌍 Languages:</strong>
					<ul class="max-h-2/5 list-inside list-disc gap-1">
						<li>
							<strong class={`rounded p-1 ${darkMode ? 'bg-indigo-800' : 'bg-amber-400'}`}
								>English (Professional)</strong
							>
						</li>
						<li>Spanish (Native)</li>
					</ul>
				</div>
			</div>

			<!-- Experience -->
			<div class="flex flex-col gap-2">
				<p class="text-3xl font-bold">EXPERIENCE</p>
				<p class="text-xl sm:text-2xl">
					✨ Full-Stack Developer, Mobile App Developer {'&'} Server Administrator at CUCS
				</p>
			</div>

			<!-- Projects -->
			<div class="flex flex-col gap-2">
				<p class="text-3xl font-bold">PROJECTS</p>
				<Card name="DASS-21" date="SEP 2024 -MAR 2025" description="React - Designed and Developed a web application for a professionally validated mental health quiz "/>
				<Card name="Enfermera Virtual" date="SEP 2024 -MAR 2025" description="React Native - Designed and Developed a mobile application to keep track of mediciine, health appointments and vitals"/>
				<LinkCard name="ShoppingList" url="https://github.com/DavidUGH/ShoppingList" date="In Development" description="SvelteKit + Capacitor, TailwindCSS - Designed and developed a responsive mobile app for tracking expenses with Google Sheets integration." {darkMode}>
					<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="currentColor"
					class="bi-github"
			viewBox="0 0 16 16" > <path d={SVGS['github']} /></svg>
				</LinkCard>
				<LinkCard name="Better Butter Game" date="JAN 2024" description="Godot - Designed and developed a video game for the 2024 Pirate Software Game Jam" url="https://avilesceti.itch.io/better-butter-game" {darkMode}/>
			</div>
		</div>
	</div>
</div>
