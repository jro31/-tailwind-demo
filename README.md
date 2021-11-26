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
* [04: Hover, Focus and Other States](https://youtu.be/5_BPDve5-3M)
  * Adding some `hover` styling to the button: - [Commit link](https://github.com/jro31/tailwind-demo/commit/749e5a6e344272d91c7a642205e3c87ae1b10da0)
    * `hover:bg-indigo-400` (to change the color while hovering)
    * `hover:-translate-y-0.5` and `transform` (to move the button 'up' slightly when hovered over)
      * `hover:-translate-y-0.5` sets a variable of `--tw-translate-y: -0.125rem;` (when hovering over the button)
      * `transform` adds `transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));` with default values for all these variables.
        * The default for `--tw-translate-y` is `--tw-translate-y: 0`
      * When hovering over the button, the value of `--tw-translate-y` is then over-written to `--tw-translate-y: -0.125rem;`
    * `transition` (to add the default transition settings)
      * `transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;`
      * `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);`
      * `transition-duration: 150ms;`
  * Adding some `focus` styling: - [Commit link](https://github.com/jro31/tailwind-demo/commit/7ff9fdf5987b61bb6473cf7608608b41681be6db)
    * `focus:outline-none` (to remove the outline on focussed elements that some browsers add by default)
    * `ring` (adds a 'ring' around an element - basically a fancy box-shadow), so `focus:ring` only displays this ring when the element is focussed
    * `focus:ring-offset-2` (offsets this ring; essentially giving it some padding of 2px)
    * `focus:ring-indigo-500` (sets the colour of this ring)
    * `focus:ring-opacity-50` (sets the opacity)
  * An example of chaining breakpoints (`sm`) with states (`hover`) (`sm:hover:bg-green-500`) and updating the `tailwind.config.js` file to allow `active` state styling (`active:bg-indigo-600`) - [Commit link](https://github.com/jro31/tailwind-demo/commit/7998c897277c6f7f946684869cd58134f9254600)
    * Which is not enabled by default
  * An example of enabling state variants for less common cases, such as changing the font-size on hover (`sm:hover:text-3xl`), which are disabled by default - [Commit link](https://github.com/jro31/tailwind-demo/commit/4947f1506f0c0bdd6ff7417d8da09bf8b339f07f)
* [05: Composing Utilities with @apply](https://youtu.be/TrftauE2Vyk)
  * Using `@apply` to create a `btn` class that can be used globally (instead of setting all the button styling inline), and an explanation of why we're wrapping it in `@layer components` - [Commit link](https://github.com/jro31/tailwind-demo/commit/a19cbd6ef117c0a158361d09c27a84f934c32b58)
  * Adding `btn-primary` and `btn-secondary` classes (again using `@apply`), to work with the `btn` class so we can have multiple button styles - [Commit link](https://github.com/jro31/tailwind-demo/commit/7ee7ec38c33db913d44d518196a6375f0d5d9dd5)
    * Also includes a brief explanation of why we shouldn't go overboard doing this
