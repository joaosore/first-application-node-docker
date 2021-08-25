#!/usr/bin/env bash

# Remove Old Image
docker rm -f api

# No Cache Build
docker build --no-cache -t api -f docker/api/Dockerfile .

# Cache Build
#docker build -t api -f docker/api/Dockerfile .
