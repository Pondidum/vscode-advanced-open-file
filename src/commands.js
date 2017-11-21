const vscode = require("vscode");

export const showCommand = (textEditor, edit) => {
  const workspace = vscode.workspace;

  if (!workspace) {
    return;
  }

  const root = workspace.rootPath;

  const options = {
    onDidSelectItem: item => {
      console.log("showQuickPick.onDidSelectItem", item.label);
    }
  };

  const items = workspace.findFiles("**/*", "**/node_modules/**").then(paths =>
    paths.map(uri => {
      return { label: uri.fsPath, description: null };
    })
  );

  vscode.window.showQuickPick(items, options).then(item => {
    console.log("showQuickPick.start");
    if (typeof item === "undefined") {
      return;
    }

    // do things.
  });
};
