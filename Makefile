install:
	npm install
start:
	npx babel-node -- 'dist/bin/brain-games.js'
build:
	npm run build
publish:
	npm publish
lint:
	npx eslint .