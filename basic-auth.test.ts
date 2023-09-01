import { assertEquals } from "https://deno.land/std@0.200.0/assert/mod.ts";
import {
  getToken,
  isValid,
  makeHeader,
  makeToken,
  parseHeader,
  parseToken,
} from "./basic-auth.ts";

Deno.test("makeToken", () => {
  const username = "username";
  const password = "password";
  const token = makeToken(username, password);

  assertEquals(token, "dXNlcm5hbWU6cGFzc3dvcmQ=");
});

Deno.test("makeHeader", async (t) => {
  await t.step("with token", () => {
    const token = "dXNlcm5hbWU6cGFzc3dvcmQ=";
    const header = makeHeader(token);

    assertEquals(header, "Basic dXNlcm5hbWU6cGFzc3dvcmQ=");
  });

  await t.step("with username and password", () => {
    const header = makeHeader("username", "password");

    assertEquals(header, "Basic dXNlcm5hbWU6cGFzc3dvcmQ=");
  });
});

Deno.test("isValid", async (t) => {
  await t.step("with valid header", () => {
    assertEquals(isValid("Basic dXNlcm5hbWU6cGFzc3dvcmQ="), true);
  });

  await t.step("with invalid header", () => {
    assertEquals(isValid("dXNlcm5hbWU6cGFzc3dvcmQ="), false);
  });
});

Deno.test("getToken", () => {
  assertEquals(
    getToken("Basic dXNlcm5hbWU6cGFzc3dvcmQ="),
    "dXNlcm5hbWU6cGFzc3dvcmQ=",
  );
});

Deno.test("parseToken", () => {
  const [username, password] = parseToken("dXNlcm5hbWU6cGFzc3dvcmQ=");

  assertEquals(username, "username");
  assertEquals(password, "password");
});

Deno.test("parseHeader", () => {
  assertEquals(parseHeader("Basic dXNlcm5hbWU6cGFzc3dvcmQ="), [
    "username",
    "password",
  ]);
});
