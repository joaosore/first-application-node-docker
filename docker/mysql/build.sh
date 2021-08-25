#!/usr/bin/env bash

# Remove Old Image
docker rm -f checkout_mysql

# No Cache Build
docker build --no-cache -t checkout_mysql -f docker/mysql/Dockerfile .

# Cache Build
#docker build -t cursoaws_mysql -f docker/mysql/Dockerfile .
