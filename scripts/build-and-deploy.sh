#!/bin/bash

if [ "$CIRCLE_CI" ]; then
  BRANCH_SLUG=`$CIRCLE_BRANCH | tr "/" "-"`
else
  BRANCH_SLUG=`git rev-parse --abbrev-ref HEAD | tr "/" "-"`
fi

echo "Building branch '$BRANCH_SLUG'"

npm i

HUGO_BASEURL=/design-system/$BRANCH_SLUG/ NODE_ENV=production npm run build

echo "Deploying to remote folder '$BRANCH_SLUG'"

rsync -avzL --delete dist/ deployer@www.paris-web.fr:/srv/sites/www/www/design-system/$BRANCH_SLUG
