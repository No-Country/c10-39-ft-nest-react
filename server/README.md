<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Corre Servidor

Para correr docker:

1. Instalar docker-desktop

```
https://docs.docker.com/desktop/install/windows-install/
```

2. Abrir el docker-desktop
3. Cambiar el `.env.template` a `.env`
4. Poner el comando:

```
docker-compose up -d
```

5. Levantar el server de nest:

```
npm run start
```

6. Para poder ver las tablas se puede usar TablePlus o PGAdmin.

# Enpoints

## Sports
### Get All Sports
```
http://localhost:3000/api/sports
```
Se obtiene algo asi:
```
[
  "tenis",
  "soccer"
]
```
### Get One Sport
```
http://localhost:3000/api/sports/tenis
```
se cambia el `tenis` por el nombre de otro deporte en ingles y se obtiene:
```
[
  {
    "id": 1,
    "name": "tenis",
    "sportfields": [
      {
        "id": "cf237097-e501-4b0d-ab06-bb907d8a62ca",
        "name": "tennis pro",
        "description": "Cancha de polvo de ladrillo",
        "dimensions": "40X20",
        "grills": true,
        "locker": true,
        "showers": true,
        "bathrooms": true,
        "restobar": false,
        "parking": false
      },
      {
        "id": "9d19d086-ba9f-4e25-992a-8956d16e3fa2",
        "name": "tennis always",
        "description": "Cancha de pasto",
        "dimensions": "40X20",
        "grills": false,
        "locker": false,
        "showers": false,
        "bathrooms": false,
        "restobar": false,
        "parking": true
      }
    ]
  }
]
```
## License

Nest is [MIT licensed](LICENSE).
