# Auth Module

API using Jest(NodeJS) to Authenticate User.

This module uses the technologies below:

- Docker
- NodeJS

## Requirements

- Docker v19.03.6
- DockerCompose v1.24.1

## How to run

- Lift stack

```sh
docker-compose up
```

- Lift stack using decoupled mode

```sh
docker-compose up -d
```

## Provides

- [API](./api)

## Tasks

- [x] Structural
  - [x] Discuss about module **Authentication**
  - [x] Create Dockerfile for **API**
  - [x] Create DockerCompose for Authentication Module
    - [x] Node version 14.4.0
  - [x] Create Authentication Folder
- [ ] Features
  - [ ] Authentication token
    - [ ] Create
    - [ ] Validate own token
    - [ ] Refresh own token
    - [ ] Destruct own token
  - [ ] Create a mock authentication
  - [ ] Shows available routes
  - [ ] Consume authentication from Account module

## References

- Team

  - Gabriel
  - Vinicius
  - Warlisson

- Co-authoreds:

```sh
Co-authored-by: Warlisson Lima <warllisonlima@gmail.com>
Co-authored-by: Gabriel Dalla Costa <gibrel@gmail.com>
```

- [Repositório](https://github.com/coopersystem-fsd/microservices-workshop)
