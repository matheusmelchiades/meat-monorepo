# Meat 🍔

App de delivery de comida — monorepo com frontend Angular e backend Hapi.js.

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Frontend | Angular 4 + AdminLTE |
| Backend | Hapi.js 17 + Node 12 |
| Banco | MongoDB 6 |
| Infra | Docker + Docker Compose |

## Estrutura

```
meat-monorepo/
├── meat-app/        # Frontend Angular (porta 4200)
├── meat-server/     # Backend API REST (porta 3000)
├── docker/
│   └── mongo-init.js   # Seed data
├── docker-compose.yml
└── Makefile
```

## Rodando

**Requisito:** Docker e Docker Compose instalados.

```bash
# Sobe tudo (MongoDB + backend + frontend)
make up

# Para tudo
make down

# Ver logs
make logs
```

Na **primeira execução** o build do frontend leva ~2-3 min.

| Serviço  | URL |
|----------|-----|
| Frontend | http://localhost:4200 |
| Backend  | http://localhost:3000 |
| MongoDB  | localhost:27017 |

## Credenciais de teste

| Campo | Valor |
|-------|-------|
| Email | `admin@meat.com` |
| Senha | `123456` |

## API

```
GET  /restaurants           → lista restaurantes
GET  /restaurants/:id       → detalhe do restaurante
GET  /restaurants/:id/menu  → cardápio
GET  /restaurants/:id/reviews → avaliações
POST /login                 → autenticação
POST /orders                → criar pedido
```

## Comandos disponíveis

```bash
make up           # build + sobe todos os serviços
make down         # para e remove os containers
make build        # rebuilda as imagens
make logs         # logs de todos os serviços
make logs-backend # logs só do backend
make restart      # restart dos serviços
```
