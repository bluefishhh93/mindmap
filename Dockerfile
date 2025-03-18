FROM node:20-alpine AS base

# Cài đặt dependencies cần thiết
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Tạo file .env từ các biến môi trường hoặc giá trị mặc định
RUN touch .env
RUN echo "OPENAI_API_KEY=${OPENAI_API_KEY}" >> .env
RUN echo "NODE_ENV=production" >> .env
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

# Tạo user non-root để cải thiện bảo mật
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy các file cần thiết từ builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]