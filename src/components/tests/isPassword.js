// validate isPassword
import { isPassword } from "../validate";

test("isPassword -> input 5 letters", () => {
  expect(isPassword("a1s2d")).not.toBeUndefined();
});
test("isPassword -> input 6 letters", () => {
  expect(isPassword("a1s2d3")).toBeUndefined();
});
