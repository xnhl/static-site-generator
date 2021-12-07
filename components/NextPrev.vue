<template>
	<div id="nextprev">
		<nuxt-link class="nextprev-link prev" v-if="prev" :to="`/${prev.pre}/${prev.slug}`">
			<img class="nextprev-link-icon" src="/assets/icons/arrow.svg" alt="previous page">
			<p class="nextprev-link-text" v-text="prev.slug"></p>
		</nuxt-link>
		<div id="spacer" v-if="!prev || !next"></div>
    <nuxt-link class="nextprev-link next" v-if="next" :to="`/${next.pre}/${next.slug}`">
			<p class="nextprev-link-text" v-text="next.slug"></p>
			<img class="nextprev-link-icon" src="/assets/icons/arrow.svg" alt="next page">
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: {
		next: {},
		prev: {}
	}
}
</script>

<style lang="sass">
#nextprev
	margin: 1rem auto
	width: 100%
	@include flexCenter
	justify-content: space-between
	#spacer
		flex: 1
	.nextprev-link
		@include flexCenter
		padding: 1rem
		margin: 0 1rem
		text-decoration: none
		border-radius: 0.25rem
		box-shadow: var(--theme-boxShadow)
		background: var(--theme-color3)
		transition: box-shadow 0.1s ease-in-out
		&:hover
			box-shadow: var(--theme-boxShadowHover)
			.nextprev-link-icon
				transform: scale(1.25)
		&:nth-child(2)
			.nextprev-link-icon
				transform: scaleX(-1)
			&:hover
				.nextprev-link-icon
					transform: scaleX(-1) scale(1.25)
		.nextprev-link-text
			margin: 0 0.5rem
		.nextprev-link-icon
			width: 1rem
			height: 1rem
			transition: transform 0.1s ease-in-out
			filter: var(--theme-icon)
</style>
