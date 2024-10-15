import fetchApi from "./strapi";
import { FetchNavbar } from "@/app/lib/types";

export default async function getHeaderData(): Promise<FetchNavbar> {
  const navbarItems = await fetchApi<FetchNavbar>({
    endpoint: "home",
    wrappedByKey: "data",
    query: {
      "fields[0]": "id",
      "fields[1]": "documentId",
      "populate[navbar][populate][logo][fields][0]": "company",
      "populate[navbar][populate][logo][populate][image][fields][0]": "url",
    },
  });

  if (navbarItems) {
    return {
      navbar: {
        logo: {
          company: navbarItems.navbar.logo.company,
          image: {
            url: `${process.env.STRAPI_URL}${navbarItems.navbar.logo.image.url}`,
          },
        },
      },
    };
  }

  return {
    navbar: {
      logo: {
        company: "",
        image: {
          url: "",
        },
      },
    },
  };
}
