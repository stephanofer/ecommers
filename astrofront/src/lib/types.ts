type Image = {
    url: string
}

type MetaSocial= {
    socialNetwork: string,
    title: string,
    description: string,
    image: Image
}

export type SEO = {
    metaTitle: string,
    metaDescription: string,
    keywords: string,
    metaImage: Image,
    metaSocial: MetaSocial[]
}

export type FetchHomeSEO = {
    seo: SEO,
    favicon: Image,
}

type Logo = {
    company: string,
    image: Image
}

export type FetchNavbar = {
    navbar: {
        logo: Logo
    }
}
