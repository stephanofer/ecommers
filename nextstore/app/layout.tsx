import type { Metadata } from "next";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";
import { HomePageSEO } from "./lib/get-homepage";
import { completeRouteImage } from "./lib/utils";

export async function generateMetadata(): Promise<Metadata> {
 
  const {seo, favicon} = await HomePageSEO();

  const openGraph = seo.metaSocial.find((metaSocial) => metaSocial.socialNetwork === "og")
  const twitter = seo.metaSocial.find((metaSocial) => metaSocial.socialNetwork === "og")


 
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    icons: {
      icon: favicon ? favicon.url: ""
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
      title: openGraph ? openGraph.title : "Tienda Virtual",
      description: openGraph ? openGraph.description : "Tienda Virtual",
      images: {
        url: openGraph ? completeRouteImage(openGraph.image.url) : ""
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
    <html lang="en">
      <body
      >
        <TanstackProvider>
          <div>{children}</div>
        </TanstackProvider>
      </body>
    </html>
  );
}
