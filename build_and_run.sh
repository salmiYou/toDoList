#!/bin/bash

echo "building backend container"
cd back
docker build .  -t todolist-backend:untagged
cd ..
echo "building frontend container"
cd front
docker build . -t todolist-frontend:untagged


echo "starting backend container"
docker run -d -p "3000:3000" todolist-backend:untagged

echo "starting frontend container"
docker run -d -p "80:80" todolist-frontend:untagged
