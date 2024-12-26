#!/usr/bin/env sh

cd ./wasm/
wasm-pack build --target bundler
cd ..
cd ./frontend/
npm run build
cd ..
