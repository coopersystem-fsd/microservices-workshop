FROM node:12.16.0 as dependency

WORKDIR /dependency

COPY package.json .

RUN npm install


FROM node:12.16.0

WORKDIR /usr/src/app

COPY . .

COPY --from=dependency /dependency/node_modules ./node_modules

EXPOSE 3000