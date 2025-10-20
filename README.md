# Node.js CI/CD Pipeline with GitHub Actions

This project demonstrates a complete CI/CD workflow for a Node.js application using GitHub Actions and Docker. 
The workflow automatically builds, tests, and deploys the app to Docker Hub whenever code is pushed to the `main` branch.

## What I Learned

During this project, I learned how to:

- **Use GitHub Actions** to create a CI/CD pipeline for automating the build, test, and deployment process of a Node.js application.
- **Integrate Node.js applications with Docker**, including building Docker images and pushing them to Docker Hub.
- **Securely use GitHub Secrets** to store sensitive credentials such as DockerHub username and access token.
- **Follow official documentation and tutorials** to understand CI/CD concepts:
  - GitHub Actions official documentation
  - Docker documentation for building and pushing images
  - YouTube tutorials and Google resources to understand workflow setup
- **Troubleshoot common CI/CD issues**, like YAML syntax errors, secret misconfigurations, and login errors with DockerHub.

## Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/tarunnandigam/ElevateLab-task-01.git
cd ElevateLab-task-01
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the app locally**
```bash
npm start
```
Visit http://localhost:3000 to see the running server.

## Docker

**Build Docker image locally:**
```bash
docker build -t nodejs-demo .
```

**Run Docker container locally:**
```bash
docker run -p 3000:3000 nodejs-demo
```

## CI/CD Workflow Details

**Workflow:** `.github/workflows/main.yml`

**Trigger:** On push to `main` branch

**Steps:**
1. Checkout code
2. Set up Node.js environment
3. Install dependencies
4. Run tests (npm test)
5. Build Docker image
6. Log in to Docker Hub using secrets
7. Tag and push Docker image to Docker Hub

**Secrets Required:**
- `DOCKER_USERNAME` → Docker Hub username
- `DOCKER_PASSWORD` → Docker Hub access token (not password)

**Docker Image:** Automatically pushed to Docker Hub under `DOCKER_USERNAME/nodejs-demo:latest`
