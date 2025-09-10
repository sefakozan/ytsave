
# ytsave

A simple and powerful Node.js tool to download YouTube **videos** and **playlists** with ease.  
Works both as a **CLI tool** and as a **library**. 🎥🎶  

---

## ✨ Features
- 📥 Download single YouTube videos  
- 🎵 Download entire playlists in one command  
- 🔊 Support for both **audio-only (mp3)** and **video (mp4)** formats  
- ⚡ Fast & reliable (powered by `yt-dlp`)  
- 🛠 Usable both as a **CLI** and as a **library**  

---

## 🚀 Installation

### As CLI (global)
```bash
npm install -g ytsave
````

### As dependency (library usage)

```bash
npm install ytsave
```

---

## 💻 CLI Usage

### Download a single video

```bash
ytsave "https://www.youtube.com/watch?v=dQw4w9WgXcQ" --format mp4 --output ./videos
```

### Download a playlist

```bash
ytsave "https://www.youtube.com/playlist?list=PL123456789" --format mp3 --output ./music
```

### CLI Options

* `--format <mp4|mp3>` → Output format (default: `mp4`)
* `--output <path>` → Output directory (default: current folder)

---

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

---

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

---

## ⚠️ Disclaimer

This project is for **educational purposes only**.
Downloading videos or music from YouTube may violate **YouTube’s Terms of Service**.
Use responsibly.

---

## 📜 License

MIT © 2025 \[Your Name]

```

Bunu direkt `README.md` dosyası olarak kaydedebilirsin ✅  

👉 İstersen ben sana şimdi bununla uyumlu **`bin/ytsave.js` CLI dosyası** ve **`src/index.js` library dosyası** da yazayım mı?
```
