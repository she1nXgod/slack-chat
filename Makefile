install:
	npm ci

start:
	npx start-server -s ./frontend/dist

build:
	npm run build --prefix frontend

dev:
	npm run dev --prefix frontend

preview:
	npm run preview --prefix frontend

lint:
	cd frontend && npm run lint

lint-fix:
	cd frontend && eslint . --fix