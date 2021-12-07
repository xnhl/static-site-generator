<template>
	<div id="navigation">
		<nuxt-link id="navigation-title" to="/" v-text="title"></nuxt-link>
		<div id="navigation-icons">
			<img class="navigation-icon" @click="changeTheme" src="/assets/icons/sun.svg" alt="change theme">
			<img class="navigation-icon" @click="toggleMenu" src="/assets/icons/menu.svg" alt="menu">
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			scroll_old: 0,
			scroll_new: 0
		}
	},
	methods: {
		changeTheme: function() { $nuxt.$colorMode.preference = $nuxt.$colorMode.preference == "light" ? "dark" : "light" },
		toggleMenu: function() {
			let menu = document.getElementById("menu-wrapper")
			menu.classList.toggle("hidden")
		},
		handleScroll: function() {
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
	computed: {
		title: function() { return process.env.title }
	},
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
