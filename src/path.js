import { determineSeparator } from "./utils";

const immutableProperty = (obj, name, value) =>
  Object.defineProperty(obj, name, {
    value: value,
    writable: false,
    enumerable: true
  });

export default class Path {
  constructor(path = "") {
    const separator = determineSeparator(path);
    const segments = path.split(separator);
    const tail = segments[segments.length - 1];
    const directory = path.substring(0, path.length - tail.length);

    immutableProperty(this, "directory", directory);
    immutableProperty(this, "tail", tail);
    immutableProperty(this, "full", path);
    immutableProperty(this, "separator", separator);
  }
}
