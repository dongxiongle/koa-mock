export function firstUpperCase (key: string): string {
  return key.replace(/(^[a-z]|\-[a-z])/g, (s: string, s1: string) => {
    return s1.toUpperCase();
  });
}

export default {
  firstUpperCase
}