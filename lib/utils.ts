import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/*
* Render tailwind functions conditionally
*/ 

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/*
* Format Date function:
*/

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

/**
 * Sleep helper for async flows
 * Example: await sleep(1000) // waits 1 second
 */

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}