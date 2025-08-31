import * as vscode from "vscode";
import { GrokChoices } from "./types";
import {
  OUTPUT_CHANNEL_NAME,
  OUTPUT_METHOD_OUTPUT_CHANNEL,
  OUTPUT_METHOD_TAB,
} from "./const";
import { getOutputMethod } from "./config";

export async function displayResponseInTab(
  choices: GrokChoices
): Promise<void> {
  for (const [index, choice] of choices.entries()) {
    const document = await vscode.workspace.openTextDocument({
      content: `${choice.message.content}`,
      language: "markdown",
    });
    await vscode.window.showTextDocument(document, { preview: false });
  }
  vscode.window.showInformationMessage(
    "Grok finished. Responses shown in new tabs."
  );
}

export function displayResponseInOutputChannel(choices: GrokChoices): void {
  const outputChannel = vscode.window.createOutputChannel(OUTPUT_CHANNEL_NAME);
  outputChannel.clear();
  for (const [index, choice] of choices.entries()) {
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
  } else {
    vscode.window.showErrorMessage(
      "Invalid output method set in configuration!"
    );
    throw new Error("Invalid outputMethod");
  }
}
