FROM node:20-alpine AS base

WORKDIR /usr/src/app
RUN apk add --no-cache tini

COPY ./package*.json ./

RUN npm ci --prefer-offline --no-audit --no-fund
COPY ./ ./

ENTRYPOINT [ "/sbin/tini","--", "node", "src/index.js" ]
