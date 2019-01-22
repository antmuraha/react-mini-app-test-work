// validate required
import { required } from "../validate";

test("required -> input number", () => {
  expect(required(1)).toBeUndefined();
});
test("required -> input number 0", () => {
  expect(required(0)).toBeUndefined();
});
test("required -> input not emty string", () => {
  expect(required("test")).toBeUndefined();
});
test("required -> input emty string", () => {
  expect(required("")).not.toBeUndefined();
});
