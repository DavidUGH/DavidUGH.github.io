<script>
	let { name, date, description} = $props();
</script>
<div class={`flex w-full flex-col rounded-2xl border p-5 shadow-xl transition`}>
	<p class="text-xl font-bold sm:text-2xl">{name}</p>
	<i>{date}</i>
	<p class="text-lg sm:text-xl">{description}</p>
</div>
