# joshwel.dev

Source files for my personal website that I host using GitHub Pages.

- [Shorthands](#shorthands)
- [Developing](#developing)
- [Building](#building)
- [Publishing](#publishing)
- [Font Notice](#font-notice)
- [License](#license)y

## Shorthands

These are shorthand commands for [building](#building) and/or [publishing](#publishing).

```shell
npm run all  # runs all pre:*, build:* and post:* scripts.
npm run all:no-post  # runs all pre:* and build:* post scripts.
```

## Developing

During development, you can run the following command to get real-time updates from
Tailwind.

```shell
npm run dev:watch  # shorthand for `tailwindcss ... --watch`
```

## Building

```shell
npm run pre:fonts  # retrieve fonts (shorthand for scripts/fonts.sh)
npm run build:css  # build css using tailwind
npm run build:post  # clean css using postcss+cssnano
```

**Run the command in the root of the directory.**

## Publishing

As the target deployment platform is GitHub pages, the following command will push the
contents of the `public/` directory to a `gh-pages` branch.

```shell
npm run post:publish  # shorthand for scripts/publish
```

**Run the command in the root of the directory.**

## Font Notice

I personally use Decima Mono Pro as my font of choice for my website. However due to
licensing, I am not able to distribute it here.

- `docs/font-regular.woff2`  
  Decima Mono Pro Regular, Weight 400

- `docs/font-bold.woff2`  
  Decima Mono Pro Bold, Weight 700

- `docs/font-italic.woff2`  
  Decima Mono Pro Italic, Weight 400

If adapting the source code of this project to your own website, adjust the
`src/main.css` file as deemed neccesary. If so, you may also wish to adjust the
`.gitignore` as needed also.

## License

The code and content of this website have been dedicated to the public domain using the
Unlicense. See <https://unlicense.org/> or the [UNLICENSE](UNLICENSE) file for more
information.
