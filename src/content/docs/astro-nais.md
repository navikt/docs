---
title: 'Astro på NAIS'
description: 'Slik fikk vi det til'
pubDate: 'Sep 17 2024'
heroImage: '/blog-placeholder-about.jpg'
---
## Kom i gang

- Installer `yarn create astro`
- Kjør lokalt `yarn dev`

### Legg til README, LICENCE og CODEOWNERS i root mappen

- [Mal for README](https://github.com/navikt/offentlig/blob/main/README.template.md)
- [Mal for LICENCE](https://github.com/navikt/offentlig/blob/main/LISENSIERING.md)
- [Mal for CODEOWNERS](https://github.com/navikt/offentlig/blob/main/CODEOWNERS)

### Legg til isAlive og isReady

- Lag mappenene "/api/internal/" i src mappen
- Legg til filene isAlive.ts og isReady.ts i mappen "/api/internal/" med følgende kode i hver fil:

```
import type { APIRoute } from 'astro';

export const GET: APIRoute = async function get() {
    return new Response(null, { status: 200 });
};
```
