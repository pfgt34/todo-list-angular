# ─── Stage 1 : Build ────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances en premier (optimise le cache Docker)
COPY package*.json ./
RUN npm ci --omit=dev=false

# Copier le reste du code et builder l'application Angular
COPY . .
RUN npm run build

# ─── Stage 2 : Serve ────────────────────────────────────────────────────────
FROM nginx:alpine AS runner

# Supprimer la page par défaut de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copier le build Angular depuis le stage précédent (projet = task-manager)
COPY --from=builder /app/dist/task-manager/browser /usr/share/nginx/html

# Configuration nginx pour le routing Angular (SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
