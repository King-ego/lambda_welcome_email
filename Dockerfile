# Build stage
FROM node:22.14-alpine AS build

WORKDIR /build
COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# Final image for AWS Lambda (contains RIC)
FROM public.ecr.aws/lambda/nodejs:18

# Install production deps
COPY --from=build /build/package*.json /var/task/
RUN npm ci --omit=dev

# Copy compiled output to the Lambda working dir
COPY --from=build /build/dist /var/task

# Lambda handler: filename (sem .js) . export name
CMD ["server.handler"]
