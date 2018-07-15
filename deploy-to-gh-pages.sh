#!/bin/sh

pushd website
yarn build
popd
git subtree push --prefix website/build/tamods-site origin gh-pages