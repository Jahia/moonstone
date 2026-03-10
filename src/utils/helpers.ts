export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const isTruncated = (element: HTMLElement | null): boolean => element !== null && element.scrollWidth > element.clientWidth;
