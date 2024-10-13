import { STRAPI_TOKEN, STRAPI_URL } from "astro:env/server";
import axios from "axios";

interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
  // extractField?: string;
}

export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
  // extractField,
}: Props): Promise<T | null> {

  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }
  const url = new URL(`${STRAPI_URL}/api/${endpoint}`);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  try {
    const { data } = await axios(url.toString(), {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });

    let result = data;
    
    if (wrappedByKey && result[wrappedByKey]) {
      result = result[wrappedByKey];
    }
    if (wrappedByList && Array.isArray(result)) {
      result = result[0];
    }
    // if (extractField && result[extractField]) {
    //   result = result[extractField];
    // }
    return result as T;
  } catch (error) {
    console.error("Error fetching data from Strapi:", (error as Error).message);
    return null;
  }
}