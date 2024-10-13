import fetchApi from "./strapi";
import type { Favicon, HomeSEO } from "./types";
import {STRAPI_URL} from 'astro:env/server'


export async function HomePageSEO(): Promise<HomeSEO> {
  const seoData = await fetchApi<{seo: HomeSEO} & {favicon: Favicon}>({
    endpoint: "home",
    wrappedByKey: "data",
    query: {
      "fields[0]": "id",
      "fields[1]": "documentId",
      "populate[seo][populate][metaImage][fields][0]": "url",
      "populate[favicon][fields][0]": "url",
    },
  });


  if (seoData){

    


    return {
        metaTitle: seoData.seo.metaTitle,
        metaDescription: seoData.seo.metaDescription,
        keywords: seoData.seo.keywords.split('\n').join(', '),
        metaImage: {
            url: `${STRAPI_URL}${seoData.seo.metaImage.url}`
        },
        favicon: {
            url:  `${STRAPI_URL}${seoData.favicon.url}`
        }
      }
  }

  return {
    metaTitle: "Tienda Virtual",
    metaDescription: "Tienda Virtual",
    keywords: "",
    metaImage: {
        url: ""
    },
    favicon: {
        url:  ""
    }
  }
}
