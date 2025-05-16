<script lang="ts">
	import {SVGS} from '$lib/types/svgs'

	const phone = "3340250705"
	const email = "daviduziel.gh@gmail.com"
	const github = "DavidUGH.gihub.com"

	let darkMode = $state(false);
	$effect(() => {
		darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

</script>

<button
	class={`absolute top-4 right-4 p-2 bg-gray-200 ${darkMode ? 'bg-amber-50' : 'bg-gray-800 text-white'} rounded`}
	onclick={() => (darkMode = !darkMode)}
>
	{darkMode ? '☀️ Light':'🌙 Dark' }
</button>
<div class={`flex min-h-screen p-4 justify-center items-start md:items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-amber-50 text-black'}`}>
	<div class={`flex flex-row p-5 max-h-300 max-w-400 shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
		<div class="flex flex-col p-10 gap-10 max-w-100">
			<img class="rounded-full w-80 align-middle justify-center"
			src="david.jpeg" alt="">
			<div class="flex flex-col gap-2 ">
				<p class="text-4xl text-left font-bold">CONTACT</p>
				<p class="flex items-center text-2xl text-left gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0" viewBox="0 -960 960 960">
						<path d="{SVGS['phone']}" /> 
					</svg> {phone} </p>
				<p class="flex items-center text-2xl text-left gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0" viewBox="0 -960 960 960">
						<path d="{SVGS['at']}" />
					</svg> {email} </p>
				<a class="flex items-center text-2xl text-left gap-2" href="https://github.com/DavidUGH/">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"> 
				<path d={SVGS['github']}/> </svg> {github} </a>
			</div>	
			<div class="flex flex-col gap-2">
				<p class="text-4xl text-left font-bold">EDUCATION</p>
				<p class="text-2xl text-left">Universidad de Guadalajara</p>
				<p class="text-2xl text-left">Bachelor's degree in Computer Egineering at CUCEI</p>
			</div>
		</div>
		<div class="min-w-2 min-h-40 bg-black"></div> <!-- yea -->
		<div class="flex flex-col p-10 min-w-200 gap-10">
			<div>
				<p class="text-6xl font-bold">David Uziel</p>
				<p class="text-6xl">Guevara Hernández</p>
			</div>
			<div class="flex flex-col gap-2">
				<p class="text-4xl text-left font-bold">SKILLS</p>
					<p class="flex text-3xl text-left gap-2 whitespace-nowrap">
						<strong class="whitespace-nowrap">🛠 Programming Languages: </strong> C#, C++, Rust, Go, Python, JS, TS, Lisp
				</p>
					<p class="flex text-3xl text-left gap-2 whitespace-nowrap">
					<strong class="whitespace-nowrap">💻 Frontend: </strong>: React, React Native, TailwindCSS, Svelte, HTML5, CSS3
				</p>
					<p class="flex text-3xl text-left gap-2 whitespace-nowrap">
					<strong class="whitespace-nowrap">⚙️ Backend: </strong> Node.js, Deno, Express.js, MySQL, REST APIs
				</p>
					<p class="flex text-3xl text-left gap-2 whitespace-nowrap">
					<strong class="whitespace-nowrap">📦 DevOps {'&'} Tools: </strong> Linux, Docker, Git, CI/CD, NGINX </p>
						<p class="flex text-3xl text-left gap-2 whitespace-nowrap items-center">
		<strong class="whitespace-nowrap">🌍 Languages: </strong> <strong class={`p-1 ${darkMode? 'bg-indigo-800' : 'bg-amber-400' }`}>English (Conversational/Professional)</strong>, Spanish (Native)</p>
			</div>
			<div class="flex flex-col gap-2">
				<p class="text-4xl text-left font-bold">EXPERIENCE</p>
				<p class="flex text-3xl text-left gap-2 ">✨ Full-Stack Developer, Mobile App Developer {'&'} Server Administrator at CUCS</p>
			</div>
			<div class="flex flex-col gap-2">
				<p class="text-4xl text-left font-bold">PROJECTS</p>
				<a class={`flex flex-col rounded-2xl shadow-xl p-5 ${darkMode? 'hover:bg-indigo-800' : 'hover:bg-amber-400' } ${darkMode? 'active:bg-indigo-700' : 'active:bg-amber-500' }`} href="https://github.com/DavidUGH/ShoppingList"
					>
					<p class="text-3xl">
						<strong>Shopping List</strong> SvelteKit, TailwindCSS </p>	
						<p class="text-3xl"> Designed and deployed a fast, responsive mobile application for easy tracking of your shopping expenses with Google Sheets integration. </p>	
				</a>
			</div>
		</div>
	</div>
</div>
