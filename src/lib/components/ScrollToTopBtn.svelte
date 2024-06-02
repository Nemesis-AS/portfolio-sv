<script>
	import { onMount } from 'svelte';

	let hidden = true;

	onMount(() => {
		window.addEventListener('scroll', (e) => {
			if (window.scrollY > window.innerHeight * 1.5) hidden = false;
			else hidden = true;
		});
	});
</script>

<a href="#top" class="fixed bottom-8 right-8 bg-black rounded-full p-2 transition-opacity duration-300 {hidden ? 'pointer-events-none opacity-0' : 'opacity-100'}">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="size-8"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
	</svg>
</a>
