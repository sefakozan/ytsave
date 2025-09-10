
<p align="right">
<a href="https://www.npmjs.com/package/ytsave"><img src="https://nodei.co/npm/ytsave.svg?data=d"></a>
</p>

# ytsave

A simple and powerful Node.js tool to download YouTube **videos** and **playlists** with ease.  
Works both as a **CLI tool** and as a **library**. 🎥🎶  

&nbsp;

## ✨ Features
- 📥 Download single YouTube videos  
- 🎵 Download entire playlists in one command  
- 🔊 Support for both **audio-only (mp3)** and **video (mp4)** formats  
- ⚡ Fast & reliable (powered by `yt-dlp`)  
- 🛠 Usable both as a **CLI** and as a **library**  

&nbsp;

## 🚀 Installation

### As CLI (global)
```bash
npm install -g ytsave
````

### As dependency (library usage)

```bash
npm install ytsave
```

&nbsp;

## 📥 Install yt-dlp & ffmpeg

ytsave relies on the external tool `yt-dlp` to download media and (optionally) `ffmpeg` to merge separate video/audio streams. Install them on your system and ensure they're available on your PATH before running the CLI.

Windows
- Using pip (if Python is installed):
  ```powershell
  pip install yt-dlp
  ```
- Using Scoop:
  ```powershell
  scoop install yt-dlp
  ```
- Using Chocolatey:
  ```powershell
  choco install yt-dlp
  ```
- Or download the `yt-dlp.exe` from the releases page and add it to your PATH:
  https://github.com/yt-dlp/yt-dlp/releases

macOS
- Using Homebrew:
  ```bash
  brew install yt-dlp
  ```

Linux
- Using pip:
  ```bash
  pip3 install --user yt-dlp
  ```
- Using your distro package manager (if available) or download the binary from the releases page.

ffmpeg (optional but recommended)
- ffmpeg is required if yt-dlp needs to merge separate video and audio streams (this happens when selecting the best video and best audio). Install ffmpeg via your platform package manager:
  - Windows (scoop/choco) — `scoop install ffmpeg` or `choco install ffmpeg`
  - macOS (Homebrew) — `brew install ffmpeg`
  - Linux (apt/yum/pacman) — `sudo apt install ffmpeg` or equivalent

After installing, verify both commands are available:

```bash
yt-dlp --version
ffmpeg -version
```
&nbsp;

## 💻 CLI Usage

### Download a single video or playlist

#### No Parameters (default)
```bash
ytsave https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

```bash
ytsave https://www.youtube.com/playlist?list=PL123456789
```

#### With Parameters
```bash
ytsave https://www.youtube.com/watch?v=dQw4w9WgXcQ --format mp4 --output ./videos 
```

```bash
ytsave https://www.youtube.com/playlist?list=PL123456789 --format mp3 --output ./music
```

### CLI Options

* `--format <mp4|mp3>` → Output format (default: `mp4`)
* `--output <path>` → Output directory (default: current folder)

&nbsp;

## 📖 Library Usage

### Import in ESM

```js
import { downloadVideo, downloadPlaylist } from "ytsave";
```

### Download a single video

```js
await downloadVideo("https://www.youtube.com/watch?v=dQw4w9WgXcQ", {
  format: "mp4",
  output: "./videos",
});
```

### Download a playlist

```js
await downloadPlaylist("https://www.youtube.com/playlist?list=PL123456789", {
  format: "mp3",
  output: "./music",
});
```

&nbsp;

## ⚙️ API

### `downloadVideo(url, options)`

Downloads a single YouTube video.

* `url` *(string)*: YouTube video URL
* `options.format` *(string)*: `"mp4"` or `"mp3"`
* `options.output` *(string)*: Output directory path

### `downloadPlaylist(url, options)`

Downloads an entire YouTube playlist.

* `url` *(string)*: YouTube playlist URL
* `options.format` *(string)*: `"mp4"` or `"mp3"`
* `options.output` *(string)*: Output directory path

&nbsp;

## ⚠️ Disclaimer

This project is for **educational purposes only**.
Downloading videos or music from YouTube may violate **YouTube’s Terms of Service**.
Use responsibly.

