<template>
	<div id="nextprev">
		<nuxt-link class="nextprev-link prev" v-if="prev" :to="`/${prev.pre}/${prev.slug}`">
			<img class="nextprev-link-icon" :src="arrowPlaceholder" alt="previous page">
			<p class="nextprev-link-text" v-text="prev.slug"></p>
		</nuxt-link>
		<div id="spacer" v-if="!prev || !next"></div>
    <nuxt-link class="nextprev-link next" v-if="next" :to="`/${next.pre}/${next.slug}`">
			<p class="nextprev-link-text" v-text="next.slug"></p>
			<img class="nextprev-link-icon" :src="arrowPlaceholder" alt="next page">
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: {
		next: {},
		prev: {}
	},
	data: () => ({
		arrowPlaceholder: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI0OTMuNTc4cHgiIGhlaWdodD0iNDkzLjU3OHB4IiB2aWV3Qm94PSIwIDAgNDkzLjU3OCA0OTMuNTc4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0OTMuNTc4IDQ5My41NzgiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTQ4Ny4yNjcsMjI1Ljk4MWMwLTE3LjM2NS0xMy45OTktMzEuNTE4LTMxLjUxOC0zMS41MThIMTk0LjUwMUwzMDUuMzUsODMuNjE1YzEyLjI0LTEyLjI0LDEyLjI0LTMyLjIwNywwLTQ0LjY3Ng0KCQlMMjc1LjU5Miw5LjE4Yy0xMi4yNC0xMi4yNC0zMi4yMDctMTIuMjQtNDQuNjc2LDBMMTUuNTY4LDIyNC41MjdjLTYuMTIsNi4xMi05LjI1NiwxNC4xNTMtOS4yNTYsMjIuMjYyDQoJCWMwLDguMDMxLDMuMTM2LDE2LjE0Myw5LjI1NiwyMi4yNjJMMjMwLjkxNiw0ODQuNGMxMi4yNCwxMi4yMzcsMzIuMjA3LDEyLjIzNyw0NC42NzYsMGwyOS43NTgtMjkuNzYxDQoJCWMxMi4yNC0xMi4yMzgsMTIuMjQtMzIuMjA3LDAtNDQuNjc2TDE5NC41MDEsMjk5LjQ5OGgyNjEuMDk0YzE3LjM2NiwwLDMxLjUyMS0xNC4xNTMsMzEuNTIxLTMxLjUyTDQ4Ny4yNjcsMjI1Ljk4MXoiLz4NCjwvZz4NCjwvc3ZnPg0K"
	})
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
