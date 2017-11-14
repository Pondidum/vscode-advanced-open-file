import path from "path";
import { determineSeparator } from "./utils";

describe("determineSeparator", () => {
  const testCases = [
    { path: "", expected: path.sep },
    { path: "something-without.js", expected: path.sep },
    { path: "back\\slashed\\path", expected: "\\" },
    { path: "forward/slashed/path", expected: "/" },
    { path: "first\\back/then/forward", expected: "\\" },
    { path: "first/forward\\then/back", expected: "/" }
  ];

  testCases.forEach(test =>
    it(`should handle '${test.path}' paths`, () =>
      expect(determineSeparator(test.path)).toEqual(test.expected))
  );
});
