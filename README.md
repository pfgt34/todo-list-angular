# TaskManager — Todo List Angular

Application de gestion de tâches développée avec Angular.

---

## 🚀 CI/CD — Docker Build & Push

Ce projet utilise **GitHub Actions** pour automatiser la construction et la publication d'une image Docker à chaque push sur `main`.

### Comment ça fonctionne

Le workflow `.github/workflows/docker-build.yml` se déclenche sur :
- **Push** vers `main` → build **et** push de l'image vers Docker Hub
- **Pull Request** vers `main` → build uniquement (pas de push)

Les étapes du workflow :
1. Checkout du code
2. Configuration de Docker Buildx (builds multi-architectures)
3. Connexion à Docker Hub (sur push uniquement)
4. Extraction des métadonnées (tags `latest`, `sha-<hash>`, nom de branche)
5. Build et push de l'image avec cache GitHub Actions

### Secrets GitHub requis

À configurer dans **Settings → Secrets and variables → Actions** de ton repo :

| Secret | Description |
|---|---|
| `DOCKER_HUB_USERNAME` | Ton nom d'utilisateur Docker Hub |
| `DOCKER_HUB_TOKEN` | Token d'accès Docker Hub (généré dans Docker Hub → Account Settings → Security) |

### Build manuel

```bash
# Builder l'image localement
docker build -t todo-list-angular .

# Lancer l'application (port 8080 → 80 du conteneur)
docker run -p 8080:80 todo-list-angular

# L'app est accessible sur http://localhost:8080
```

### Image Docker Hub

L'image publiée est disponible sur :
```
docker pull <DOCKER_HUB_USERNAME>/todo-list-angular:latest
```

---

## 🛠️ Développement local

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
ng serve

# Builder pour la production
ng build --configuration=production
```
