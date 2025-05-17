<script lang="ts">
	import { SVGS } from '$lib/types/svgs'

	const phone = "3340250705"
	const email = "daviduziel.gh@gmail.com"
	const github = "DavidUGH.github.com"

	let darkMode = $state(false);
	$effect(() => {
		darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	});
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- Dark Mode -->
<button
	class={`fixed top-4 right-4 w-20 text-1xl md:text-2xl rounded-2xl md:fixed md:top-4 md:right-4 p-2 ${darkMode ? 'bg-amber-50' : 'bg-gray-800 text-white'} rounded z-10`}
	onclick={() => (darkMode = !darkMode)}
>
	{darkMode ? '☀️ Light' : '🌙 Dark'}
</button>

<div class={`flex min-h-screen md:p-10 justify-center items-start md:items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-amber-50 text-black'}`}>
	<!-- Container -->
	<div class={`flex flex-col md:flex-row md:p-5 max-w-screen-lg shadow-2xl rounded-xl w-max-full md:max-w-4/6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
		<div class="flex flex-col p-3 md:p-6 gap-6 w-full md:w-1/2">
			<img class="rounded-full w-60 md:w-80 self-center" src="david.jpeg" alt="David Uziel" />
			<div class="md:hidden text-center mt-4">
				<p class="text-5xl font-bold">David Uziel</p>
				<p class="text-2xl">Guevara Hernández</p>
			</div>
			<!-- Contact -->
			<div class="flex flex-col gap-2">
				<p class="text-3xl font-bold">CONTACT</p>
				<p class="flex items-center text-lg sm:text-2xl gap-2 flex-wrap">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0" viewBox="0 -960 960 960">
						<path d={SVGS['phone']} />
					</svg>
					{phone}
				</p>
				<p class="flex items-center text-lg sm:text-2xl gap-2 flex-wrap">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0" viewBox="0 -960 960 960">
						<path d={SVGS['at']} />
					</svg>
					{email}
				</p>
				<a class="flex items-center text-lg sm:text-2xl gap-2 flex-wrap" href="https://github.com/DavidUGH/">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
						<path d={SVGS['github']} />
					</svg>
					{github}
				</a>
			</div>

			<!-- Education -->
			<div class="flex flex-col gap-2">
				<p class="text-2xl md:text-3xl font-bold">EDUCATION</p>
				<p class="text-xl md:text-2xl">Universidad de Guadalajara</p>
				<p class="text-xl md:text-2xl">Bachelor's degree in Computer Engineering at CUCEI</p>
			</div>
		</div>

		<div class="hidden md:block w-2 bg-black mx-2"></div>

		<!-- Column -->
		<div class="flex flex-col p-3 md:p-6 gap-6 w-full md:w-20/20">
			<div>
				<p class="hidden md:block text-4xl md:text-6xl font-bold">David Uziel</p>
				<p class="hidden md:block text-4xl md:text-6xl">Guevara Hernández</p>
			</div>

			<!-- Skills -->
			<div class="flex flex-col gap-3">
				<p class="text-3xl font-bold">SKILLS</p>

				<!-- Programming -->
				<p class="hidden md:block text-lg sm:text-2xl gap-2 flex-wrap">
					<strong class="whitespace-nowrap">🛠 Programming:</strong> C#, C++, Rust, Go, Python, JS, TS, Lisp
				</p>
				<div class="block flex-col md:hidden text-lg w-full">
					<strong>🛠 Programming:</strong>
					<ul class="list-disc list-inside max-h-2/5 columns-2 gap-1">
						<li>C#</li>
						<li>C++</li>
						<li>Rust</li>
						<li>Go</li>
						<li>Python</li>
						<li>JS</li>
						<li>TS</li>
						<li>Lisp</li>
					</ul>
				</div>

				<!-- Frontend -->
				<p class="hidden md:flex text-lg sm:text-2xl gap-2 flex-wrap">
					<strong class="whitespace-nowrap">💻 Frontend:</strong> React, React Native, TailwindCSS, Svelte, HTML5, CSS3
				</p>
				<div class="block md:hidden text-lg w-full">
					<strong>💻 Frontend:</strong>
					<ul class="list-disc list-inside max-h-2/5 columns-2 gap-1">
						<li>React</li>
						<li>React Native</li>
						<li>TailwindCSS</li>
						<li>Svelte</li>
						<li>HTML5</li>
						<li>CSS3</li>
					</ul>
				</div>

				<!-- Backend -->
				<p class="hidden md:flex text-lg sm:text-2xl gap-2 flex-wrap">
					<strong class="whitespace-nowrap">⚙️ Backend:</strong> Node.js, Deno, Express.js, MySQL, REST APIs
				</p>
				<div class="block md:hidden text-lg w-full">
					<strong>⚙️ Backend:</strong>
					<ul class="list-disc list-inside max-h-2/5 columns-2 gap-1">
						<li>Node.js</li>
						<li>Deno</li>
						<li>Express.js</li>
						<li>MySQL</li>
						<li>REST APIs</li>
					</ul>
				</div>

				<!-- DevOps -->
				<p class="hidden md:flex text-lg sm:text-2xl gap-2 flex-wrap">
					<strong class="whitespace-nowrap">📦 DevOps:</strong> Linux, Docker, Git, CI/CD, NGINX
				</p>
				<div class="block md:hidden text-lg w-full">
					<strong>📦 DevOps:</strong>
					<ul class="list-disc list-inside max-h-2/5 columns-2 gap-1">
						<li>Linux</li>
						<li>Docker</li>
						<li>Git</li>
						<li>CI/CD</li>
						<li>NGINX</li>
					</ul>
				</div>

	<!-- Languages -->
	<p class="hidden md:flex text-lg sm:text-2xl gap-2 items-center flex-wrap">
		<strong class="whitespace-nowrap">🌍 Languages:</strong>
		<strong class={`p-1 rounded ${darkMode ? 'bg-indigo-800' : 'bg-amber-400'}`}>English (Professional)</strong>,
		Spanish (Native)
	</p>
	<div class="block md:hidden text-lg w-full">
		<strong>🌍 Languages:</strong>
		<ul class="list-disc list-inside max-h-2/5 gap-1">
			<li><strong class={`p-1 rounded ${darkMode ? 'bg-indigo-800' : 'bg-amber-400'}`}>English (Professional)</strong></li>
			<li>Spanish (Native)</li>
		</ul>
	</div>
</div>


			<!-- Experience -->
			<div class="flex flex-col gap-2">
				<p class="text-3xl font-bold">EXPERIENCE</p>
				<p class="text-xl sm:text-2xl">✨ Full-Stack Developer, Mobile App Developer & Server Administrator at CUCS</p>
			</div>

			<!-- Projects -->
			<div class="flex flex-col gap-2">
				<p class="text-3xl font-bold">PROJECTS</p>
				<a class={`flex flex-col w-full rounded-2xl shadow-xl p-5 transition ${darkMode ? 'hover:bg-indigo-800 active:bg-indigo-700' : 'hover:bg-amber-400 active:bg-amber-500'}`} href="https://github.com/DavidUGH/ShoppingList">
					<p class="text-xl sm:text-2xl font-bold">Shopping List</p>
					<p class="text-lg sm:text-xl">SvelteKit, TailwindCSS — Designed a responsive mobile app for tracking expenses with Google Sheets integration.</p>
				</a>
			</div>
		</div>
	</div>
</div>

