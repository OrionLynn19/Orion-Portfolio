# Use official Node.js 20 image as base
FROM node:20-slim AS base


WORKDIR /app


FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci


FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build


FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production


COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json


RUN addgroup --system --gid 1001 nextjs \
&& adduser --system --uid 1001 nextjs
RUN mkdir -p /app/.next/cache/images && chown -R nextjs:nextjs /app/.next  
USER nextjs

EXPOSE 3000


CMD ["npm", "start"]
