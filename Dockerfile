# Base image
FROM node:18-alpine AS base

# Dependencies layer
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

# Install serve globally for production static file serving
RUN npm install --global serve

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
RUN npm run build

# Production runner
FROM base AS runner
WORKDIR /app

# Install the 'serve' package globally
RUN npm install -g serve

# Copy only what's needed for production
COPY --from=builder /app/dist ./dist

# Use a non-root user
RUN addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 appuser
USER appuser

# Cloud Run expects your app to listen on $PORT
ENV PORT=8080
EXPOSE 8080
# Start the app
CMD ["serve", "-s", "dist", "-l", "3000"]

