<template>
	<div id="dates">
		<div class="dates-item">
			<img class="dates-item-icon" :src="clockPlaceholder" alt="created">
			<p class="dates-item-text" v-html="`Created:<br>${dates.createdAt}`"></p>
		</div>
    <div class="dates-item">
			<img class="dates-item-icon" :src="clockPlaceholder" alt="updated">
			<p class="dates-item-text" v-html="`Updated:<br>${dates.updatedAt}`"></p>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		clockPlaceholder: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItY2xvY2siPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPSIxMiA2IDEyIDEyIDE2IDE0Ij48L3BvbHlsaW5lPjwvc3ZnPg=="
	}),
	props: { info: {} },
	computed: {
		dates() {
			let u = this.$moment(new Date(this.info.updatedAt)).format("LLLL")
			let c = this.$moment(new Date(this.info.createdAt)).format("LLLL")
			return {
				updatedAt: u,
				createdAt: c
			}
		}
	}
}
</script>

<style lang="sass">
#dates
	margin: 3rem auto 2rem auto
	width: 100%
	@include flexCenter
	justify-content: space-between
	.dates-item
		@include flexCenter
		width: 100%
		padding: 1rem
		margin: 0.5rem
		text-decoration: none
		border-radius: 0.25rem
		box-shadow: var(--theme-boxShadow)
		background: var(--theme-color3)
		transition: box-shadow 0.1s ease-in-out
		white-space: nowrap
		@media (min-width: 60rem)
			flex: 1
			max-width: 25rem
		.dates-item-text
			margin: 0 1rem
		.dates-item-icon
			width: 1rem
			height: 1rem
			transition: transform 0.1s ease-in-out
			filter: var(--theme-icon)
		&:nth-child(2)
			.dates-item-icon
				transform: scaleX(-1)
</style>
