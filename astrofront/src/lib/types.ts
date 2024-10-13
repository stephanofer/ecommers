export type Seo = {
    metaTitle: string,
    metaDescription: string,
    keywords: string,
    metaImage: {
        url: string
    },
}

export type Favicon = {
    url: string
}

export type HomeSEO = (Seo & {favicon: Favicon})