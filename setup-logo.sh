#!/bin/bash

echo "Setting up Watt Compare logo..."

# Create public directory if it doesn't exist
mkdir -p public

# Download the logo from the provided URL
echo "Downloading logo..."
curl -o public/watt-compare-logo.png "https://i.ibb.co/hY9Lv4m/watt-compare-logo-final.png"

# Create copies for different uses
echo "Creating logo variants..."
cp public/watt-compare-logo.png public/favicon.png
cp public/watt-compare-logo.png public/logo192.png
cp public/watt-compare-logo.png public/logo512.png
cp public/watt-compare-logo.png public/apple-touch-icon.png

echo "Logo setup complete!"
echo ""
echo "Note: For best results, you should:"
echo "1. Resize favicon.png to 32x32 or 64x64 pixels"
echo "2. Resize logo192.png to 192x192 pixels"
echo "3. Resize logo512.png to 512x512 pixels"
echo "4. Create an og-image.jpg at 1200x630 pixels for social sharing"
echo ""
echo "You can use an image editor or online tools to resize these images."