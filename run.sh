#!/bin/bash

# FreshPrep - Local Development Server
# Run this script to start a local web server

PORT=8000

echo ""
echo "  🥗 FreshPrep - Meal Prep Service"
echo "  ================================"
echo ""
echo "  Starting local development server..."
echo ""
echo "  Open your browser and go to:"
echo "  👉 http://localhost:$PORT"
echo ""
echo "  Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    python -m http.server $PORT
else
    echo "Error: Python is not installed."
    echo "Please install Python 3 or open index.html directly in your browser."
    exit 1
fi
