@echo off

cd app-server\src\main\resources\static
npx babel --watch src --out-dir . --presets react-app/prod