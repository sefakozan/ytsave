#!/usr/bin/env node
import { downloadVideo, downloadPlaylist } from "../src/index.js";

function printHelp() {
  console.log(`ytsave <url> [--format mp4|mp3] [--output <path>]\n\nOptions:\n  --format <mp4|mp3>   Output format (default: mp4)\n  --output <path>      Output directory (default: current folder)\n  --help               Show this help message`);
}

function parseArgs(argv) {
  const args = { format: "mp4", output: undefined, url: undefined };
  const rest = argv.slice(2);
  if (!rest.length) return args;

  for (let i = 0; i < rest.length; i++) {
    const a = rest[i];
    if (a === "--help" || a === "-h") {
      args.help = true;
    } else if (a === "--format") {
      const v = rest[i + 1];
      if (!v) throw new Error("--format requires a value");
      if (v !== "mp3" && v !== "mp4") throw new Error("--format must be 'mp3' or 'mp4'");
      args.format = v;
      i++;
    } else if (a === "--output") {
      const v = rest[i + 1];
      if (!v) throw new Error("--output requires a value");
      args.output = v;
      i++;
    } else if (!a.startsWith("-") && !args.url) {
      args.url = a;
    } else {
      // ignore unknown flags for now
    }
  }

  return args;
}

(async function main() {
  try {
    const opts = parseArgs(process.argv);
    if (opts.help || !opts.url) {
      printHelp();
      process.exit(opts.help ? 0 : 1);
    }

    const url = opts.url;
    const isPlaylist = url.includes("playlist") || url.includes("list=");

    if (isPlaylist) {
      await downloadPlaylist(url, { format: opts.format, output: opts.output });
    } else {
      await downloadVideo(url, { format: opts.format, output: opts.output });
    }
  } catch (err) {
    console.error("Error:", err.message || err);
    process.exit(1);
  }
})();
