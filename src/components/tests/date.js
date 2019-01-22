// validate date
import { date } from "../validate";

test("date day -> input string 0", () => {
  expect(date("0", null, null, "d")).not.toBeUndefined();
});
test("date day -> input string 32", () => {
  expect(date("32", null, null, "d")).not.toBeUndefined();
});
test("date day -> input string 15", () => {
  expect(date("15", null, null, "d")).toBeUndefined();
});
