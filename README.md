# Vue/Nuxt Static Site Generator
Generate a static website from Markdown files.

## Features
- Light / Dark mode
- Nested routes (up to 4 levels deep)
- While developing (`npm run dev`) you can live-edit content files by double-clicking page content
- 5 minimal components for displaying content (Articles, Quotes, Tools, Media, YouTube)
	- Copy structure from existing sample Markdown files

## Instructions
- Install dependencies
- Fill in fields in options.json with your information
- Create Markdown files/folders which represent pages
	- Delete existing sample files first
	- Home page uses info from /content/index.md
- Run `npm run generate`
- Output will be in /dist
