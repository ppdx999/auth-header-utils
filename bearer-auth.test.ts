import { assertEquals } from "https://deno.land/std@0.200.0/assert/mod.ts";
import { isValid, parseHeader } from "./bearer-auth.ts";

Deno.test("isValid", () => {
  assertEquals(isValid("Bearer 123"), true);
  assertEquals(isValid("Bearer123"), false);
});

Deno.test("parseHeader", () => {
  assertEquals(parseHeader("Bearer 123"), "123");
});
