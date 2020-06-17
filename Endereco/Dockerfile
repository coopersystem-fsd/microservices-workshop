# FROM node:12.18-alpine as development

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# FROM node:12.18-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["node", "dist/main"]


FROM node:12.16.0 as dependency

WORKDIR /dependency

COPY package.json .

RUN npm install


FROM node:12.16.0

WORKDIR /usr/src/app

RUN npm i -g @nestjs/cli

COPY . .

COPY --from=dependency /dependency/node_modules ./node_modules

EXPOSE 3000