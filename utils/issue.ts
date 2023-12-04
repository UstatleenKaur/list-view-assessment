export function getInitials(name: string) {
  return name.split(" ").map(i => i.substring(0, 1)).join("").toUpperCase();
}