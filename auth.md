## Main link

- https://authjs.dev/reference/sveltekit#lazy-initialization
- https://auth0.com
- https://youtu.be/ehmc1Zgu_EU?si=rNugNcOairDsKUyX or https://www.youtube.com/watch?v=ridRgYSJ0ds

## Steps

0. pnpm add @auth/sveltekit
1. set up auth0
2. make `src/auth.js` and `src/hooks.server.js`
3. make `signin/+page.server.js` and `signout/+page.server.js`
4. add to the `.env` file including a random 32 encoding `auth_secret`, and any other providers info such as `clientAUTH_AUTH0_ID`, `AUTH_AUTH0_SECRET`, and `AUTH0_ISSUER`

## Other Notes

- ISSUER is the domain provided by services - auth0 requires it
