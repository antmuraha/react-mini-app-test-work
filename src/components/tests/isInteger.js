// validate isInteger
import { isInteger } from "../validate";

test("isInteger -> input string 0", () => {
  expect(isInteger("0")).toBeUndefined();
});
test("isInteger -> input string a0", () => {
  expect(isInteger("a0")).not.toBeUndefined();
});
