<template>
	<div id="menu-wrapper" class="hidden" ref="menu">
		<p id="hide-menu" @click="hideMenu">X</p>
		<div id="menu">
			<nuxt-link class="menu-link" v-for="(file, index) in filesSorted" :key="`file-${index}`" :to="file.path" v-text="file.path"></nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	props: { files: [] },
	methods: {
		hideMenu() {
			let menu = document.getElementById("menu-wrapper")
			menu.classList.add("hidden")
		},
		menuResize() {
			let width = window.innerWidth
			let menu = document.getElementById("menu-wrapper")
			if (width > 800) { menu.classList.add("hidden") }
			else { menu.classList.remove("hidden") }
		}
	},
	computed: {
		filesSorted() {
			let filt = this.files.filter(each => each.path !== "/index").sort((a, b) => {
				let aa = a.path.replace("/", "")
				let bb = b.path.replace("/", "")
				return aa < bb ? -1 : aa > bb ? 1 : 0
			})
			return filt
		}
	},
	mounted() {
		window.addEventListener('resize', this.menuResize)
	}
}
</script>

<style lang="sass">
#menu-wrapper
	height: 95vh
	z-index: 5
	margin-right: 1rem
	position: sticky
	top: 2rem
	&.hidden
		display: none
	@media (max-width: 50rem)
		margin: 0
		position: fixed
		top: 0
		left: 0
		right: 0
		z-index: 10
		height: 100vh
		background: rgba(black, 0.8)
	#hide-menu
		top: 0
		right: 0
		color: white
		cursor: pointer
		font-size: 1.5rem
		line-height: 1.5rem
		position: fixed
		padding: 0.25rem 0.5rem
		transform: scaleX(1.25)
		@media (min-width: 50rem)
			display: none
	#menu
		height: 100%
		min-width: 15rem
		overflow-y: scroll
		border-radius: 0.25rem
		background: var(--color3)
		box-shadow: var(--theme-boxShadow)
		@media (max-width: 50rem)
			margin: 2rem
			position: fixed
			top: 0
			left: 0
			right: 0
			height: 95vh
		.menu-link
			display: block
			cursor: pointer
			font-size: 0.9rem
			line-height: 0.9rem
			border: 0.125rem solid rgba(white, 0.25)
			padding: 0.5rem
			text-decoration: none
			color: var(--color)
			transition: all 0.1s ease-in-out
			background: var(--color3)
			&.current
				background: var(--color1)
			&:hover
				background: var(--color1)
</style>
