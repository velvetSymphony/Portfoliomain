#!/usr/bin/env bash

yellow_echo() {
    local text="$1"
    echo -e "\e[33m${text}\e[0m"
}

green_echo() {
    local text="$1"
    echo -e "\e[32m${text}\e[0m"
}

red_echo() {
    local text="$1"
    echo -e "\e[31m${text}\e[0m"
}

HOST_PORT=3000
CONTAINER_PORT=3000
IMAGE_NAME="dev"

if [[ ! -d "frontend" ]]; then 
    >&2 red_echo "Directory \"frontend\" does not exist. Exiting" 
    exit 1 
fi

>&2 yellow_echo "Building static files"
(cd frontend && hugo) || { red_echo "Error!, unable to find hugo config file. Exiting"; exit 1; }

>&2 yellow_echo "Injecting vote template html"
python3 inject.py

>&2 yellow_echo "Stopping current container"
sudo docker ps -a | awk '/nginx/ {print $NF}' | xargs -I{} -- sh -c 'sudo docker stop {}'

>&2 yellow_echo "Removing docker container"
sudo docker ps -a | awk '/nginx/ {print $NF}' | xargs -I{} -- sudo docker remove {}

>&2 yellow_echo "Removing previous docker images..."
sudo docker images | awk '/"${IMAGE_NAME}"/ {print $1}' | xargs -I{} -- sudo docker rmi {}

>&2 green_echo "Building new docker image..."
sudo docker build -t "${IMAGE_NAME}" -f dockerfiles/nginx_server .

>&2 green_echo "Running new container... in background"
sudo docker run -p $HOST_PORT:$CONTAINER_PORT "${IMAGE_NAME}" &
