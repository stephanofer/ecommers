import fetchApi from "./strapi";
import type { FetchHomeSEO } from "./types";
import {STRAPI_URL} from 'astro:env/server'

export async function HomePageSEO(): Promise<FetchHomeSEO> {
  const seoData = await fetchApi<FetchHomeSEO>({
    endpoint: "home",
    wrappedByKey: "data",
    query: {
      "fields[0]": "id",
      "fields[1]": "documentId",
      "populate[seo][populate][metaImage][fields][0]": "url",
      "populate[seo][populate][metaSocial][populate][image][fields][0]": "url",
      "populate[favicon][fields][0]": "url",
    },
  });

  // console.log(seoData);


  if (seoData){
    return {
        seo: {
          metaTitle: seoData.seo.metaTitle,
          metaDescription: seoData.seo.metaDescription,
          keywords: seoData.seo.keywords.split('\n').join(', '),
          metaImage: {
              url: `${STRAPI_URL}${seoData.seo.metaImage.url}`
          },
          metaSocial: seoData.seo.metaSocial,
        },
        favicon: {
            url: `${STRAPI_URL}${seoData.favicon.url}`
        }
      }
  }

  return {
    seo: {
      metaTitle: "Tienda Virtual",
      metaDescription: "Tienda Virtual",
      keywords: "",
      metaImage: {
          url: ""
      },
      metaSocial: []
    },
    favicon: {
        url:  ""
    }
  }
}
