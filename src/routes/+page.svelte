<script>
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import HomeHero from '$lib/components/HomeHero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';

	import '../app.css';
</script>

<svelte:head>
    <title>Portfolio | Akshat Shukla</title>
    <meta name="description" content="Personal portfolio website by Akshat Shukla">
</svelte:head>

<HomeHero />
<About />
<Skills />
<Projects />
<Contact />