FROM node:12 AS builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:12-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3654