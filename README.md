Working through the [Tailwind YouTube demo](https://youtube.com/playlist?list=PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0), with commits of demos of:

* [01: Setting Up Tailwind CSS](https://youtu.be/qYgogv4R8zg)
  * Running Tailwind using the CDN - [Commit link](https://github.com/jro31/tailwind-demo/commit/7215602fd87adcf9e3c42f14a7a5800d12e357d4)
  * Creating a `css/tailwind.css` file, including `@tailwind base;`, `@tailwind components;` and `@tailwind utilities;`, then running `npx tailwindcss-cli build css/tailwind.css -o build/tailwind.css` to build Tailwind into a `build/tailwind.css` file - [Commit link](https://github.com/jro31/tailwind-demo/commit/bd0b7618528760e00e06b8364702060bab7cd38b)
  * Setting-up Tailwind locally - [Commit link](https://github.com/jro31/tailwind-demo/commit/5d9d907b26962f18d65d7386935f95b3dcace38a)
    * Adding `package.json` by running `npm init -y`
    * Installing `tailwind`, `postcss`, `autoprefixer` and `vite` with `npm install -D tailwindcss postcss autoprefixer vite`
      * And also updating `"scripts"` in `package.json` to `"dev": "vite"`
    * Running `npx tailwindcss init -p` to add the `tailwind.config.js` and `postcss.config.js` files
    * Updating `index.html` to use `/css/tailwind.css` instead of the CDN
    * `vite` now runs with `npm run dev`
* [02: The Utility-First Workflow](https://youtu.be/UvF56fPGVt4)
  * Adding basic styling - [Commit link](https://github.com/jro31/tailwind-demo/commit/6e1e854d10467ac87aa52e0ca72bf5dea1641519)
    * padding (e.g `px-8`)
    * margin (e.g `mt-6`)
    * height (e.g `h-10`)
    * border-radius (e.g `rounded-lg`)
    * box-shadow (e.g `shadow-xl`)
    * color (e.g `text-indigo-500`)
    * font-size (e.g `text-2xl`)
    * font-weight (e.g font-bold)
  * An example of using `space-y-6` to add `mt-6` to all child elements *except* the first child - [Commit link](https://github.com/jro31/tailwind-demo/commit/6d58e2c0c88436cc691f414381dab6d798442313)
  * More styling examples - [Commit link](https://github.com/jro31/tailwind-demo/commit/11a7cfdf5b1f74abb9718b1c3a1a631afa451bc1)
    * letter-spacing (e.g `tracking-wider`)
    * display (e.g `inline-block`)
    * text-transform (e.g `uppercase`)
