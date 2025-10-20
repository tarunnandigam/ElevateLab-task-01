# Node.js CI/CD Pipeline Demo

A Node.js web application with automated CI/CD deployment using Docker and GitHub Actions.

##  Technologies Used

- **Node.js** - Runtime environment (server)
- **Express.js** - Web framework
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline
- **HTML/CSS** - Beautiful responsive UI

##  Quick Start

```bash
# Clone the repository
git clone https://github.com/tarunnandigam/ElevateLab-task-01.git
cd ElevateLab-task-01

# Install dependencies
npm install

# Start the application
npm start
```

Visit `http://localhost:3000` to see the beautiful interface.

##  Docker Usage

```bash
# Build Docker image
docker build -t nodejs-demo .

# Run container
docker run -p 3000:3000 nodejs-demo
```

##  CI/CD Pipeline

The GitHub Actions workflow automatically:
1. Triggers on push to `main` branch
2. Builds the Docker image
3. Pushes to DockerHub
4. Deploys the application
