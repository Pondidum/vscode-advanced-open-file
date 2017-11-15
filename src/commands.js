const vscode = require("vscode");

export const showCommand = (textEditor, edit) => {
  const someItems = [
    { label: "one", description: null },
    { label: "two", description: null },
    { label: "three", description: null },
    { label: "four", description: null }
  ];

  vscode.window.showQuickPick(someItems).then(item => {
    console.log("showQuickPick.start");
    if (typeof item === "undefined") {
      return;
    }

    // do things.
  });
};
