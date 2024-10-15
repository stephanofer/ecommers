import fetchApi from "@/app/lib/api/strapi";
import type { FetchHomeSEO } from "@/app/lib/types";
import { completeRouteImage } from "@/app/lib/utils";

const defaultValues = {
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
      url:  "a"
  }
}


export async function getHomePageSEO(): Promise<FetchHomeSEO> {
  

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


    if (seoData){
      return {
          seo: {
            metaTitle: seoData.seo.metaTitle,
            metaDescription: seoData.seo.metaDescription,
            keywords: seoData.seo.keywords.split('\n').join(', '),
            metaImage: {
                url: completeRouteImage(seoData.seo.metaImage.url) 
            },
            metaSocial: seoData.seo.metaSocial,
          },
          favicon: {
              url: completeRouteImage(seoData.favicon.url)
          }
        }
    }

  return defaultValues
}
