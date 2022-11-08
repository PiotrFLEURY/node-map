#!/bin/bash

EXISING_CONTAINER=$(docker ps -a | grep "postgres" | awk '{print $1}')
if [ -n "$EXISING_CONTAINER" ]; then
    docker stop $EXISING_CONTAINER
    docker rm $EXISING_CONTAINER
fi
docker run -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e PGDATABASE=postgres -d postgres:12.3