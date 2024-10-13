import {STRAPI_URL} from 'astro:env/server'


export function completeRouteImage(url: string) {
    return `${STRAPI_URL}${url}`
}