#!/bin/bash

read -p 'Commit name: ' commit
NOW=$(date +"%Y-%m-%d %H:%M")

git add .
git commit -m "$commit"
git subtree push --prefix dist origin master
