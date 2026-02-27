# Stage 1: Build Angular app (Node 8 para Angular CLI 1.x)
FROM node:8-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --ignore-scripts

COPY . .

RUN ./node_modules/.bin/ng build --prod 2>/dev/null || ./node_modules/.bin/ng build

# Stage 2: Serve with express
FROM node:14-alpine

WORKDIR /app

COPY server.js package.json ./
RUN npm install --only=prod --ignore-scripts

COPY --from=builder /app/dist ./dist

EXPOSE 4200
ENV PORT=4200

CMD ["node", "server.js"]
