# Use official Node.js 20 image as base
FROM node:20-slim AS base

# Set working directory
WORKDIR /app

# Install dependencies only when needed
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild source code only when needed
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy necessary files
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy built assets and node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Next.js requires a non-root user for security
RUN addgroup --system --gid 1001 nextjs \
&& adduser --system --uid 1001 nextjs
RUN mkdir -p /app/.next/cache/images && chown -R nextjs:nextjs /app/.next  
USER nextjs

EXPOSE 3000

# Start Next.js
CMD ["npm", "start"]
