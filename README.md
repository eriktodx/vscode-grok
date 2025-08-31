# Simply Grok for VSCode

[![Version](https://img.shields.io/badge/Version-1.1.0-green)](https://github.com/eriktodx/vscode-grok/releases)
[![GitHub](https://img.shields.io/badge/GitHub-vscode--grok-blue)](https://github.com/eriktodx/vscode-grok)
[![VSCode Extension](https://img.shields.io/badge/VSCode_Extension-Simply_Grok_for_VSCode-red)](https://marketplace.visualstudio.com/items?itemName=ErikKralj.vscode-grok)
[![Open VSX Registry](https://img.shields.io/badge/Open_VSX-Simply_Grok_for_VSCode-purple)](https://open-vsx.org/extension/ErikKralj/vscode-grok)

A Visual Studio Code extension that integrates with the xAI API to allow developers to ask Grok questions about their codebase directly within the editor. Get insights on your entire workspace, specific files, functions, or selected code snippets with ease.

## Demo

![Demo GIF](resources/demo1.gif)

## Features

- **Ask Grok: Workspace** - Query Grok about your entire project to get a comprehensive overview or solve cross-file issues.
- **Ask Grok: Current Tab** - Focus on the active file and ask questions specific to its content.
- **Ask Grok: Function Under Cursor** - Get explanations or suggestions for the function or method at your cursor position.
- **Ask Grok: Selected Text** - Highlight code and ask Grok for insights or assistance on just that selection.
- **Customizable Output** - Choose to display Grok's responses in a new editor tab or the Output panel.
- **Data Preview** - Review the data being sent to the Grok API before submission, with configurable settings for when previews appear.
- **Model Selection** - Select from a variety of Grok models (e.g., `grok-2`, `grok-3-fast`) to suit your needs.

## Build, package and test

1. Install global npm package `@vscode/vsce` with: `npm install -g @vscode/vsce`
2. Build vsix extension with: `vsce package`
3. Install extension by right clicking on the generated .vsix file and selecting `Install Extension VSIX`

## Installation

1. Open Visual Studio Code.
2. Navigate to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS).
3. Search for **Simply Grok for VSCode**.
4. Click **Install** to add the extension.

## Usage

1. Open a project or file in VSCode.
2. Access the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
3. Search for and select one of the "Ask Grok" commands:
   - `Ask Grok: Workspace`
   - `Ask Grok: Current Tab`
   - `Ask Grok: Function Under Cursor`
   - `Ask Grok: Selected Text`
4. Enter your xAI API key if prompted (stored securely in settings).
5. Type your question for Grok and submit.
6. View the response in a new tab or the Output panel, based on your settings.

### Configuration

Customize the extension via the VSCode Settings UI or `settings.json`:

- **xAI API Key**: Store your API key securely (`vscodeGrok.apiKey`).
- **Model**: Choose the Grok model to use (`vscodeGrok.model`), with options like `grok-2` (default), `grok-3-fast`, and more.
- **Output Method**: Decide where responses appear (`vscodeGrok.outputMethod`): `tab` (default) or `outputChannel`.
- **Show Preview**: Control when to preview data sent to Grok (`vscodeGrok.showPreview`): `always`, `workspace-only` (default), or `never`.

### Available Models

- **Grok 4**
  - **API Model Name**: `grok-4`
  - **Description**: A flagship model with advanced reasoning and multimodal capabilities (text and image input). Supports a 256,000-token context window. Ideal for complex tasks like data extraction, coding, and text summarization. Includes native tool use and real-time search integration.
- **Grok 4 Heavy**
  - **API Model Name**: `grok-4-heavy`
  - **Description**: A more powerful version of Grok 4, designed for challenging tasks. Accessible through the SuperGrok Heavy tier.
- **Grok 3**
  - **API Model Name**: `grok-3`
  - **Description**: A high-performance model with a 128,000-token context window. Focused on text-based interactions, suitable for enterprise use cases like data extraction and coding. Available in beta.
- **Grok 3 Mini**
  - **API Model Name**: `grok-3-mini`
  - **Description**: A lightweight model with native reasoning. Optimized for logic-based tasks that don’t require deep domain knowledge. Available in beta.
- **Grok 3 Fast Beta**
  - **API Model Name**: `grok-3-fast-beta`
  - **Description**: A faster variant of Grok 3, offering identical response quality but served on optimized infrastructure for quicker response times.
- **Grok 3 Mini Fast Beta**
  - **API Model Name**: `grok-3-mini-fast-beta`
  - **Description**: A faster variant of Grok 3 Mini, designed for speed while maintaining response quality.
- **Grok 2 Image**
  - **API Model Name**: `grok-2-image-1212`
  - **Description**: A model for text-to-image generation, suitable for visual storytelling, product mockups, or illustrated answers.
- **Grok-beta**
  - **API Model Name**: `grok-beta`
  - **Description**: A preview model with a 128,000-token context window. Supports function calling and system prompts. Available in a multimodal version that can ingest images.

For more information, see the [xAI Models Documentation](https://docs.x.ai/docs/models).

## Requirements

- An active xAI API key (obtainable from [xAI](https://x.ai/api)).
- VSCode version 1.70.0 or higher.

## Disclaimer

This extension uses the xAI API, which may incur costs based on your usage and subscription plan with xAI. You are responsible for any associated fees. Please review [xAI's pricing](https://docs.x.ai/docs/models) before using this extension. Simply Grok for VSCode is an independent project and is not affiliated with or endorsed by xAI.

## Contributing

We welcome contributions to improve Simply Grok for VSCode! Here's how you can help:

- **Report Issues**: Submit bugs or feature requests on the [GitHub Issues page](https://github.com/eriktodx/vscode-grok/issues).
- **Submit Pull Requests**: Fork the repository, make changes, and submit a PR at [GitHub Pull Requests](https://github.com/eriktodx/vscode-grok/pulls).
- **Share Feedback**: Let us know how we can make this extension better.

## License

This extension is licensed under the [MIT License](LICENSE). See the license file for more details.

## Links

- **GitHub Repository**: [https://github.com/eriktodx/vscode-grok](https://github.com/eriktodx/vscode-grok)
- **VSCode Marketplace**: [Simply Grok for VSCode](https://marketplace.visualstudio.com/items?itemName=ErikKralj.vscode-grok)
- **Open VSX Registry**: [Simply Grok for VSCode](https://open-vsx.org/extension/ErikKralj/vscode-grok)

---

Enhance your coding experience with Grok's AI assistance right in VSCode!