

export function completeRouteImage(url: string) {
    return `${process.env.STRAPI_URL}${url}`
}

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
