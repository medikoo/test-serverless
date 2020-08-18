# docker-image

Instantly build and push your Docker images with [Serverless Components](https://github.com/serverless/components). Supports the configuration of the Docker Daemon as well as the Container Registry.

&nbsp;

1. [Install](#1-install)
2. [Create](#2-create)
3. [Configure](#3-configure)
4. [Deploy](#4-deploy)

&nbsp;

### 1. Install

```console
$ npm install -g serverless
```

### 2. Create

Just create a `serverless.yml` file

```console
$ touch serverless.yml
```

```
# .env
DOCKER_USERNAME=XXX
DOCKER_PASSWORD=XXX
```

### 3. Configure

```yml
# serverless.yml

myImage:
  component: '@serverless/docker-image'
  inputs:
    dockerHost: '192.168.2.1' # default is `'127.0.0.1'`
    dockerPort: 4711 # default is `3000`
    dockerfile: my-app.dockerfile # default is `Dockerfile`
    context: '.' # default is `process.cwd()`
    registryAddress: 'https://container-registry.acme.com' # default is `'https://index.docker.io/v1'`
    push: true # default is `false`
    repository: acme/my-image
    tag: latest
```

### 4. Deploy

```console
$ serverless
```

### New to Components?

Checkout the [Serverless Components](https://github.com/serverless/components) repo for more information.
