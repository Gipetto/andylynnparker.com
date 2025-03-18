# Andy Lynn Parker portfolio in 11ty

The portfolio for [Andy Lynn Parker](https://andylynnparker.com) built on the Eleventy static site builder.


## Develop

```sh
npm run dev
```


## Build

```sh
npm run build
```


## Publish

This site is published when a merge is performed to the `main` branch.


## Utility

Just some stuff so that I don't have to remember it...

### Convert JPG to WebP

Using the standard `webp` package via apt or homebrew.

```sh
cwebp -q 80 {path/to/image}.jpg -o {path/to/image}.webp
```

### Rename files with index

```sh
i=0; for file in ./{prefix}-*; do mv $file "{project-name}-$i.${file##*.}"; i=$(( i + 1 )); done
```