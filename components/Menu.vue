<template>
	<div id="menu-wrapper" class="hidden">
		<p id="hide-menu" @click="hideMenu">X</p>
		<div id="menu">
			<nuxt-link class="menu-link" v-for="(file, index) in filesSorted" :key="`file-${index}`" :to="file.path" v-text="file.path"></nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		files: []
	},
	methods: {
		hideMenu: function() {
			let menu = document.getElementById("menu-wrapper")
			menu.classList.add("hidden")
		}
	},
	computed: {
		filesSorted: function() {
			return this.files.filter(each => each.path !== "/index").sort((a, b) => {
				let aa = a.path.replace("/", "")
				let bb = b.path.replace("/", "")
				return aa < bb ? -1 : aa > bb ? 1 : 0
			})
		}
	},
	mounted() {
		let w = window.innerWidth
		let menu = document.getElementById("menu-wrapper")
		if (w <= 800) { menu.classList.add("hidden") } else { menu.classList.remove("hidden") }
	}
}
</script>

<style lang="sass">
#menu-wrapper
	height: 95vh
	z-index: 5
	margin-right: 1rem
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
			border: 0.125rem solid rgba(white, 0.25)
			padding: 0.33rem 0.5rem
			text-decoration: none
			color: var(--color)
			transition: all 0.1s ease-in-out
			background: var(--color3)
			&.current
				background: var(--color1)
			&:hover
				background: var(--color1)
</style>
