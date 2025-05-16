<script lang="ts">
	import {SVGS} from '$lib/types/svgs'
	const phone = "3340250705"
	const email = "daviduziel.gh@gmail.com"
	const github = "DavidUGH.gihub.com"
</script>

<div class="flex bg-amber-50 min-h-screen p-4 justify-center items-start md:items-center">
	<div class="flex flex-row bg-white p-5 max-h-300 max-w-400 shadow-2xl">
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
							<strong class="whitespace-nowrap">🌍 Languages: </strong> <strong class="bg-amber-400 p-1">English (Conversational/Professional)</strong>, Spanish (Native)</p>
			</div>
			<div class="flex flex-col gap-2">
				<p class="text-4xl text-left font-bold">EXPERIENCE</p>
				<p class="flex text-3xl text-left gap-2 ">✨ Full-Stack Developer, Mobile App Developer {'&'} Server Administrator at CUCS</p>
			</div>
			<div class="flex flex-col gap-2">
				<p class="text-4xl text-left font-bold">PROJECTS</p>
				<a class="flex flex-col rounded-2xl shadow-xl p-5 hover:bg-amber-300 active:bg-amber-500"
				 href="https://github.com/DavidUGH/ShoppingList"
					>
					<p class="text-3xl">
						<strong>Shopping List</strong> SvelteKit, TailwindCSS </p>	
						<p class="text-3xl"> Designed and deployed a fast, responsive mobile application for easy tracking of your shopping expenses with Google Sheets integration. </p>	
				</a>
			</div>
		</div>
	</div>
</div>
