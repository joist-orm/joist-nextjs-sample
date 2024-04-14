#!/bin/bash

set -e

JOIST_HOME="${JOIST_HOME:-../joist-orm}"

for package in orm codegen graphql-codegen graphql-resolver-utils utils test-utils migration-utils; do
  ./node_modules/.bin/copy-and-watch --watch "$JOIST_HOME/packages/$package/build/**/*" ./node_modules/joist-$package/build/ &
done

sleep 2147483647

