export function isValid(header: string): boolean {
  return header.startsWith("Bearer ");
}

export function parseHeader(header: string): string {
  if (!isValid(header)) {
    throw new Error("Invalid authorization header");
  }

  return header.trim().slice(7).trim();
}
