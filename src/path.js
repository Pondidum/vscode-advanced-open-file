import fs from "fs";
import mkdirp from "mkdirp";
import touch from "touch";
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

  get stat() {
    try {
      return fs.statSync(this.full);
    } catch (err) {
      return null;
    }
  }

  isDirectory() {
    return !!(this.stat && this.stat.isDirectory());
  }

  isFile() {
    return !!(this.stat && this.stat.isFile());
  }

  exists() {
    return !!this.stat;
  }

  createDirectories() {
    try {
      mkdirp.sync(this.directory);
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
    }
  }

  createFile() {
    touch.sync(this.full);
  }
}
