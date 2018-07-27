#!/bin/bash

set -ex
cp ~/.npmrc.publish .npmrc

if ! [[ ${TIMESTAMP} ]]; then
  echo "fatal: TIMESTAMP is not set, cannot publish."
  exit 0
fi

PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
VERSION_PATTERN="^[0-9]+\.[0-9]+\.[0-9]+$"
if ! [[ ${PACKAGE_VERSION} =~ $VERSION_PATTERN ]]; then
  echo "fatal: PACKAGE_VERSION has a wrong format, cannot publish."
  exit 0
fi



npm --no-git-tag-version version 1.0.0-${TIMESTAMP}
npm publish --verbose
