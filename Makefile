SHELL := /bin/bash

.PHONY: help build up down logs restart seed

# ──────────────────────────────────────────────
help:
	@echo ""
	@echo "  Meat App"
	@echo "  ─────────────────────────────────────────"
	@echo "  make up       → Build e sobe tudo"
	@echo "  make down     → Para e remove containers"
	@echo "  make build    → Só rebuilda as imagens"
	@echo "  make logs     → Mostra logs de todos"
	@echo "  make seed     → Re-insere seed data no MongoDB"
	@echo "  make restart  → Restart de todos os serviços"
	@echo "  ─────────────────────────────────────────"
	@echo "  URLs:"
	@echo "    Frontend  → http://localhost:4200"
	@echo "    Backend   → http://localhost:3000"
	@echo "    MongoDB   → localhost:27017"
	@echo "  ─────────────────────────────────────────"
	@echo ""

# ──────────────────────────────────────────────
up:
	docker compose up --build -d
	@echo ""
	@echo "✅ Serviços subindo..."
	@echo "   Frontend  → http://localhost:4200"
	@echo "   Backend   → http://localhost:3000"
	@echo ""
	@echo "   Aguarde o build do frontend (~2 min na primeira vez)"
	@echo "   Use 'make logs' para acompanhar"

down:
	docker compose down

build:
	docker compose build

logs:
	docker compose logs -f

logs-backend:
	docker compose logs -f backend

logs-frontend:
	docker compose logs -f frontend

restart:
	docker compose restart

seed:
	docker exec meat-mongodb mongosh meatdb --file /docker-entrypoint-initdb.d/mongo-init.js
