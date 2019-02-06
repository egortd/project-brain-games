install:
		npm install
start:
		npx babel-node -- 'dist/bin/brain-even.js'
build:
		npm run build
publish:
		npm publish
lint:
		npx eslint .