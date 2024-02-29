#!/bin/bash

# Check if URL argument is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <URL>"
    exit 1
fi

# Send request to the URL and capture the response body size
response=$(curl -s -o /dev/null -w "%{size_download}" "$1")

# Display the size of the response body
echo "$response"
