import { expect, test } from "vitest";

import { validateEmail } from "./validateEmail";

test("Validate email test@example.com", () => {
  expect(validateEmail("test@example.com")).toBe(true);
});

test("Validate email test", () => {
  expect(validateEmail("test")).toBe(false);
});

test("Validate email test@", () => {
  expect(validateEmail("test@")).toBe(false);
});

test("Validate email ya@as@cia.a", () => {
  expect(validateEmail("ya@as@cia.a")).toBe(false);
});
