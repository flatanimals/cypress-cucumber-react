# Cypress with cucumber

Run your project.

```
npm run start
```

To run cypress test

```
npm run cy
```

### Docker setup.

Install docker and create/build image

```
$ docker build -t <ImageName>:<TageName> .

Example
$ docker build -t cy1:v1 .
```

Lunch Docker container

```
$ docker run -p <public port no>:<app running port no> imageId:tagName

Example:
$ docker run -p 8080:3100 cy1:v1
```

Run cypress through docker in cli mode no need to install cypress npm module (remove / before $PWD)
docker run -it -v \$PWD:/e2e -w /e2e cypress/included:4.1.0
