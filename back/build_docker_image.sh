#!/bin/bash
echo "Building docker image"
sudo docker build . -t todo-youba:untagged
if [ $? -ne 0 ]; then
   echo "image build failed"
   exit 1
fi

echo "running image"
sudo docker run -p 3000:3000 -d todo-youba:untagged 

echo "point your browser to http://localhost:3000"




