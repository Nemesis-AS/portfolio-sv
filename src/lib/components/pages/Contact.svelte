<script>
	const contactInfo = {
		tel: '+91 1234567890',
		mail: 'me@example.com'
	};
</script>

<section id="contact" class="bg-brand-golden-gray shadow-2xl">
	<div class="my-12 font-display max-w-screen-lg mx-auto">
		<div class="relative flex items-center -translate-y-8">
			<div class="flex-grow border-t-4 border-brand-golden"></div>
			<span class="flex-shrink mx-4 text-4xl font-bold py-3 text-center">Contact</span>
			<div class="flex-grow border-t-4 border-brand-golden"></div>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 max-w-screen-md mx-auto gap-4 sm:gap-8 px-4">
			<div class="flex gap-4 items-center p-4 bg-brand-dark-gray rounded-md shadow-lg group">
				<div class="icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-8 group-hover:scale-125 transition-transform duration-300"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
						/>
					</svg>
				</div>
				<a href="mailto:{contactInfo.mail}" class="text-brand-golden">{contactInfo.mail}</a>
			</div>

			<div class="flex gap-4 items-center p-4 bg-brand-dark-gray rounded-md group">
				<div class="icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-8 group-hover:scale-125 transition-transform duration-300"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
						/>
					</svg>
				</div>
				<a href="tel:{contactInfo.tel}" class="text-brand-golden">{contactInfo.tel}</a>
			</div>
		</div>

		<div class="relative flex items-center translate-y-7">
			<div class="flex-grow border-t-4 border-brand-golden"></div>
			<span class="flex-shrink mx-4 text-4xl font-bold py-3 text-center flex gap-2">
				<a
					class="hover:text-[#0A66C2]"
					href="https://www.linkedin.com/in/as-akshat-shukla/"
					target="_blank"
				>
					<svg
						class="icon"
						role="img"
						fill="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><title>LinkedIn</title><path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						/></svg
					>
				</a>

				<a class="hover:text-[#872792]" href="https://github.com/Nemesis-AS" target="_blank">
					<svg
						class="icon"
						role="img"
						fill="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><title>GitHub</title><path
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						/></svg
					>
				</a>

				<a class="hover:text-white" href="https://x.com/NemesisAS14" target="_blank">
					<svg
						class="icon"
						role="img"
						fill="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><title>X</title><path
							d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
						/></svg
					>
				</a>
			</span>
			<div class="flex-grow border-t-4 border-brand-golden"></div>
		</div>
	</div>
</section>
