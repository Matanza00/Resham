#!/bin/sh
set -e
cd "$(dirname "$0")"
npx esbuild src/main.js --bundle --minify --format=esm --target=es2020 --outfile=dist/app.js --log-level=warning
cp src/index.html dist/index.html
ls -la dist dist/img | head -20
