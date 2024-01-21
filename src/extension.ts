import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "hexo-stellar-snippets" is now active!');

	context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((e) => {
		if (vscode.window.activeTextEditor?.document.languageId === "markdown") {
			if (e.contentChanges[0].text === ">" || e.contentChanges[0].text === "=") {
				vscode.commands.executeCommand("editor.action.triggerSuggest");
			}
		}
	}));
}

export function deactivate() { }
