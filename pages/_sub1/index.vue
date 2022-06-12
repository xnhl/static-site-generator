<template>
	<div id="page">
		<Menu :files="files" />
		<div id="content">
			<nuxt-content id="content-nuxt" :document="info"></nuxt-content>
			<NextPrev :prev="prev" :next="next" />
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ params, redirect, $content }) {
		try {
			const info = await $content(params.sub1).fetch()
			const files = await $content({ deep: true }).only(['path']).fetch()
			const [prev, next] = await $content(params.sub1).only(['title', 'slug']).sortBy('createdAt', 'asc').surround(params.sub1).fetch()
			if (prev !== null) { prev.pre = "" }
			if (next !== null) { next.pre = "" }
			return {
				info,
				files,
				prev,
				next
			}
		} catch (e) { redirect('/') }
	}
}
</script>

<style></style>
