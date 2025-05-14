# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json* ./
RUN npm ci

# Copy rest of the application
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

# Set to production environment
ENV NODE_ENV production

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from build stage
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set proper ownership
RUN chown -R nextjs:nodejs /app

# Use non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set environment variable
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start the application
CMD ["node", "server.js"]