# Annotations

## Tasks

- [x] Structural
  - [x] Discuss about module **Account**
  - [x] Create Dockerfile for **API**
  - [x] Create DockerCompose for Authentication Module
    - [x] Node version 14.4.0
    - [x] MongoDB version 4.2.7
  - [x] Create Account Folder
- [ ] Features

  - [x] Model database entity

- [ ] Create authentication
  - [ ] Create a mock authentication

* Framework: Nest (NodeJS)

Autenticação
JWT
REST

- CRUD User

## References

- [Nest](https://docs.nestjs.com)

16/06/2020

- Autenticação (todo)
  > Validar token
  > Criar token
  > Refresh de token
  > Destruir token

* Próximo passo

  - Criar banco de dados

    > Entidades

    Autenticação

        User
          id: number
          login: string
          name: string
          password: string(password)
          enabled: 1|0 -- Ativo|Inativo
          foto: {
            id: number
            usuario_id: number
            arquivo: string (Base64)
          }

    > Migration

Contas
Login
Senha
Nome
Foto
Cadastro
Atualização de dados
Excluir conta (Lógica) \* Lista de endereços

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
