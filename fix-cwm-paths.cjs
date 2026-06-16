// fix-cwm-paths.cjs
const fs = require("fs");
const path = require("path");

const CWM_DIR = path.join(__dirname, "public", "cwm-help");

const REPLACEMENTS = [
  // Fix relative navigation links: ../cwm-help/ → /cwm-help/
  {
    old: "../cwm-help/",
    new: "/cwm-help/",
  },
  // Fix absolute WordPress image URLs
  {
    old: "https://dakshcwm.com/wp-content/uploads/",
    new: "/wp-content/uploads/",
  },
];

let totalFiles = 0;
let totalReplaced = 0;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  for (const { old, new: newPath } of REPLACEMENTS) {
    if (content.includes(old)) {
      content = content.replaceAll(old, newPath);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    totalReplaced++;
    console.log(`✓ Fixed: ${path.relative(__dirname, filePath)}`);
  }

  totalFiles++;
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDir(fullPath);
    else if (entry.name.endsWith(".html")) processFile(fullPath);
  }
}

console.log(`Scanning: ${CWM_DIR}\n`);
walkDir(CWM_DIR);
console.log(`\nDone. ${totalReplaced}/${totalFiles} files updated.`);
