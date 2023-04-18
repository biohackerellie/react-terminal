#!/bin/bash

#we make 2 variables at the start, this allows this script to be easier to copy and paste for different containers with less retyping
CONTAINER_NAME=terminal
IMAGE_NAME=terminal

# Change to the directory containing the Git repository
cd apps/portfolio-site

# Check for updates
git fetch

# Compare local and remote branches to check for changes
if ! git diff --quiet HEAD @{u}; then
    # Pull changes if there are any
    git pull && \

    # Rebuild the image from Dockerfile
    docker build -t $IMAGE_NAME:latest . && \
    # Stop docker container if its running
    if docker container inspect $CONTAINER_NAME >/dev/null 2>&1; then
        echo "$CONTAINER_NAME is running, shutting down" && \
        docker container stop $CONTAINER_NAME
    fi
    # Deletes old container
    docker system prune -f && \
    # Restart container with new image
    docker run --rm --name $CONTAINER_NAME -p 4020:4020 -d $IMAGE_NAME:latest

else
    echo "No changes. Exiting."
fi