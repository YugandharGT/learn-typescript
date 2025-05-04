#!/bin/bash

# Configure Git user name and email for this project
git config --local user.name "Yugandhar GT"
git config --local user.email "tyugandhar158@outlook.com"

# Verify the configuration
echo "Project-specific Git configuration:"
git config --get user.name
git config --get user.email
