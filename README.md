Working through the [Tailwind YouTube demo](https://youtube.com/playlist?list=PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0), with commits of demos of:

* Running Tailwind using the CDN - [Commit link](https://github.com/jro31/tailwind-demo/commit/7215602fd87adcf9e3c42f14a7a5800d12e357d4)
* Creating a `css/tailwind.css` file, including `@tailwind base;`, `@tailwind components;` and `@tailwind utilities;`, then running `npx tailwindcss-cli build css/tailwind.css -o build/tailwind.css` to build Tailwind into a `build/tailwind.css` file - [Commit link](https://github.com/jro31/tailwind-demo/commit/bd0b7618528760e00e06b8364702060bab7cd38b)
* Setting-up Tailwind locally - [Commit link](https://github.com/jro31/tailwind-demo/commit/5d9d907b26962f18d65d7386935f95b3dcace38a)
  * Adding `package.json` by running `npm init -y`
  * Installing `tailwind`, `postcss`, `autoprefixer` and `vite` with `npm install -D tailwindcss postcss autoprefixer vite`
    * And also updating `"scripts"` in `package.json` to `"dev": "vite"`
  * Running `npx tailwindcss init -p` to add the `tailwind.config.js` and `postcss.config.js` files
  * Updating `index.html` to use `/css/tailwind.css` instead of the CDN
