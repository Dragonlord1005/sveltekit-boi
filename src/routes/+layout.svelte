<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
</script>


<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="trail">Sveltekit-boi</svelte:fragment>
			<svelte:fragment slot="lead">Placeholder for icon</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- Footer ---- -->
	<svelte:fragment slot="footer"><p class="place-content-center">Footer</p></svelte:fragment>
</AppShell>
<!-- <slot /> -->
