#!/bin/bash

EXISING_CONTAINER=$(docker ps -a | grep "postgres" | awk '{print $1}')
if [ -n "$EXISING_CONTAINER" ]; then
    docker stop $EXISING_CONTAINER
    docker rm $EXISING_CONTAINER
fi