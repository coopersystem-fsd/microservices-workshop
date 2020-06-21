FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31

ENV DENO_VERSION=1.1.1

ARG PORT_APPLICATION=3000

ENV PORT_APPLICATION=$PORT_APPLICATION

RUN apk update && \
    apk upgrade && \
    apk add curl bash && \
    curl -fsSL https://deno.land/x/install/install.sh | sh

ENV DENO_INSTALL="/root/.deno"

ENV PATH="${DENO_INSTALL}/bin:${PATH}"

WORKDIR /usr/src/app/

COPY ./src .