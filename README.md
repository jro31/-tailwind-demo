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
* [03: Responsive Design](https://youtu.be/hX1zUdj4Dw4)
  * Using `max-w-md` to give a max-width to the main div, and `mx-auto` to centre this div, giving the page left and right margins, and an example of using all breakpoints: - [Commit link](https://github.com/jro31/tailwind-demo/commit/4b57c9fb660e6f130dea2da3d4b4e91d4d3ab009)
    * `bg-gray-100`
    * `sm:bg-yellow-300`
    * `md:bg-green-300`
    * `lg:bg-pink-300`
    * `xl:bg-blue-300`
    * `2xl:bg-red-300`
  * Styling the page for the `sm` breakpoint, including: - [Commit link](https://github.com/jro31/tailwind-demo/commit/d4d0610b6587623155bac16ba6aec745c716765b)
    * `sm:text-base` (to set the font-size to the default)
    * `sm:w-full` (to add `width: 100%`)
    * `sm:object-cover` (to add `object-fit: cover`, which makes the image take-up all available space)
    * `object-center` (to add `object-position: center`, which positions the image centrally within the container)
    * `sm:max-w-xl` (to set the max-width to xl)
  * Styling the page for the `lg` breakpoint, including: - [Commit link](https://github.com/jro31/tailwind-demo/commit/a24be0d5f09b959cc3e375172d53370290167872)
    * `hidden` (to add `display: none`)
    * `grid` (to add `display: grid`, to make the element a grid container)
    * `lg:grid-cols-2` (to give the grid 2 columns)
    * `relative` (to add `position: relative`)
    * `absolute` (to add `position: absolute`)
    * `inset-0` (`inset` sets the 'top', 'right', 'bottom' and 'left' properties, so `inset-0` adds `top: 0px, right: 0px, bottom: 0px, left:0px`)
    * `lg:max-w-full` (to set `max-width: 100%`)
  * Styling the page for the `xl` and `2xl` breakpoints, including: - [Commit link](https://github.com/jro31/tailwind-demo/commit/f114269d7783fb5e59818e20f1d0a6aa971a9110)
    * `2xl:grid-cols-5`, which adds 5 columns (instead of 2) for `2xl` screen sizes
    * `2xl:col-span-2` and `2xl:col-span-3` are then used to spread the page content over these five columns
