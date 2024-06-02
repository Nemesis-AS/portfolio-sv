<script>
	import About from '$lib/components/pages/About.svelte';
	import Contact from '$lib/components/pages/Contact.svelte';
	import HomeHero from '$lib/components/pages/HomeHero.svelte';
	import Projects from '$lib/components/pages/Projects.svelte';
	import Skills from '$lib/components/pages/Skills.svelte';
	
	import ScrollToTopBtn from '$lib/components/ScrollToTopBtn.svelte';

	import '../app.css';
</script>

<svelte:head>
	<title>Portfolio | Akshat Shukla</title>
	<meta name="description" content="Personal portfolio website by Akshat Shukla" />
</svelte:head>

<HomeHero />
<About />
<Skills />
<Projects />
<Contact />

<ScrollToTopBtn />
