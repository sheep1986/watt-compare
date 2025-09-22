# Logo Implementation Guide for Watt Compare

## Logo Files Needed

Please save your logo image with the following names in the `/public` directory:

1. **Main Logo**: 
   - Save as: `/public/watt-compare-logo.png`
   - This is used in the Navigation header
   - Recommended size: Height of 48-60px (width auto)

2. **Favicon**:
   - Save as: `/public/favicon.png` 
   - Size: 32x32px or 64x64px
   - Also save as: `/public/favicon.ico` for broader compatibility

3. **App Icons**:
   - Save as: `/public/logo192.png` (192x192px)
   - Save as: `/public/logo512.png` (512x512px)
   - Used for PWA and mobile devices

4. **Open Graph Image**:
   - Save as: `/public/og-image.jpg`
   - Size: 1200x630px
   - Used for social media sharing

## Logo Usage in Components

### Navigation (Header)
- Located in: `src/components/Navigation.jsx`
- Uses: `/watt-compare-logo.png`
- Display: Original colors at height of 48px

### Footer
- Located in: `src/components/Footer.jsx`
- Uses: `/watt-compare-logo.png`
- Display: White version (using CSS filters) at height of 40px
- CSS filter applied: `brightness-0 invert` to make it white on dark background

## Color Alignment

Based on your logo design, ensure these colors in `tailwind.config.js` match your brand:

```javascript
colors: {
  primary: {
    // Update these to match your logo's primary blue
    600: '#0967d2',  // Main blue
    700: '#0552b5',  // Darker blue
  },
  accent: {
    // Update these to match any accent colors in your logo
    500: '#f59e0b',  // Orange/amber accent
  }
}
```

## Implementation Steps

1. Download your logo from: https://i.ibb.co/hY9Lv4m/watt-compare-logo-final.png

2. Save it as the files mentioned above in the `/public` directory

3. If your logo has specific brand colors different from the current blue (#0967d2), update the Tailwind config

4. Test the logo appears correctly in:
   - Navigation bar (should be clear and readable)
   - Footer (should be visible on dark background)
   - Browser tab (favicon)
   - Mobile devices (PWA icons)

## Logo Optimization

For best performance:
- Use PNG format for logos with transparency
- Optimize file size (use tools like TinyPNG)
- Ensure logo is crisp on retina displays (2x resolution)
- Keep main logo file under 50KB

## Accessibility

- Ensure alt text is descriptive: "Watt Compare - Smart Energy Comparison"
- Logo should have sufficient contrast against backgrounds
- Consider providing a dark/light version if needed