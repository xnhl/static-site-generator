<template>
	<div>
		<Navigation />
		<nuxt />
		<Foot />
	</div>
</template>

<script>
import Foot from '@/components/Foot'
import Navigation from '@/components/Navigation'
export default {
	components: { Navigation, Foot },
	transition: {
		name: 'fade',
		duration: 200
	},
	head() {
		return {
			title: process.env.title,
			meta: [
				{
					charset: 'utf-8'
				},
				{
					name: 'viewport', 
					content: 'width=device-width, initial-scale=1'
				},
				{
					hid: 'description',
					name: 'description',
					content: process.env.description
				},
				{
					property: 'og:description', 
					content: process.env.description
				},
				{
					name: 'keywords', 
					content: process.env.keywords
				},
				{
					name: 'author', 
					content: process.env.author
				},
				{
					name: 'robots', 
					content: 'index, follow'
				},
				{
					property: 'og:title', 
					content: process.env.title
				},
				{
					property: 'og:type', 
					content: 'website'
				},
				// {
				// 	property: 'og:image', 
				// 	content: ''
				// },
				// {
				// 	property: 'og:url', 
				// 	content: ''
				// },
				// {
				// 	property: 'og:site_name', 
				// 	content: ''
				// },
				// {
				// 	name: 'twitter:image', 
				// 	content: ''
				// },
				// {
				// 	name: 'twitter:card', 
				// 	content: 'summary_large_image'
				// },
				// {
				// 	name: 'twitter:image:alt', 
				// 	content: ''
				// }
			]
		}
	}
}
</script>

<style lang="sass">
@keyframes fadeIn
	0%
		opacity: 0
	100%
		opacity: 1
.hide
	display: none !important
@font-face
	font-family: 'Open Sans'
	src: url('../static/assets/fonts/OpenSans-Regular.ttf') format('truetype')
	font-weight: normal
	font-style: normal
html
	font-family: 'Open Sans', sans-serif
	font-size: 14px
	-ms-text-size-adjust: 100%
	-webkit-text-size-adjust: 100%
	-moz-osx-font-smoothing: grayscale
	-webkit-font-smoothing: antialiased
	box-sizing: border-box
*,
*:before,
*:after
	box-sizing: border-box
	font-size: 14px
	line-height: 1.25rem
	padding: 0
	margin: 0
	color: var(--theme-black)
.page-enter-active, .page-leave-active
  transition: opacity 0.2s
.page-enter, .page-leave-to
  transition: opacity 0.2s
  opacity: 0
.fade-in
	animation: fadeIn 0.2s ease-in-out
body
	background: rgba(205, 205, 205, 1)
  color: rgba(0,0,0,0.8)
	--color: rgba(0,0,0,0.8)
.light-mode body
	background: rgba(215, 215, 215, 1)
	--color: rgba(0,0,0,0.8)
	--theme-icon: invert(0)
	--theme-link: rgba(50, 50, 255, 0.8)
	--theme-black: rgba(0, 0, 0, 0.8)
	--theme-black-transparent: rgba(0, 0, 0, 0.033)
	--theme-divider: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))
	--theme-boxShadow: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.05), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.1) inset
	--theme-boxShadowHover: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.15), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.25) inset
	--theme-boxShadowLight: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.025), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.1) inset
	--color1: #e6e6e6
	--color2: #efefef
	--color3: #f5f5f5
.dark-mode body
	background: rgba(40, 40, 40, 1)
	--color: rgba(255, 255, 255, 0.8)
	--theme-icon: invert(1)
	--theme-link: rgba(150, 150, 255, 0.8)
	--theme-black: rgba(255, 255, 255, 0.8)
	--theme-black-transparent: rgba(255, 255, 255, 0.033)
	--theme-divider: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0))
	--theme-boxShadow: 0 0 0.5rem 0.125rem rgba(255, 255, 255, 0.05), 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1) inset
	--theme-boxShadowHover: 0 0 0.5rem 0.125rem rgba(255, 255, 255, 0.15), 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.25) inset
	--theme-boxShadowLight: 0 0 0.5rem 0.125rem rgba(255, 255, 255, 0.025), 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1) inset
	--color1: #191919
	--color2: #101010
	--color3: #0a0a0a
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
				top: 1.7rem
				padding: 0.25rem
				font-size: 1.5rem
				line-height: 1.5rem
				font-weight: normal
				font-style: normal
				margin: 1rem auto 1.5rem auto
				background: var(--color2)
				&.offset
					top: 3.5rem
			h2
				font-size: 1.25rem
				line-height: 1.25rem
				margin: 2rem auto 1rem auto
				position: sticky
				top: 3.5rem
				padding: 0.25rem
				font-weight: normal
				font-style: normal
				background: var(--color2)
				&.offset
					top: 5.5rem
			h3
				font-size: 1.1rem
				line-height: 1.1rem
				padding: 0.25rem
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
