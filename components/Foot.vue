<template>
	<div id="foot">
		<p id="foot-main" v-html="copyright"></p>
		<div id="foot-thanks">Made with static-site-generator by xnhl (<a href="https://github.com/xnhl/static-site-generator" target="_blank">GitHub</a>)</div>
	</div>
</template>

<script>
export default {
	computed: {
		copyright() { return `&copy; ${process.env.author}` }
	}
}
</script>

<style lang="sass">
#foot
	@include flexCenter
	flex-direction: column
	font-size: 0.9rem
	line-height: 0.9rem
	padding: 1rem
	max-width: 90rem
	text-align: center
	margin: 3rem auto 0 auto
	background: var(--color2)
	border-radius: 0.25rem 0.25rem 0 0
	#foot-main, #foot-thanks
		@include flexCenter
		text-align: center
	#foot-thanks
		margin-top: 1rem
		a
			color: var(--theme-link)
</style>
