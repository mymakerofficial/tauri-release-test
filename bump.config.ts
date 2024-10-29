import { defineConfig } from 'bumpp'

export default defineConfig({
  files: ['package.json', 'package-lock.json', './src-tauri/Cargo.toml', './src-tauri/tauri.conf.json'],
  // update the lockfile because bumpp can't properly update it
  execute: 'cargo generate-lockfile --offline --manifest-path ./src-tauri/Cargo.toml',
})
