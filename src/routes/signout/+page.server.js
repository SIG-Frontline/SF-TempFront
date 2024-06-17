import { signIn, signOut } from "../../auth"
export const actions = { default: signOut }

export async function load() {
    return {};
};