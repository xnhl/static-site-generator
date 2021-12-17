<template>
	<div id="toc-wrapper">
		<div id="contents">
			<NuxtLink v-for="link in contents" :key="link.id" class="contents-item" :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }" :to="`#${link.id}`" v-text="link.text"></NuxtLink>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		contents: []
	}
}
</script>

<style lang="sass">
#toc-wrapper
	position: relative
	margin: 0.25rem
	#contents
		position: sticky
		top: 0
		padding: 0.25rem
		min-width: 10rem
		max-width: 20rem
		border-radius: 0.25rem
		background: var(--color2)
		box-shadow: var(--theme-boxShadow)
		@media (max-width: 60rem)
			display: none
		.contents-item
			display: block
			padding: 0.5rem
			cursor: pointer
			font-size: 0.9rem
			line-height: 0.9rem
			text-decoration: none
			color: var(--color)
			background: var(--color2)
			transition: all 0.1s ease-in-out
			&:hover
				background: var(--color1)
</style>
