FROM node:14.4.0 as dependency

WORKDIR /dependency

COPY package.json .

RUN npm install -g yarn
RUN npm install
RUN npm i -g @nestjs/cli

FROM node:14.4.0

WORKDIR /usr/src/app

COPY . .

COPY --from=dependency /dependency/node_modules ./node_modules

EXPOSE 3000