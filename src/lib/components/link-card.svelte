<script>
	let { name, date, description, url, darkMode, children = undefined} = $props();
</script>
<a class={`flex w-full flex-col rounded-2xl border p-5 shadow-xl transition ${darkMode ? 'hover:bg-indigo-800 active:bg-indigo-700' : 'hover:bg-amber-400 active:bg-amber-500'}`}
	 href={url}>
	 <div class="flex flex-row justify-between">
		 <p class="text-xl font-bold sm:text-2xl">{name}</p>
		 {@render children?.()}
	 </div>
		 <i>{date}</i>
	 <p class="text-lg sm:text-xl">
		 {description}
	 </p>
</a>
