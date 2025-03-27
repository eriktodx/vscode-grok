import * as vscode from "vscode";
import { GrokChoices } from "./types";
import {
  OUTPUT_CHANNEL_NAME,
  OUTPUT_METHOD_OUTPUT_CHANNEL,
  OUTPUT_METHOD_TAB,
  OUTPUT_METHOD_TAB_PREVIEW,
} from "./const";
import { getOutputMethod } from "./config";

export async function displayResponseInTab(
  choices: GrokChoices
): Promise<void> {
  for (const [index, choice] of choices.entries()) {
    const document = await vscode.workspace.openTextDocument({
      content: `# Grok Response ${index + 1}\n\n${choice.message.content}`,
      language: "markdown",
    });
    await vscode.window.showTextDocument(document, { preview: false });
  }
  vscode.window.showInformationMessage(
    "Grok finished. Responses shown in new tabs."
  );
}

export async function displayResponseInTabPreview(
  choices: GrokChoices
): Promise<void> {
  for (const [index, choice] of choices.entries()) {
    // Create the markdown document
    const document = await vscode.workspace.openTextDocument({
      content: `# Grok Response ${index + 1}\n\n${choice.message.content}`,
      language: "markdown"    });

    // Store the URI before showing preview
    const docUri = document.uri;

    // Open preview to the side
    await vscode.commands.executeCommand('markdown.showPreviewToSide', docUri);

    // Close the original document without save prompt (require more testing...)
    // if (document) {
    //   await vscode.window.showTextDocument(document);
    //   await vscode.commands.executeCommand('workbench.action.files.revert'); // Revert to avoid save prompt
    //   await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
    // }
  }

  vscode.window.showInformationMessage(
    "Grok finished. Responses shown in new preview tabs."
  );
}

export function displayResponseInOutputChannel(choices: GrokChoices): void {
  const outputChannel = vscode.window.createOutputChannel(OUTPUT_CHANNEL_NAME);
  outputChannel.clear();
  for (const [index, choice] of choices.entries()) {
    outputChannel.appendLine(`# Grok Response ${index + 1}`);
    outputChannel.appendLine(choice.message.content);
    outputChannel.appendLine("\n---\n");
  }
  outputChannel.show();
  vscode.window.showInformationMessage(
    "Grok finished. Responses shown in the Output panel."
  );
}

export async function displayResponse(choices: GrokChoices): Promise<void> {
  const outputMethod = await getOutputMethod();
  if (outputMethod === OUTPUT_METHOD_OUTPUT_CHANNEL) {
    displayResponseInOutputChannel(choices);
  } else if (outputMethod === OUTPUT_METHOD_TAB) {
    await displayResponseInTab(choices);
  } else if (outputMethod === OUTPUT_METHOD_TAB_PREVIEW) {
    await displayResponseInTabPreview(choices);
  } else {
    vscode.window.showErrorMessage(
      "Invalid output method set in configuration!"
    );
    throw new Error("Invalid outputMethod");
  }
}
