FROM node:10-alpine as base

LABEL org.opencontainers.image.authors=lazhari.mohammed@outlook.com
LABEL org.opencontainers.image.title="Hacker news API using Prisma"
LABEL org.opencontainers.image.licenses=MIT
LABEL com.bretfisher.nodeversion=$NODE_VERSION

ENV NODE_ENV=production
ENV PORT 4000
EXPOSE 4000
WORKDIR /app

ARG PRISMA_MANAGEMENT_API_SECRET
ARG PRISMA_END_POINT
ARG NODE_ENV=production
ENV PRISMA_MANAGEMENT_API_SECRET $PRISMA_MANAGEMENT_API_SECRET
ENV NODE_ENV $NODE_ENV
ENV PRISMA_END_POINT PRISMA_END_POINT

RUN npm i -g prisma --silent

COPY package*.json ./

RUN npm config list
RUN npm ci \
    && npm cache clean --force
ENV PATH /app/node_modules/.bin:$PATH
# ENV TINI_VERSION v0.18.0
# ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
# RUN chmod +x /tini

# ENTRYPOINT ["/tini", "--"]
CMD ["node", "src"]

# Dev Stage 
FROM base as dev
ENV NODE_ENV=development
RUN npm config list
RUN npm install --only=development \
    && npm cache clean --force
USER node
CMD ["nodemon", "src"]

# Test Stage
FROM dev as test
COPY . .
# RUN npm audit --production

# Production Stage
FROM base as prod
COPY --from=test /app /app
# HEALTHCHECK CMD curl http://127.0.0.1/ || exit 1
USER node