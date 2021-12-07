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
import Menu from '@/components/Menu'
import NextPrev from '@/components/NextPrev'
export default {
	components: { NextPrev, Menu },
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

<style lang="sass">
#page
	@include pageWrapper
	display: flex
	padding: 0.5rem
	border-radius: 0.25rem
	background: var(--color1)
	#content
		width: 100%
		display: flex
		flex-direction: column
		justify-content: space-between
		border-radius: 0.25rem
		#content-nuxt
			padding: 0.5rem
			min-height: 70vh
			position: relative
			border-radius: 0.25rem
			background: var(--color2)
			@media (min-width: 40rem)
				padding: 1rem
			*,
			*:before,
			*:after
				box-sizing: border-box
				font-size: 14px
				line-height: 1.25rem
				padding: 0
				margin: 0
				color: var(--theme-black)
			// article, aside, footer, header, p, h1, h2, h3 h4, h5, h6, main, nav, section, blockquote, hr, ul, ol, img
			h1
				position: sticky
				top: 0
				padding: 0.33rem
				font-size: 1.75rem
				line-height: 1.75rem
				transition: top 0.1s ease-in-out
				margin: 1rem auto 1.5rem auto
				background: var(--color2)
				&.offset
					top: 1.8rem
			h2
				font-size: 1.25rem
				line-height: 1.25rem
				margin: 2rem auto 1rem auto
				position: sticky
				top: 2.25rem
				padding: 0.33rem
				transition: top 0.1s ease-in-out
				background: var(--color2)
				&.offset
					top: 4.05rem
			h3
				font-size: 1.1rem
				line-height: 1.1rem
				padding: 0.5rem
				margin: 2rem auto 1rem auto
			p
				text-indent: 0.5rem
				margin: 1rem auto
				padding: 0.5rem
			a
				color: var(--theme-link)
			ul
				padding: 0.5rem
				margin: 1rem
				li
					padding: 0.25rem
			.rule
				width: 50%
				border: 0
				height: 1px
				margin: 3rem auto
				background-image: var(--theme-divider)
			.list
				margin: 2rem auto
				@include flexCenter
				align-items: stretch
				.article
					@include flexCenter
					flex: 1
					margin: 0.5rem
					flex-basis: 30rem
					text-decoration: none
					border-radius: 0.25rem
					background: var(--color3)
					transition: box-shadow 0.2s ease-in-out
					box-shadow: var(--theme-boxShadow)
					&.full
						flex-basis: 100%
					&:hover
						box-shadow: var(--theme-boxShadowHover)
					.article-title
						margin: 0
						width: 100%
						padding: 0.5rem
						font-size: 1.25rem
						text-align: center
						line-height: 1.25rem
						@include flexCenter
					.article-description
						margin: 0
						flex: 1
						width: 100%
						padding: 1rem
						border-top: 0.1rem solid var(--theme-black-transparent)
						border-bottom: 0.1rem solid var(--theme-black-transparent)
						@include flexCenter
					.article-details
						width: 100%
						margin: 0
						@include flexCenter
						.article-detail
							margin: 0 0.5rem
							font-size: 0.8rem
							line-height: 0.8rem
							width: auto
							padding: 0.25rem
							white-space: nowrap
				.quote
					flex: 1
					margin: 0.5rem
					flex-basis: 30rem
					@include flexCenter
					flex-direction: column
					border-radius: 0.25rem
					background: var(--color3)
					box-shadow: var(--theme-boxShadow)
					transition: box-shadow 0.2s ease-in-out
					&:hover
						box-shadow: var(--theme-boxShadowHover)
					&.full
						flex-basis: 100%
					.quote-text
						@include flexCenter
						padding: 1rem
						margin: 0
					.quote-author
						width: 100%
						margin: 0
						text-align: right
						padding: 0.5rem
						font-size: 0.9rem
						line-height: 0.9rem
						color: var(--theme-link)
						border-top: 0.1rem solid var(--theme-black-transparent)
				.tool
					flex: 1
					margin: 0.5rem
					flex-basis: 30rem
					@include flexCenter
					text-decoration: none
					flex-direction: column
					border-radius: 0.25rem
					background: var(--color3)
					box-shadow: var(--theme-boxShadow)
					transition: box-shadow 0.2s ease-in-out
					&:hover
						box-shadow: var(--theme-boxShadowHover)
					&.full
						flex-basis: 100%
					.tool-image
						margin: 1rem auto
						border-radius: 0.25rem
						border: 0.5rem solid rgba(white, 1)
					.tool-title
						padding: 0.5rem
						margin: 0
						font-size: 1.25rem
						line-height: 1.25rem
						width: 100%
						text-align: center
						@include flexCenter
					.tool-description
						margin: 0
						padding: 1rem
						@include flexCenter
				.media
					flex: 1
					margin: 0.5rem
					flex-basis: 30rem
					@include flexCenter
					text-decoration: none
					flex-direction: column
					border-radius: 0.25rem
					background: var(--color3)
					box-shadow: var(--theme-boxShadow)
					transition: box-shadow 0.2s ease-in-out
					&:hover
						box-shadow: var(--theme-boxShadowHover)
					&.full
						flex-basis: 100%
					.media-image
						margin: 1rem auto
						border-radius: 0.25rem
						border: 0.5rem solid rgba(white, 1)
					.media-title
						padding: 0.5rem
						margin: 0
						font-size: 1.25rem
						line-height: 1.25rem
						width: 100%
						text-align: center
						@include flexCenter
					.media-description
						margin: 0
						padding: 1rem
						@include flexCenter
					.media-details
						@include flexCenter
						.media-detail
							margin: 0.25rem
					.media-links
						width: 100%
						@include flexCenter
						justify-content: space-between
						.media-link
							flex: 1
							margin: 0.25rem
							padding: 0.25rem
							@include flexCenter
							text-align: center
							color: var(--theme-link)
				.youtube
					flex: 1
					margin: 0.5rem
					flex-basis: 20rem
					@include flexCenter
					text-decoration: none
					flex-direction: column
					border-radius: 0.25rem
					background: var(--color3)
					box-shadow: var(--theme-boxShadow)
					transition: box-shadow 0.2s ease-in-out
					&:hover
						box-shadow: var(--theme-boxShadowHover)
					&.full
						flex-basis: 100%
					.youtube-image
						margin: 1rem auto
						border-radius: 0.25rem
						border: 0.5rem solid rgba(white, 1)
					.youtube-title
						padding: 0.5rem
						margin: 0
						font-size: 1.25rem
						line-height: 1.25rem
						width: 100%
						text-align: center
						@include flexCenter
					.youtube-channel
						margin: 0
						width: 100%
						padding: 0.5rem
						text-align: center
						@include flexCenter
					.youtube-details
						@include flexCenter
						width: 100%
						justify-content: space-between
						border-top: 0.1rem solid var(--theme-black-transparent)
						.youtube-detail
							margin: 0
							padding: 0.33rem
							font-size: 0.9rem
							line-height: 0.9rem
</style>
