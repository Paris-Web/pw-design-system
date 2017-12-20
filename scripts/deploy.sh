#!/bin/bash

if [ "$CIRCLE_CI" ]; then
  BRANCH_SLUG=`$CIRCLE_BRANCH | tr "/" "-"`
else
  BRANCH_SLUG=`git rev-parse --abbrev-ref HEAD | tr "/" "-"`
fi

echo "Deploying to remote folder '$BRANCH_SLUG'"

rsync -avzL --delete --chmod=755 dist/ sites@www.paris-web.fr:/srv/sites/stage/www/design-system/$BRANCH_SLUG
