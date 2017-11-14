import osPath from "path";
import Path from "./path";

it("should construct with no path", () => {
  const path = new Path();

  expect(path.directory).toEqual("");
  expect(path.tail).toEqual("");
  expect(path.full).toEqual("");
  expect(path.separator).toEqual(osPath.sep);
});

it("should detect directories", () => {
  const path = new Path(__dirname);

  expect(path.isDirectory()).toEqual(true);
  expect(path.isFile()).toEqual(false);
});

it("should detect files", () => {
  const path = new Path(__filename);

  expect(path.isDirectory()).toEqual(false);
  expect(path.isFile()).toEqual(true);
});
