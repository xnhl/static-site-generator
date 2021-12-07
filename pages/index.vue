<template>
	<div id="page">
		<Menu :files="files" />
		<div id="content">
			<Heading :title="title" />
			<nuxt-content id="content-nuxt" :document="info"></nuxt-content>
		</div>
	</div>
</template>

<script>
import Menu from '@/components/Menu'
import Heading from '@/components/Heading'
export default {
	components: { Menu, Heading },
	async asyncData({ params, redirect, $content }) {
		try {
			const index = await $content('index').fetch()
			const files = await $content({ deep: true }).only(['path']).fetch()
			return {
				info: index,
				files
			}
		} catch (e) { redirect('/') }
	},
	computed: {
		title: function() { return process.env.title }
	}
}
</script>

<style lang="sass">
</style>
