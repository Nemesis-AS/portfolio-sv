<script>
	import GithubLogo from '$lib/assets/images/github.svg';
	import GlobeLogo from "$lib/assets/images/globe.svg";

	import LoklangImg from "$lib/assets/images/projects/loklang.png";
	import UrlShortnerRSImg from "$lib/assets/images/projects/urlshortner-rs.png";
	import BlogTemplateBS4Img from "$lib/assets/images/projects/blog-template-bs4.png";
	import plotForgeImg from "$lib/assets/images/projects/plotforge.png";
	import PodcastJSImg from "$lib/assets/images/projects/podcasts-js.png";
	import VuetifyBlogImg from "$lib/assets/images/projects/vuetify-blog.png";
	import GodotMazeGenImg from "$lib/assets/images/projects/godot4mazegen.png";
	import GameFAQsDLImg from "$lib/assets/images/projects/gamefaqs-dl.png";

	const projects = [
		{
			title: 'Loklang',
			img: LoklangImg,
			desc: 'Loklang is a local audio streaming service that can be used to access audio files on the host from any device on the network.',
			url: null,
			github: 'https://github.com/Nemesis-AS/loklang-rs'
		},
		{
			title: 'URL Shortener rs',
			img: UrlShortnerRSImg,
			desc: 'A link shortener written in Rust using Rocket',
			url: null,
			github: 'https://github.com/Nemesis-AS/url-shortener-rs'
		},
		{
			title: 'Vuetify Blog',
			img: VuetifyBlogImg,
			desc: 'A blog template made using Vue and Vuetify',
			url: 'https://nemesis-as.github.io/vuetify-blog/#/',
			github: 'https://github.com/Nemesis-AS/vuetify-blog'
		},
		{
			title: 'Blog Template BS4',
			img: BlogTemplateBS4Img,
			desc: 'A blog template made using Bootstrap 4',
			url: 'https://nemesis-as.github.io/blog-template-bs4/',
			github: 'https://github.com/Nemesis-AS/blog-template-bs4'
		},
		{
			title: 'Godot 4 Maze Gen',
			img: GodotMazeGenImg,
			desc: 'A backtracking maze generator written in Godot 4',
			url: 'https://github.com/Nemesis-AS/godot4-maze-gen/releases',
			github: 'https://github.com/Nemesis-AS/godot4-maze-gen'
		},
		{
			title: 'Plotforge',
			img: plotForgeImg,
			desc: 'Unleash the power of AI storytelling. Generate captivating narratives effortlessly with PlotForge, your creative companion. Craft compelling plots, characters, and worlds with our innovative story generation AI.',
			url: 'https://nscc-react101-plotforge.vercel.app/',
			github: 'https://github.com/Nemesis-AS/nscc-react101-plotforge'
		},
		{
			title: 'GameFAQs DL',
			img: GameFAQsDLImg,
			desc: 'A chrome extension to download GameFAQs game guides',
			url: null,
			github: 'https://github.com/Nemesis-AS/gamefaqs-dl'
		},
		{
			title: 'PodcastJS',
			img: PodcastJSImg,
			desc: 'A podcast aggregator app to download and manage podcasts',
			url: null,
			github: 'https://github.com/Nemesis-AS/podcast-js'
		}
	];
</script>

<section id="projects" class="p-4 font-display max-w-screen-lg mx-auto bg-brand-blue-gray">
	<div class="text-4xl font-bold py-6 text-center">Projects</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
		{#each projects as project}
			<div
				class="w-full aspect-video cursor-pointer bg-cover overflow-hidden group"
				style="background-image: url({project.img});"
			>
				<div
					class="w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col gap-4 justify-center items-center bg-black/75 p-8"
				>
					<div class="text-2xl font-bold">{project.title}</div>
					<div class="desc">{project.desc}</div>

					<div class="flex gap-4">
						{#if project.url !== null}
							<a href="{project.url}" target="_blank">
								<img class="size-6 text-white" src={GlobeLogo} alt="Project Link" />
							</a>
						{/if}

						{#if project.github !== null}
							<a href="{project.github}" target="_blank">
								<img class="size-6 text-white" src={GithubLogo} alt="Github Link" />
							</a>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
