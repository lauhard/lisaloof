import type { LayoutLoad } from "./$types";
export const prerender = true;
export const load: LayoutLoad = async ({url}) => {
    const currentRoute = url.pathname;
    console.log("preload: ", currentRoute);
    return {
        currentRoute
    }
};