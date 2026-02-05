FROM node:22.14-alpine AS build

WORKDIR /build
COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src
RUN npm run build

FROM public.ecr.aws/lambda/nodejs:18

COPY --from=build /build/package*.json /var/task/
RUN npm ci --omit=dev

COPY --from=build /build/dist /var/task

CMD ["server.handler"]
