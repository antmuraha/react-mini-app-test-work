// validate isNumberInt
import { isNumberInt } from "../validate";

test("isNumberInt -> input string 0", () => {
  expect(isNumberInt("0")).toBeUndefined();
});
test("isNumberInt -> input string a0", () => {
  expect(isNumberInt("a0")).not.toBeUndefined();
});
