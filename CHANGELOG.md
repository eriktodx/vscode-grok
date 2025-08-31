# Change Log

All notable changes to the "vscode-grok" extension will be documented in this file

## Version 1.1.1 (Aug 31, 2025)

### Changed

- Updated available Grok models

## Version 1.1.0 (Aug 31, 2025)

### Changed

- Updated available Grok models
- Updated README

## Version 1.0.0 (May 25, 2025)

### Changed

- Lowered VSCode engine requirement to 1.70.0
- Removed workspace requirement from:
  - Ask Grok: Current Tab
  - Ask Grok: Function Under Cursor
  - Ask Grok: Selected Text
- Improved/simplified README

## Version 0.0.7 (April 16, 2025)

### Added

- Add model selection guide and supported Grok models list to README

## Version 0.0.6 (March 01, 2025)

### Changed

- Updated README.md and dumping version for post verification of VSCode Marketplace publisher id

## Version 0.0.5 (March 01, 2025)

### Added

- New configuration options in `package.json`:
  - `vscodeGrok.outputMethod`: Allows users to choose where Grok responses are displayed ('tab' or 'outputChannel'). Defaults to 'tab'.
  - `vscodeGrok.showPreview`: Controls when a preview of data sent to Grok API is shown ('always', 'workspace-only', 'never'). Defaults to 'workspace-only'.
- New command: `vscode-grok.askGrokSelection`
  - Allows users to ask Grok questions about selected text in the active editor tab.
- New files:
  - `src/config.ts`: Configuration management for API key, model, output method, and preview settings.
  - `src/const.ts`: Centralized constants for API URL, configuration keys, and preview settings.
  - `src/context.ts`: Context preparation logic for workspace, API key, model, and question.
  - `src/display.ts`: Handles displaying Grok responses in either tabs or output channel.
  - `src/editor.ts`: File and editor utility functions (file reading, active tab/function/selection handling).
  - `src/exclude-list.ts`: Defines files to exclude (e.g., `package-lock.json`).
  - `src/git.ts`: Git utility functions for file listing and diff operations.
  - `src/message.ts`: Constructs prompts for different query types (workspace, tab, function, selection).
  - `src/preview.ts`: Implements data preview functionality before sending to Grok API.
  - `src/types.ts`: Type definitions for message types, Grok choices, and context.
  - `src/ui.ts`: UI utility functions for prompting and progress display.
  - `src/valid-extensions.ts`: Defines valid file extensions for processing (replaces `coding-extensions.ts`).

### Changed

- Refactored `src/extension.ts`:
  - Simplified command handling using new modular functions.
  - Integrated preview and output method features.
  - Improved error handling and progress reporting.
- Updated `src/api.ts`:
  - API URL moved to `const.ts` and referenced as `API_URL`.
- Renamed and improved file handling:
  - Replaced `src/file.ts` with `src/editor.ts` and `src/git.ts` for better separation of concerns.
  - Moved extension list to `src/valid-extensions.ts` from `src/coding-extensions.ts`.

### Removed

- Deleted `src/coding-extensions.ts`: Replaced by `src/valid-extensions.ts`.
- Removed redundant code from `src/extension.ts` that was moved to new modules.

### Fixed

- Improved error messaging and validation throughout the extension.
- Enhanced file filtering logic with explicit exclude list and valid extensions.

### Notes

- The extension now supports more flexible response display options and preview functionality for better user control.
- Activation events in `package.json` updated to include the new `askGrokSelection` command.

## [0.0.4] - 2025-02-26

### Added

- Command descriptions
- xAI model can now be changed via Settings

### Changed

- Improved README
- Fixed activation events

## [0.0.3] - 2025-02-25

### Added

- Ask Grok a question about function under cursor
- GIF Demo

### Fixed

- VSCode extension context subscription

### Changed

- Improved README

## [0.0.2] - 2025-02-25

### Added

- Ask Grok a question about active tab
- Extension icon

### Changed

- Moved xAPI Key to VSCode settings

## [0.0.1] - 2025-02-24

### Added

- Initial release with core functionality
