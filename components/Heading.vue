<template>
	<div id="heading" v-text="titleCapitalized"></div>
</template>

<script>
export default {
	props: { title: "" },
	methods: {
		titleCase(string) { return `${string.substring(0, 1).toUpperCase()}${string.substring(1)}` }
	},
	computed: {
		titleCapitalized() {
			let splitt = this.title.split(" / ")
			let asTitles = splitt.map(each => this.titleCase(each))
			return asTitles.join(" / ")
		}
	}
}
</script>

<style lang="sass">
#heading
	position: sticky
	font-size: 0.75rem
	line-height: 0.75rem
	padding: 0.5rem 0.8rem
	background: var(--color2)
	top: -1px
	z-index: 5
	@media (min-width: 40rem)
		padding: 0.5rem 1.25rem
	&.offset
		top: 1.8rem
</style>
