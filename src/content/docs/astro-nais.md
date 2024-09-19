---
title: 'Astro på NAIS'
description: 'Slik fikk vi det til'
pubDate: 'sep 17 2024'
heroImage: '/blog-placeholder-about.jpg'
---
## Kom i gang

- Installer `yarn create astro`
- Kjør lokalt `yarn dev`

### Legg til README, LICENCE og CODEOWNERS

- [Mal for README](https://github.com/navikt/offentlig/blob/main/README.template.md)
- [Mal for LICENCE](https://github.com/navikt/offentlig/blob/main/LISENSIERING.md)
- [Mal for CODEOWNERS](https://github.com/navikt/offentlig/blob/main/CODEOWNERS)

### Legg til isAlive og isReady

- Legg til mappenene "/api/internal/" i "/src/pages/" mappen
- Legg til isAlive.ts og isReady.ts i mappen "/api/internal/" med følgende:

```
import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async function get() {
    return new Response(null, { status: 200 });
};
```

### Legg til nais.yaml

[Mal for nais.yaml](https://github.com/navikt/docs/blob/main/nais.yaml). Endre følgende:

- "name" til ønsket appnavn
- "teamspace" til ditt team
- "ingresses" til ønsket url der appen skal kjøre

### Legg til Dockerfile

[Mal for Dockerfile](https://github.com/navikt/docs/blob/main/Dockerfile)

### Endre i astro.config.js

Mal for [astro.config.js](https://github.com/navikt/docs/blob/main/astro.config.mjs)

### Legg til Github workflow

- Legg til mappen "/.github/workflow/" i root mappen
- Legg til deploy.yaml i filen
- [Mal for deploy.yaml](https://github.com/navikt/docs/blob/main/.github/workflows/deploy.yaml)

Husk å endre til ditt team under "build and push" i deploy.yaml

### Legg til repoet i NAIS Console

- Du må gi tillatelse til repoet før du pusher koden til Github for at appen skal deploye

### Push kode til Github

- Legg til ønsket navn for repo (det du gav tillatelse for via NAIS Console)
- Velg om koden skal være public / privat
- Velg github organisasjon "navikt"

### Appen din kjører nå på NAIS!

Besøk ingress URLen du angav for å se appen.
