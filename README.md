# 🚀 DevDeploy Dashboard

A modern dashboard to monitor GitHub Actions workflows and Docker Hub deployments.

## Quick Start (Development)

1. **Setup environment** (edit `frontend/.env`):
   ```
   VITE_REPO_OWNER=your_github_username
   VITE_REPO_NAME=your_repo_name  
   VITE_GITHUB_TOKEN=ghp_... (optional)
   VITE_DOCKER_USERNAME=your_dockerhub_username
   VITE_DOCKER_REPOSITORY=your_image_name
   ```
   Test with: `octocat/Hello-World` & `library/hello-world`

2. **Install & Run**:
   ```
   cd frontend
   npm install
   npm run dev
   ```
   Open http://localhost:5173

3. **Docker**:
   ```
   docker-compose up --build
   ```
   Open http://localhost:8080

## Features
- Live GitHub Actions monitoring
- Docker Hub latest tag tracking
- Responsive design
- Auto-refresh every 10s

## Troubleshooting
- GitHub errors? Check `.env` repo config
- Docker 404? Verify Docker Hub username/repo
- No workflows? Ensure repo has GitHub Actions enabled

