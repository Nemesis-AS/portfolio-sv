<script>
    import PythonLogo from "$lib/assets/images/python-logo.svg";
    import HTML5Logo from "$lib/assets/images/html5.svg";
    import CSS3Logo from "$lib/assets/images/css3.svg";
    import JSLogo from "$lib/assets/images/javascript.svg";
    import NodeJSLogo from "$lib/assets/images/nodedotjs.svg";
    import ReactLogo from "$lib/assets/images/react.svg";
    import SvelteLogo from "$lib/assets/images/svelte.svg";
    import RustLogo from "$lib/assets/images/rust.svg";
    import GodotLogo from "$lib/assets/images/godot.svg";
    import NextJSLogo from "$lib/assets/images/nextjs.svg";
    import TailwindLogo from "$lib/assets/images/tailwind.svg";
    import MongoDBLogo from "$lib/assets/images/mongodb.svg";

    const skills = [
        {
            img: HTML5Logo,
            text: "HTML"
        },
        {
            img: CSS3Logo,
            text: "CSS"
        },
        {
            img: JSLogo,
            text: "Javascript"
        },
        {
            img: RustLogo,
            text: "Rust"
        },
        {
            img: GodotLogo,
            text: "Godot"
        },
        {
            img: ReactLogo,
            text: "React"
        },
        {
            img: NextJSLogo,
            text: "NextJS"
        },
        {
            img: SvelteLogo,
            text: "Svelte"
        },
        {
            img: TailwindLogo,
            text: "TailwindCSS"
        },
        {
            img: NodeJSLogo,
            text: "NodeJS"
        },
        {
            img: MongoDBLogo,
            text: "MongoDB"
        },
        {
            img: PythonLogo,
            text: "Python"
        },

    ];
</script>

<section class="p-4 font-display max-w-screen-lg mx-auto">
	<div class="text-4xl font-bold py-6 text-center">My Skills</div>

	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		{#each skills as skill}
			<div
				class="p-12 rounded-lg shadow-lg w-full aspect-square transition-colors duration-300 hover:bg-brand-yellow cursor-pointe flex flex-col gap-4 h-full bg-brand-golden-gray"
			>
				<img class="w-full max-w-full" src={skill.img} alt="{skill.text} Logo" />
				<div class="text-center text-2xl font-bold">{skill.text}</div>
			</div>
		{/each}
	</div>
</section>
