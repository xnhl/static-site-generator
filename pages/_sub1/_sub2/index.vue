<template>
	<div id="page">
		<Menu :files="files" />
		<div id="content">
			<Heading :title="`${this.$route.params.sub1} / ${this.$route.params.sub2}`" />
			<nuxt-content id="content-nuxt" :document="info"></nuxt-content>
			<Dates :info="info" />
			<NextPrev :prev="prev" :next="next" />
		</div>
		<TableOfContents :contents="info.toc" />
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: `${process.env.title} - ${this.$route.params.sub1} - ${this.$route.params.sub2}`
		}
	},
	async asyncData({ route, params, redirect, $content }) {
		try {
			const info = await $content(params.sub1, params.sub2).fetch()
			const files = await $content({ deep: true }).only(['path']).fetch()
			const [prev, next] = await $content(params.sub1).only(['title', 'slug']).sortBy('createdAt', 'asc').surround(params.sub2).fetch()
			if (prev !== null) { prev.pre = `${params.sub1}` }
			if (next !== null) { next.pre = `${params.sub1}` }
			return {
				info,
				files,
				prev,
				next,
				route: route.fullPath
			}
		} catch (e) { redirect('/') }
	},
	mounted() {
		let r = this.route
		let menu_links = [...document.getElementsByClassName("menu-link")]
		let len = menu_links.length
		for (let i = 0; i < len; i++) {
			let text = menu_links[i].textContent
			if (text == r) {
				menu_links[i].classList.add("current")
			} else menu_links[i].classList.remove("current")
		}
	}
}
</script>

<style></style>
