FROM node:22.14-alpine

WORKDIR /build

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src

RUN npm run build && \
    mkdir -p /app && \
    mv dist/* /app/ && \
    cd /app && \
    cp /build/package*.json . && \
    npm ci --omit=dev && \
    rm -rf /build

WORKDIR /app

ENV PORT=7747
ENV AWS_LWA_ENABLE_COMPRESSION=true

CMD ["node", "server.js"]
