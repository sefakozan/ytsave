# Copilot Instructions for ytsave

This repository is a Node.js project that provides both:
1. A **CLI tool** (`ytsave`) for downloading YouTube videos and playlists  
2. A **library API** (`import { downloadVideo, downloadPlaylist } from "ytsave"`)  

## Goals
- Write clean **ES6 JavaScript** code (no CommonJS `require`, use `import/export`).  
- Ensure both **CLI** and **library usage** work seamlessly.  
- Use `yt-dlp` (via wrapper or child process) to handle actual downloads.  

## Project Structure
- `bin/ytsave.js` → CLI entry file (with shebang `#!/usr/bin/env node`).  
- `src/index.js` → Main library exports (`downloadVideo`, `downloadPlaylist`).  
- `package.json` → Must define `"bin": { "ytsave": "./bin/ytsave.js" }`.  

## Requirements
- CLI must accept:
  - URL (video or playlist) as the first argument
  - Options:
    - `--format <mp4|mp3>`
    - `--output <path>`
- Library API:
  - `downloadVideo(url, { format, output })`
  - `downloadPlaylist(url, { format, output })`

## Style Guide
- Use async/await, not callbacks.  
- Provide meaningful error messages.  
- Keep functions small, focused, and testable.  
- Document functions with JSDoc-style comments.  

## Example Usage
**CLI**
```bash
ytsave "https://youtube.com/watch?v=abc123" --format mp4 --output ./videos
