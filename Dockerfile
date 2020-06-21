FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31

ENV DENO_VERSION=1.0.0

ARG PORT=3000

ENV PORT=$PORT

RUN apk update && \
    apk upgrade && \
    apk add curl bash && \
    curl -fsSL https://deno.land/x/install/install.sh | sh

ENV DENO_INSTALL="/root/.deno"

ENV PATH="${DENO_INSTALL}/bin:${PATH}"

WORKDIR /usr/src/app/

COPY ./src .