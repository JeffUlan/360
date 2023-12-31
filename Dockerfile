# Dockerfile
FROM node:18.16.0-alpine as builder

WORKDIR /app

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

# RUN rm -rf node_modules && \
#  NODE_ENV=production yarn install \
#  --prefer-offline \
#  --pure-lockfile \s
#  --non-interactive \
#  --production=true

# FROM node:18.16.0-alpine

# WORKDIR /app

# COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]