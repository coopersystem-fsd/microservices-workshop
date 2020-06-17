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

## Endpoints

- Login

```yaml
Verb: /POST
Host: localhost:3000
Route: /auth/login
Access: Public
Parameters: { 'email': 'viniciusfesil@gmail.com', 'password': 'letItGo!' }
```

- Profile

```yaml
Verb: /GET
Host: localhost:3000
Route: /profile
Access: Restrict
```

## Tasks

- [x] Structural
  - [x] Discuss about module **Authentication**
  - [x] Create Dockerfile for **API**
  - [x] Create DockerCompose for Authentication Module
    - [x] Node version 14.4.0
  - [x] Create Authentication Folder
- [ ] Features
  - [ ] Authentication token
    - [x] Create users to authentication
    - [x] Create
    - [x] Validate own token
    - [ ] Refresh own token
    - [ ] Destruct own token
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
