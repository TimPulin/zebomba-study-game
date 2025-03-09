#!/bin/bash
cd /home/gen/Backstage/TestsTasks/zebomba/zebomba/
rm -rf ./dist
npm run build
cd ./dist
git init
git remote add origin git@github.com:TimPulin/zebomba-study-game.git
git checkout -b build
git add .
git commit -m 'build'
git push origin HEAD
