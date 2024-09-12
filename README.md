# Strip-types flag PoC

This repro showcases the usage of the `--experimental-strip-types` flag and have the following all working:
- ESM
- Typescript
- Relative paths
- Biome
- Vitest

Gotchas:
- No `enums` and `decorator` support: the flag does not rewrite code as needed for these features, it only replaces the types definition with a space.
- Not tested in a monorepo yet.

## Requirements:
- `fnm` (eg: `brew install fnm`)
- `pnpm` (eg: `npm install -g pnpm`)

## How to run

Run:
```sh
pnpm install
pnpm start
```

Also `tsc`, `biome` and `vitest` running fine:
```sh
pnpm tsc
pnpm lint ./src
pnpm test
```
