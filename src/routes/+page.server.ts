import { createClient } from '$lib/prismicio'
import { error, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (data) => {
    const { fetch, request, route, cookies } = data;
    const popup = cookies.get("aktion-popup");
    const slug = route.id == '/' ? 'homepage' : route.id;
    // const homepageUID = slug  // Update for the UID of your homepage
    const client = createClient({ fetch, request })
    const document = await client.getFirst()

    if (document) {
        return { document, popup }
    }

    error(404, 'Not found')
};

export const actions: Actions = {
    close: async (event):Promise<any> => {
        const { cookies } = event
        const popup = "dontshowagain";
        const opts =  {
            path: '/',
            maxAge: 60 * 60 * 24 * 5 // 5 days
        }

        cookies.set("aktion-popup", popup, opts)
        const response={
            success:true,
            zodError:{},
            prismaError:""
        }
        return response
    }
};