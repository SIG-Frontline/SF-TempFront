<link rel="preconnect" href="https://rsms.me/" />
<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

<div class="mb-12 mt-8 flex w-dvw flex-col items-center gap-8 px-80" id="container">
	<slot />
</div>

<style>
	:root {
		background-color: transparent !important;
	}

	#container {
		font-family: Inter, monospace !important;
		font-feature-settings:
			'liga' 1,
			'calt' 1 !important; /* fix for Chrome */
	}
</style>
