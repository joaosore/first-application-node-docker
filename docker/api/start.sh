#!/usr/bin/env bash

echo 'Update Database'
cd /app/www/api/ && npm run migrate

echo 'Build Project'
cd /app/www/api/ && npm run build


echo 'Starting up API...'
if [ "$NODE_ENV" == "development" ]
then
  echo "Development MODE"
  pm2 start /app/docker/api/pm2/pm2-development.json
else
  echo "Production MODE"
  pm2 start /app/docker/api/pm2/pm2-production.json
fi

# Keep Container Running
tail -f /dev/null
