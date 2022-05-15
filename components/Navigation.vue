<template>
	<div id="navigation">
		<nuxt-link id="navigation-title" to="/" v-text="title"></nuxt-link>
		<div id="navigation-icons">
			<img class="navigation-icon" @click="changeTheme" :src="sunPlaceholder" alt="change theme">
			<img class="navigation-icon" @click="toggleMenu" :src="menuPlaceholder" alt="menu">
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		scroll_old: 0,
		scroll_new: 0,
		sunPlaceholder: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItc3VuIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI1Ij48L2NpcmNsZT48bGluZSB4MT0iMTIiIHkxPSIxIiB4Mj0iMTIiIHkyPSIzIj48L2xpbmU+PGxpbmUgeDE9IjEyIiB5MT0iMjEiIHgyPSIxMiIgeTI9IjIzIj48L2xpbmU+PGxpbmUgeDE9IjQuMjIiIHkxPSI0LjIyIiB4Mj0iNS42NCIgeTI9IjUuNjQiPjwvbGluZT48bGluZSB4MT0iMTguMzYiIHkxPSIxOC4zNiIgeDI9IjE5Ljc4IiB5Mj0iMTkuNzgiPjwvbGluZT48bGluZSB4MT0iMSIgeTE9IjEyIiB4Mj0iMyIgeTI9IjEyIj48L2xpbmU+PGxpbmUgeDE9IjIxIiB5MT0iMTIiIHgyPSIyMyIgeTI9IjEyIj48L2xpbmU+PGxpbmUgeDE9IjQuMjIiIHkxPSIxOS43OCIgeDI9IjUuNjQiIHkyPSIxOC4zNiI+PC9saW5lPjxsaW5lIHgxPSIxOC4zNiIgeTE9IjUuNjQiIHgyPSIxOS43OCIgeTI9IjQuMjIiPjwvbGluZT48L3N2Zz4=",
		menuPlaceholder: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbWVudSI+PGxpbmUgeDE9IjMiIHkxPSIxMiIgeDI9IjIxIiB5Mj0iMTIiPjwvbGluZT48bGluZSB4MT0iMyIgeTE9IjYiIHgyPSIyMSIgeTI9IjYiPjwvbGluZT48bGluZSB4MT0iMyIgeTE9IjE4IiB4Mj0iMjEiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg=="
	}),
	methods: {
		changeTheme() { $nuxt.$colorMode.preference = $nuxt.$colorMode.preference == "light" ? "dark" : "light" },
		toggleMenu() {
			let menu = document.getElementById("menu-wrapper")
			menu.classList.toggle("hidden")
		},
		handleScroll() {
			let y = window.scrollY
			this.scroll_new = y
			let nav_wrapper = document.getElementById("navigation")
			let heading = document.getElementById("heading")
			let headers1 = [...document.getElementsByTagName("h1")]
			let headers2 = [...document.getElementsByTagName("h2")]
			let headers1_length = headers1.length
			let headers2_length = headers2.length
			if (this.scroll_new > this.scroll_old+50) {
				nav_wrapper.classList.add("hidden")
				this.scroll_old = y
				if (heading !== null) { heading.classList.remove("offset") }
				for (let i = 0; i < headers1_length; i++) {
					headers1[i].classList.remove("offset")
				}
				for (let e = 0; e < headers2_length; e++) {
					headers2[e].classList.remove("offset")
				}
			} else if (this.scroll_new < this.scroll_old) {
				nav_wrapper.classList.remove("hidden")
				this.scroll_old = y
				if (heading !== null) { heading.classList.add("offset") }
				for (let i = 0; i < headers1_length; i++) {
					headers1[i].classList.add("offset")
				}
				for (let e = 0; e < headers2_length; e++) {
					headers2[e].classList.add("offset")
				}
			}
		}
	},
	computed: { title() { return process.env.title } },
	mounted() { window.addEventListener('scroll', this.handleScroll) }
}
</script>

<style lang="sass">
#navigation
	position: fixed
	top: 0
	left: 0
	right: 0
	width: 100%
	z-index: 6
	max-width: 90rem
	margin: 0 auto
	@include flexCenter
	border-radius: 0 0 0.25rem 0.25rem
	transition: all 0.1s ease-in-out
	background: var(--color3)
	box-shadow: var(--theme-boxShadow)
	justify-content: space-between
	&.hidden
		top: -3rem
	#navigation-title
		padding: 0.25rem 0.5rem
		@include flexCenter
		text-decoration: none
	#navigation-icons
		@include flexCenter
		.navigation-icon
			width: 1.25rem
			height: 1.25rem
			cursor: pointer
			margin: 0.33rem 0.5rem
			filter: var(--theme-icon)
</style>
