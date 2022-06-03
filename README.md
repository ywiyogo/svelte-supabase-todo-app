# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Tailwind

## Installation
```
npm install -D tailwindcss autoprefixer postcss-load-config
npx tailwindcss init
```

* Create a file postcss.config.cjs
* Rename tailwind.config.js to tailwind.config.cjs.

## Setup

* create a css file under /src/styles/app.css
* create a __layout.svelte under /src/routes
* Add `import '../styles/app.css';`

# Deployment

# Github Pages

1. Install gh-pages `npm install -D gh-pages`
2. Add this line in packages.json inside the `script`key:
    ```
    "gh-deploy": "touch build/.nojekyll && gh-pages -d build -t true -o github",
    ```
    The `-o` options refers to the local remote that points to the github repository. Omit it if you use the default remote `origin`.
3. Run `npm install -D @sveltejs/adapter-static` and replace `import adapter from '@sveltejs/adapter-auto';` with `import adapter from '@sveltejs/adapter-static';`
4. Edit the `kit` key in the svelte.config.js to:
    ```
    kit: {
        adapter: adapter(),
        prerender: {
        default: true,
        },
        paths: {
            base: process.env.NODE_ENV === "production" ? "/svelte-supabase-todo-app" : "",
        },
    },
    ```
5. Run `npm run gh-deploy` on your terminal locally.
6. Go to the Github repository -> Settings -> Pages -> Set source to the Branch:gh-pages and root folder, thne save.

# Supabase Backend Integration

1. `npm install @supabase/supabase-js`
2. Create a .env file and add the variables `SUPABASE_URL` and `SUPABASE_ANON_KEY`
3. Login and create a table in supabase.com. Copy the Supabase URL and the anon key to the .env file.
4. Create supabase.ts/.js under the src folder