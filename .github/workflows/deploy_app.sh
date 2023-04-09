#!/bin/bash
set -e

echo "Deploying application ..."

echo "Pulling code from GitHub"
git pull origin master

echo "Building the application 🛠️"
npm install
npm run build

echo "Running application"
pm2 stop ../../ecosystem.config.js
pm2 start ../../ecosystem.config.js

echo "🚀 Application deployed!"