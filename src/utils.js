import osPath from "path";

export function determineSeparator(path) {
  const forwardIndex = path.indexOf("/");
  const backIndex = path.indexOf("\\");

  if (backIndex === -1 && forwardIndex === -1) {
    return osPath.sep;
  } else if (forwardIndex === -1) {
    return "\\";
  } else if (backIndex === -1) {
    return "/";
  } else if (forwardIndex < backIndex) {
    return "/";
  } else {
    return "\\";
  }
}
