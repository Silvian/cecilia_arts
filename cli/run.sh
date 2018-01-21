#!/usr/bin/env bash

sleep 2
dockerize -wait tcp://postgres:5432 -wait tcp://rabbitmq:5672 -timeout 60s python manage.py runserver 0.0.0.0:8000
