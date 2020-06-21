FROM golang:1.14.4

ARG PORT=80

ENV PORT=$PORT

WORKDIR /usr/src/app/

COPY . .

RUN go build .

EXPOSE $PORT