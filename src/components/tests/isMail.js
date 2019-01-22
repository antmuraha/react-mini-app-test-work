// validate date
import { isEmail } from "../validate";

test("isEmail -> input <test>", () => {
  expect(isEmail("test")).not.toBeUndefined();
});
test("isEmail -> input <test@>", () => {
  expect(isEmail("test@")).not.toBeUndefined();
});
test("isEmail -> input <test@u>", () => {
  expect(isEmail("test@u")).not.toBeUndefined();
});
test("isEmail -> input <test@ua>", () => {
  expect(isEmail("test@ua")).not.toBeUndefined();
});
test("isEmail -> input <test@com.ua>", () => {
  expect(isEmail("test@com.ua")).toBeUndefined();
});
