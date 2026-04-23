# 🌤️ Weatheria - Weather Dashboard

A beautiful, modern weather dashboard built with React, designed for testing CI/CD pipelines. Features a stunning glassmorphism UI, responsive design, and comprehensive Docker support.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react)
![Node](https://img.shields.io/badge/Node-18-339933?style=flat&logo=node.js)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat&logo=docker)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

## ✨ Features

- 🎨 **Beautiful UI** - Glassmorphism design with smooth animations
- 📱 **Responsive Design** - Fully responsive on desktop, tablet, and mobile
- 🔍 **City Search** - Search weather for different cities
- 🌦️ **5-Day Forecast** - Beautiful forecast cards with weather icons
- 🐳 **Docker Ready** - Complete Docker & Docker Compose setup
- 🚀 **CI/CD Pipeline** - GitHub Actions workflows for build, test, and deploy
- ⚡ **Fast Performance** - Optimized React build with production-ready setup
- 🧪 **Test Ready** - Easy to extend with testing frameworks

## 📋 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weatheria.git
   cd weatheria
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4. **Build for production**
   ```bash
   npm run build
   ```

### Docker Setup

#### Using Docker

1. **Build the image**
   ```bash
   docker build -t weatheria:latest .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 weatheria:latest
   ```

#### Using Docker Compose

1. **Start the application**
   ```bash
   docker-compose up
   ```

2. **View the application**
   Open [http://localhost:3000](http://localhost:3000)

3. **Stop the application**
   ```bash
   docker-compose down
   ```

## 🏗️ Project Structure

```
weatheria/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── SearchBar.css
│   │   ├── WeatherCard.js
│   │   └── WeatherCard.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .github/
│   └── workflows/
│       ├── build.yml
│       ├── quality.yml
│       └── deploy.yml
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
├── package.json
└── README.md
```

## 🔄 CI/CD Workflows

### Build & Test Workflow
- Runs on push to `main` and `develop` branches
- Installs dependencies
- Runs tests and generates coverage reports
- Builds the application
- Builds and tests Docker image

**Trigger:** `push` and `pull_request`

### Code Quality Workflow
- Checks for security vulnerabilities
- Generates code quality metrics
- Validates dependencies

**Trigger:** `push` and `pull_request`

### Deploy Workflow
- Builds production Docker image
- Tags the image with commit SHA and latest
- Verifies Docker image
- Prepares for deployment

**Trigger:** `push` to `main` branch and tags

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from Create React App (not recommended)

## 🐳 Docker Commands

### Building

```bash
# Build image
docker build -t weatheria:latest .

# Build with specific tag
docker build -t weatheria:1.0.0 .
```

### Running

```bash
# Run in foreground
docker run -p 3000:3000 weatheria:latest

# Run in background
docker run -d -p 3000:3000 weatheria:latest

# Run with environment variables
docker run -e NODE_ENV=production -p 3000:3000 weatheria:latest
```

### Docker Compose

```bash
# Start services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild images
docker-compose up --build
```

## 🧪 Testing the CI/CD Pipeline

Perfect for testing your CI/CD setup! Here are some scenarios:

1. **Push to main branch** - Triggers build, test, and deploy workflows
2. **Create a pull request** - Triggers build and quality check workflows
3. **Add a tag** - Triggers deploy workflow with version tagging
4. **Monitor GitHub Actions** - View workflow logs and artifacts

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Styling:** CSS3 with Glassmorphism
- **Icons:** React Icons
- **Containerization:** Docker
- **Orchestration:** Docker Compose
- **CI/CD:** GitHub Actions
- **Build Tool:** Create React App

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Design Features

- **Glassmorphism UI** - Modern frosted glass effect
- **Gradient Backgrounds** - Smooth color transitions
- **Smooth Animations** - Fade-in, slide, and floating effects
- **Responsive Grid** - Auto-adjusting layouts
- **Hover Effects** - Interactive card animations
- **Mobile Optimized** - Touch-friendly interface

## 🔒 Security

- Regular dependency audits via GitHub Actions
- Container security scanning
- No sensitive data in images
- Health checks configured

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🚀 Deployment

### Local Testing
```bash
npm run build
docker build -t weatheria:latest .
docker run -p 3000:3000 weatheria:latest
```

### Production
1. Push to main branch
2. GitHub Actions automatically builds and tests
3. Deploy the Docker image to your platform (AWS, Azure, Kubernetes, etc.)

## 💡 Tips for CI/CD Testing

- **Modify code** and push to trigger workflows
- **Check GitHub Actions tab** to see workflow progress
- **View artifact uploads** in workflow details
- **Test docker pull/push** by pushing to Docker registry
- **Monitor logs** for build and test results
- **Track deploy status** with the deploy workflow

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📞 Support

For questions or issues, please create a GitHub issue.

---

Made with ❤️ for testing CI/CD pipelines
