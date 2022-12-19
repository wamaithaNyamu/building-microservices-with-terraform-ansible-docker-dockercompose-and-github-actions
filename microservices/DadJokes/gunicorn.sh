#!/bin/sh
#  gunicorn.sh
gunicorn -b :7000 --access-logfile - --error-logfile - wsgi:app