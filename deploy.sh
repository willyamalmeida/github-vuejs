#!/bin/bash
set -e

npm run build

SOURCE_BRANCH="master"

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
  echo "Skipping deploy."
  exit 0
fi

cd dist
git init

git config user.name "${GH_REF}"
git config user.email "willyamalmeida@hotmail.com"

git add .
git commit -m "Deploy to GitHub Pages"

git push --force --quiet "https://${GH_TOKEN}@${GH_REF} " master:gh-pages > /dev/null 2>&1

