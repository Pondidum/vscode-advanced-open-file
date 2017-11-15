const vscode = require("vscode");
import { showCommand } from "./commands";

// export function activate(context) {
//   const disposable = vscode.commands.registerCommand(
//     "extension.advancedOpenFile",
//     showCommand
//   );
//   context.subscriptions.push(disposable);
// }

export function activate(context) {
  const disposable = vscode.commands.registerCommand(
    "extension.advancedOpenFile",
    showCommand
  );
  context.subscriptions.push(disposable);
}
