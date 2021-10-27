import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file' },
		new CompletionProvider(),
		'(',
	));
}

class CompletionProvider implements vscode.CompletionItemProvider {
	public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): Promise<vscode.CompletionItem[]> {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const item = new vscode.CompletionItem("barbarbarbarbar", vscode.CompletionItemKind.Variable);
		item.detail = "bool";
		item.sortText = "aaaaaa";
		item.textEdit = { range: new vscode.Range(position, position), newText: "barbarbarbarbar" };

		return [item];
	}

	public async resolveCompletionItem(item: vscode.CompletionItem, token: vscode.CancellationToken): Promise<vscode.CompletionItem> {
		await new Promise((resolve) => setTimeout(resolve, 100));
		return item;
	}
}
