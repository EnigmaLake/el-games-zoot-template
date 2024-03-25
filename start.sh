#!/bin/bash

# Deploy the Postgres DB
docker-compose up -d --force-recreate --renew-anon-volumes --no-deps --build db

# Migrate the DB
docker-compose up --force-recreate --build db-migration
