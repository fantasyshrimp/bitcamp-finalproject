@echo off

cd app-server\src\main\webapp
npx babel --watch src --out-dir . --presets react-app/prod