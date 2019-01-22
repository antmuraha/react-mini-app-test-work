// validate required
import { isConfirmPassword } from "../validate";

test("isConfirmPassword -> Password != Confirm", () => {
  expect(isConfirmPassword("a1s2d3", { password: "a1s2d" })).not.toBeUndefined();
});
test("isConfirmPassword -> Password == Confirm", () => {
  expect(isConfirmPassword("a1s2d3", { password: "a1s2d3" })).toBeUndefined();
});
