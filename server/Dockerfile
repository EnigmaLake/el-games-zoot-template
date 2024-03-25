#### server-base ####
FROM node:18-alpine AS server-base
WORKDIR /usr/local/server

# setup package.json and node_modules
COPY server/package.json server/package-lock.json ./
RUN npm ci

#### server-build ####
FROM server-base AS server-build
WORKDIR /usr/local/server

# copy necessary build files
COPY server/src/ src/
COPY server/tsconfig.json ./

# audit and build
RUN npm audit --production --audit-level=critical
RUN npm run build

# productionise node_modules
RUN npm ci --production

#### final stage ####
FROM node:18-alpine
WORKDIR /opt/server

# create runtime user
RUN addgroup -S root_user && adduser -S -G root_user server
USER server

# copy build artifacts
COPY --from=server-build /usr/local/server/package.json ./
COPY --from=server-build /usr/local/server/node_modules/ node_modules/
COPY --from=server-build /usr/local/server/dist ./

ENTRYPOINT ["node", "./index.js"]
