import {
  decode,
  encode,
} from "https://deno.land/std@0.97.0/encoding/base64.ts";
import { AuthHeaderUtilError } from "./error.ts";

export function makeToken(username: string, password: string) {
  return encode(`${username}:${password}`);
}

export function makeHeader(token: string): string;
export function makeHeader(username: string, password: string): string;

export function makeHeader(arg1: string, arg2?: string): string {
  if (arg2) {
    return `Basic ${makeToken(arg1, arg2)}`;
  }
  return `Basic ${arg1}`;
}

export function isValid(header: string): boolean {
  return header.startsWith("Basic ");
}

export function getToken(header: string): string {
  if (!isValid(header)) {
    throw new AuthHeaderUtilError("Invalid Basic Auth Header");
  }
  return header.trim().slice(6).trim();
}

export function parseToken(token: string): [string, string] {
  const [username, password] = new TextDecoder().decode(decode(token)).split(
    ":",
  );
  if (!username || !password) {
    throw new AuthHeaderUtilError("Invalid Basic Auth Header");
  }
  return [username, password];
}

export function parseHeader(header: string): [string, string] {
  return parseToken(getToken(header));
}
