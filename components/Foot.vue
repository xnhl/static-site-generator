<template>
	<div id="foot" v-html="copyright"></div>
</template>

<script>
export default {
	computed: {
		copyright: function() { return `&copy; ${process.env.author}` }
	}
}
</script>

<style lang="sass">
#foot
	@include flexCenter
	font-size: 0.9rem
	line-height: 0.9rem
	padding: 1rem
	max-width: 90rem
	text-align: center
	margin: 3rem auto 0 auto
	background: var(--color2)
	border-radius: 0.25rem 0.25rem 0 0
</style>
