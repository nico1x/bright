#!/bin/sh

pip-compile ./requirements/requirements.in

pip-sync ./requirements/requirements.txt

# Sync python-site-packages to host
# Used for vscode
# rsync -a --delete /usr/local/lib/python3.9/site-packages/ /python-site-packages/

python manage.py runserver 0.0.0.0:$PORT