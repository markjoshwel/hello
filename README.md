Source files for my personal website that I host using GitHub Pages.

- [Shorthands](#shorthands)
- [Developing](#developing)
- [Building](#building)
- [Publishing](#publishing)
- [Font Notice](#font-notice)
- [License](#license)

## Shorthands

These are shorthand commands for [building](#building) and/or [publishing](#publishing).

```shell
npm run all          # runs all pre:*, build:* and post:* scripts
npm run all-pre      # same as 'all', but without pre:* scripts
npm run all+publish  # same as 'all', but also 'npm run publish'
```

## Developing

Changes to the sites' source code occurs in the `src/` folder, where website previews
come from `public/index.html`.

During development, you can run the following command to get real-time updates from
Tailwind.

```shell
npm run dev:watch-html
npm run dev:watch-css
```

If you get a error regarding the `$SHELL` variable when running `dev:watch-html`, you can
specify a shell by prefixing `SHELL=/bin/bash` (or whatever shell you use) to the
command.

The non-watch variants of these commands are:

```shell
npm run post:html
npm run post:css
```

**Run these commands in the root of the repository.**

## Building

```shell
npm run pre  # retrieve fonts (shorthand for scripts/fonts.sh)
npm run build  # build css using tailwind
npm run post  # clean css using postcss+cssnano and html using html-minifier-terser
```

**Run these commands in the root of the repository.**

## Publishing

As the target deployment platform is GitHub pages, the following command will push the
contents of the `public/` directory to a `gh-pages` branch.

```shell
npm run publish  # shorthand for 'npx gh-pages -t -d public'
```

**Run the command in the root of the repository.**

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
