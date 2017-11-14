import osPath from "path";
import Path from "./path";

it("should construct with no path", () => {
  const path = new Path();

  expect(path.directory).toEqual("");
  expect(path.tail).toEqual("");
  expect(path.full).toEqual("");
  expect(path.separator).toEqual(osPath.sep);
});
