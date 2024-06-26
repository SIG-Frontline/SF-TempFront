import { SvelteKitAuth } from "@auth/sveltekit"
import { env } from '$env/dynamic/private'
import auth0 from "@auth/sveltekit/providers/auth0"

export const { handle, signIn, signOut } = SvelteKitAuth(async () => {
    const authOptions = {
        providers: [
            auth0({
                clientId: env.AUTH_AUTH0_ID,
                clientSecret: env.AUTH_AUTH0_SECRET,
                issuer: env.AUTH0_ISSUER
            })
        ],
        secret: env.AUTH_SECRET,
        trustHost: true
    }
    return authOptions
})