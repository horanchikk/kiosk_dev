#!/usr/bin/env sh

set -e
npm run build
cd dist
echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'

git push -f git@github.com:<horanchikk>/<kiosk_dev>.git main:gh-pages

cd -