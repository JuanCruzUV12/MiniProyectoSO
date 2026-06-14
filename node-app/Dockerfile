FROM node:22-alpine

RUN corepack enable

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm prisma generate

RUN pnpm build

EXPOSE 3000

CMD ["pnpm","start"]
