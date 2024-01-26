#!/usr/bin/env bash

# Iterates over all modules bundled in the dist/ and publish them
for dir in ./dist/*/
do
    dir=${dir%*/}
    npm publish --access=public --tag=v12-lts dist/${dir##*/}/
done
