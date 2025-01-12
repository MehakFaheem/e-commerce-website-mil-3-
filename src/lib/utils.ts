import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into one, including conditional logic and Tailwind Merge.
 * @param inputs - Class names or conditional logic for classes.
 * @returns - A single combined class name.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
