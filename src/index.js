import { spawn } from "child_process";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Run yt-dlp with given args and stream output.
 * Resolves when process exits with code 0, rejects otherwise.
 * @param {string[]} args
 * @param {{cwd?: string}} options
 */
function runYtDlp(args, options = {}) {
  return new Promise((resolve, reject) => {
    const cmd = "yt-dlp";
    const child = spawn(cmd, args, { stdio: "inherit", shell: false, cwd: options.cwd });

    child.on("error", (err) => {
      reject(new Error(`Failed to start yt-dlp: ${err.message}`));
    });

    child.on("exit", (code, signal) => {
      if (code === 0) resolve();
      else reject(new Error(`yt-dlp exited with code ${code}${signal ? ` signal ${signal}` : ""}`));
    });
  });
}

/**
 * Download a single YouTube video.
 * @param {string} url
 * @param {{format?: string, output?: string}} options
 */
export async function downloadVideo(url, options = {}) {
  if (!url || typeof url !== "string") throw new TypeError("url must be a string");
  const format = options.format === "mp3" ? "mp3" : "mp4";
  const output = options.output || process.cwd();

  const args = [
    "-o",
    `${output}/%(title)s.%(ext)s`,
  ];

  if (format === "mp3") {
    args.push("-x", "--audio-format", "mp3");
  } else {
    args.push("-f", "mp4");
  }

  args.push(url);

  return runYtDlp(args, { cwd: __dirname });
}

/**
 * Download a playlist.
 * @param {string} url
 * @param {{format?: string, output?: string}} options
 */
export async function downloadPlaylist(url, options = {}) {
  if (!url || typeof url !== "string") throw new TypeError("url must be a string");
  const format = options.format === "mp3" ? "mp3" : "mp4";
  const output = options.output || process.cwd();

  const args = [
    "-o",
    `${output}/%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s`,
  ];

  if (format === "mp3") {
    args.push("-x", "--audio-format", "mp3");
  } else {
    args.push("-f", "mp4");
  }

  args.push(url);

  return runYtDlp(args, { cwd: __dirname });
}
