# Weatheria - GitHub Copilot Instructions

## Project Overview
Weatheria is a beautiful weather dashboard web application built with React for testing CI/CD pipelines. It features a modern glassmorphism UI, responsive design, and comprehensive Docker support.

## Development Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn
- Docker and Docker Compose (for containerization)
- Git

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

### Docker Development

1. **Build Docker image**
   ```bash
   docker build -t weatheria:latest .
   ```

2. **Run with Docker Compose**
   ```bash
   docker-compose up
   ```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── SearchBar.js
│   ├── WeatherCard.js
├── App.js              # Main application component
├── index.js            # React entry point

public/
├── index.html          # HTML template

.github/
└── workflows/          # GitHub Actions CI/CD pipelines
    ├── build.yml       # Build and test workflow
    ├── quality.yml     # Code quality checks
    └── deploy.yml      # Deployment workflow
```

## Key Technologies

- **React 18** - UI framework
- **CSS3** - Styling with glassmorphism design
- **React Icons** - Icon library
- **Docker** - Containerization
- **GitHub Actions** - CI/CD automation

## Common Development Tasks

### Adding a New Component

1. Create component file in `src/components/`
2. Add corresponding CSS file (same name)
3. Import and use in parent component

Example:
```javascript
// src/components/NewComponent.js
import React from 'react';
import './NewComponent.css';

function NewComponent() {
  return <div className="component">...</div>;
}

export default NewComponent;
```

### Updating Styles

- Global styles: `src/index.css`
- App styles: `src/App.css`
- Component styles: `src/components/ComponentName.css`

Use CSS variables for consistent theming.

### Adding Dependencies

```bash
npm install <package-name>
```

Update will be reflected in `package.json`.

### Running Tests

```bash
npm test
```

Tests run in watch mode by default.

## CI/CD Pipeline

### Workflows Available

1. **build.yml** - Runs on push and pull requests
   - Installs dependencies
   - Runs tests
   - Builds application
   - Builds Docker image

2. **quality.yml** - Code quality checks
   - Security audit
   - Code style checks
   - Metrics generation

3. **deploy.yml** - Deployment workflow
   - Builds production image
   - Tags image with version
   - Pushes to registry (if configured)

### Triggering Workflows

- Push to `main` or `develop` - Build & Test + Quality
- Pull request - Build & Test + Quality
- Tag (v*) - Deploy
- Push to `main` - Deploy

## Debugging

### Local Debugging

1. Use React DevTools browser extension
2. Check console for errors
3. Inspect elements using browser dev tools
4. Add console.log() for debugging

### Docker Debugging

```bash
# View logs
docker-compose logs -f

# Access running container
docker exec -it <container-id> /bin/sh

# Check container health
docker ps
```

### Build Issues

If build fails:
1. Clear npm cache: `npm cache clean --force`
2. Delete node_modules: `rm -rf node_modules`
3. Reinstall: `npm install`
4. Try build again: `npm run build`

## Best Practices

### Code Style
- Use functional components with hooks
- Prop destructuring in component parameters
- Consistent naming conventions
- Comments for complex logic

### CSS
- Use CSS variables for colors and sizes
- Mobile-first responsive design
- BEM-style class naming
- Avoid inline styles

### Git
- Create descriptive commit messages
- Reference issues in commits
- Create branches from main
- Keep commits atomic

### Security
- No secrets in code
- No API keys in repository
- Always audit dependencies
- Keep dependencies updated

## Performance Tips

- Use React.memo for expensive components
- Lazy load non-critical components
- Optimize images
- Use CSS transforms for animations
- Monitor bundle size

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm start
```

### Docker Issues
```bash
# Remove all containers
docker-compose down -v

# Rebuild images
docker-compose up --build
```

### Build Errors
- Check Node version: `node --version`
- Clear cache: `npm cache clean --force`
- Reinstall dependencies: `npm ci`

## Resources

- [React Documentation](https://react.dev)
- [Docker Docs](https://docs.docker.com)
- [GitHub Actions](https://docs.github.com/en/actions)
- [CSS Tricks](https://css-tricks.com)

## Contributing Guidelines

When contributing to Weatheria:

1. Create feature branch from main
2. Make changes following code style
3. Test locally before pushing
4. Create descriptive commit messages
5. Push and create pull request
6. Address review feedback

---

For questions or support, check the README.md or create a GitHub issue.
