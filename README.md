# Welcome to MOOX

## Getting Started

### Installation

Install the dependencies:

### Dependency

```bash
docker compose up -d
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
nixpacks build ./ --name my-app

# Run the container
docker run -p 3000:3000 my-app
```
