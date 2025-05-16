<script lang="ts">
	import {SVGS} from '$lib/types/svgs'
	const phone = "3340250705"
	const email = "daviduziel.gh@gmail.com"
</script>

<div class="flex bg-amber-50 min-h-screen p-4 justify-center items-start md:items-center">
	<div class="flex flex-row bg-white p-5 max-h-300 shadow-2xl">
		<div class="flex flex-col p-10 gap-10">
			<img class="rounded-full w-80 align-middle justify-center"
			src="david.jpeg" alt="">
			<div class="flex flex-col gap-2">
				<p class="text-4xl text-left font-bold">CONTACT</p>
				<p class="flex items-center text-2xl text-left gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0" viewBox="0 -960 960 960">
						<path d="{SVGS['phone']}" /> </svg> {phone} </p>
				<p class="flex items-center text-2xl text-left gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0" viewBox="0 -960 960 960">
						<path d="{SVGS['at']}" />
					</svg> {email} </p>
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
				<p class="text-5xl font-bold">David Uziel</p>
				<p class="text-5xl">Guevara Hernández</p>
			</div>
			<div class="flex flex-col gap-2">
				<p class="text-4xl text-left font-bold">SKILLS</p>
					<p class="flex text-2xl text-left gap-2 whitespace-nowrap">
						<span class="whitespace-nowrap font-bold">🛠 Programming Languages: </span> C#, C++, Rust, Go, Python, JS, TS, Lisp
				</p>
					<p class="flex text-2xl text-left gap-2 whitespace-nowrap">
					<span class="whitespace-nowrap font-bold">💻 Frontend: </span>: React, React Native, TailwindCSS, Svelte, HTML5, CSS3
				</p>
					<p class="flex text-2xl text-left gap-2 whitespace-nowrap">
					<span class="font-bold">⚙️ Backend: </span> Node.js, Deno, Express.js, MySQL, REST APIs
				</p>
					<p class="flex text-2xl text-left gap-2 whitespace-nowrap">
					<span class="font-bold">📦 DevOps {'&'} Tools: </span> Linux, Docker, Git, CI/CD, NGINX </p>
					<p class="flex text-2xl text-left gap-2 whitespace-nowrap">
					<span class="font-bold">🌍 Languages: </span> Ingles (Conversational/Professional), Español (Native)</p>
			</div>
		</div>
	</div>
</div>
