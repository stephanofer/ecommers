import type { Metadata } from "next";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";
import { getHomePageSEO } from "./lib/api/getHomePageSEO";
import { completeRouteImage } from "./lib/utils";
import SiteNavbar from "@/app/components/layout/SiteHeader";
import Announce from "./components/layout/Announce";


export async function generateMetadata(): Promise<Metadata> {
 
  const {seo, favicon} = await getHomePageSEO();


  const openGraph = seo.metaSocial.find((metaSocial) => metaSocial.socialNetwork === "og")
  const twitter = seo.metaSocial.find((metaSocial) => metaSocial.socialNetwork === "twitter")


 
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    icons: {
      icon: {
        url: favicon.url
      }
    },
    openGraph: {
      type: "website",
      title: openGraph ? openGraph.title : "Tienda Virtual",
      siteName: openGraph ? openGraph.title : "Tienda Virtual",
      description: openGraph ? openGraph.description : "Tienda Virtual",
      images: {
        url: openGraph ? completeRouteImage(openGraph.image.url) : ""
      }
    },
    twitter: {
      title: twitter ? twitter.title : "Tienda Virtual",
      description: twitter ? twitter.description : "Tienda Virtual",
      images: {
        url: twitter ? completeRouteImage(twitter.image.url) : ""
      }
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className="h-full">
      <body
      className="h-full"
      >
        <TanstackProvider>
          <Announce />
         <SiteNavbar />
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
