# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
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

## Depdencies

- prettier, eslint (default settings)
- pnpm install -D [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
- pnpm add @auth/sveltekit
- tailwind

## Auth Set up

### Main link

- https://authjs.dev/reference/sveltekit#lazy-initialization
- https://auth0.com
- https://youtu.be/ehmc1Zgu_EU?si=rNugNcOairDsKUyX or https://www.youtube.com/watch?v=ridRgYSJ0ds

### Steps

0. pnpm add @auth/sveltekit
1. set up auth0
2. make `src/auth.js` and `src/hooks.server.js`
3. make `signin/+page.server.js` and `signout/+page.server.js`
4. add to the `.env` file including a random 32 encoding `auth_secret`, and any other providers info such as `clientAUTH_AUTH0_ID`, `AUTH_AUTH0_SECRET`, and `AUTH0_ISSUER`

### Other Notes

- ISSUER is the domain provided by services - auth0 requires it
