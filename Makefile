install:
	npm ci
	npm ci --prefix frontend

start:
	npx start-server -s ./frontend/dist

build:
	npm run build --prefix frontend

dev:
	npm run dev --prefix frontend

preview:
	npm run preview --prefix frontend

lint:
	npm run lint --prefix frontend

lint-fix:
	npm run lint --prefix frontend -- --fix