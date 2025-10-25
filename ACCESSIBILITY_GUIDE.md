# Portfolio Accessibility User Guide

A quick reference for keyboard navigation and accessibility features on this portfolio site.

---

## ⌨️ Keyboard Shortcuts

### Global Navigation

| Key | Action |
|-----|--------|
| **Tab** | Move to next interactive element |
| **Shift + Tab** | Move to previous interactive element |
| **Enter** | Activate links and buttons |
| **Space** | Activate buttons |

### Page Navigation

| Key | Action |
|-----|--------|
| **Tab** (on page load) | Show "Skip to main content" link |
| **Enter** (on skip link) | Jump directly to main content |

### Carousel Navigation

When focused on the carousel:

| Key | Action |
|-----|--------|
| **→ (Right Arrow)** | Next image |
| **← (Left Arrow)** | Previous image |
| **Home** | First image |
| **End** | Last image |
| **Tab** | Navigate to carousel controls |

### Tab Component (Workstreams)

When focused on a tab:

| Key | Action |
|-----|--------|
| **→ (Right Arrow)** | Next tab |
| **← (Left Arrow)** | Previous tab |
| **Home** | First tab |
| **End** | Last tab |
| **Tab** | Exit tabs and move to content |

---

## 🎧 Screen Reader Features

### Navigation Landmarks

The portfolio uses semantic landmarks for easy navigation:

- **Navigation**: Main navigation menu
- **Main**: Primary page content
- **Complementary**: Sidebar content (if present)
- **Contentinfo**: Footer information

**Quick Jump**: Use your screen reader's landmark navigation:
- VoiceOver: **VO + U** → Landmarks
- NVDA: **D** key to jump between landmarks

### Heading Structure

Clear heading hierarchy for easy scanning:

```
H1: Page title (e.g., "Daiana Goțiu")
  H2: Section titles (e.g., "About", "Featured work")
    H3: Card titles (e.g., "5+ years designing for humans")
      H4: Sub-sections (e.g., "Global Search Redesign")
```

**Quick Jump**: Navigate by headings:
- VoiceOver: **VO + Cmd + H** → Headings menu
- NVDA: **H** key to jump between headings

### Dynamic Content Announcements

The carousel announces changes:
- "Image 1 of 8" (when first viewed)
- "Image 2 of 8" (when navigating right)
- Announcements are polite (won't interrupt current reading)

---

## 🎨 Visual Accessibility Features

### Focus Indicators

**What you'll see**: Teal outline around focused elements
- **Color**: Bright teal (#A8CFC7)
- **Width**: 3 pixels
- **Offset**: 2 pixels from element

**Where**: On all interactive elements
- Links
- Buttons  
- Navigation items
- Carousel controls
- Tab buttons
- Form inputs

### High Contrast Mode

The portfolio works well with system high contrast modes:
- **Windows**: Settings → Ease of Access → High contrast
- **Mac**: System Preferences → Accessibility → Display → Increase contrast

### Color Contrast

All text meets WCAG AA standards:
- **Primary text** on light backgrounds: 11.3:1 ratio (AAA)
- **Secondary text** on light backgrounds: 6.8:1 ratio (AA)
- **Button text** on dark buttons: 11.3:1 ratio (AAA)

---

## 🎭 Motion & Animation

### Reduced Motion Support

If you prefer reduced motion:

**Enable reduced motion**:
- **Mac**: System Preferences → Accessibility → Display → Reduce motion
- **Windows**: Settings → Ease of Access → Display → Show animations → Off
- **iOS**: Settings → Accessibility → Motion → Reduce Motion
- **Android**: Settings → Accessibility → Remove animations

**What changes**:
- ✅ All animations are disabled
- ✅ Smooth scrolling is disabled
- ✅ Transitions are instant
- ✅ Page remains fully functional

---

## 📱 Mobile Accessibility

### Touch Targets

All interactive elements meet minimum size:
- **Buttons**: 44x44 pixels minimum
- **Links**: Adequate padding for easy tapping
- **Spacing**: 8px minimum between tap targets

### Mobile Gestures

**Experience Cards**: Tap to expand and see full details
**Carousel**: Works with both swipe and button controls

---

## 🔍 Zoom & Magnification

The portfolio is fully functional when zoomed:

**Zoom to 200%**:
1. **Chrome/Edge**: Ctrl/Cmd + Plus
2. **Firefox**: Ctrl/Cmd + Plus
3. **Safari**: Cmd + Plus

**Features at 200% zoom**:
- ✅ No horizontal scrolling
- ✅ All content remains visible
- ✅ Text reflows naturally
- ✅ Interactive elements remain clickable

---

## 🛠️ Browser Compatibility

### Supported Browsers

Tested and fully accessible in:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Supported Screen Readers

- ✅ **NVDA** (Windows) - Free from nvaccess.org
- ✅ **JAWS** (Windows) - Commercial
- ✅ **VoiceOver** (Mac/iOS) - Built-in
- ✅ **TalkBack** (Android) - Built-in
- ✅ **Narrator** (Windows) - Built-in

---

## 💡 Tips for Best Experience

### For Keyboard Users
1. Press **Tab** first to see the skip link
2. Use **arrow keys** in carousels and tabs
3. Use **Enter** to activate links
4. Use **Space** to activate buttons

### For Screen Reader Users
1. Navigate by **landmarks** for quick access
2. Use **heading navigation** to scan content
3. **Forms mode** for interactive components
4. Listen for **live region announcements** in carousels

### For Low Vision Users
1. Enable **high contrast mode** in your OS
2. **Zoom to 200%** for larger text
3. Use **focus indicators** to track position
4. **Browser reader mode** works well for articles

### For Users with Motion Sensitivity
1. Enable **reduced motion** in your OS settings
2. **Animations will stop** automatically
3. **Page remains functional** without motion
4. **Smooth scrolling disabled** for instant jumps

---

## 🆘 Accessibility Issues?

If you encounter any accessibility barriers:

### Report an Issue
1. Describe the problem
2. Include your browser and assistive technology
3. Include the page URL
4. Include steps to reproduce

### Temporary Workarounds
- **Stuck?** Refresh the page
- **Can't see focus?** Try Tab key multiple times
- **Screen reader not announcing?** Try Forms/Focus mode
- **Animation issues?** Enable reduced motion in OS settings

---

## 📚 Learn More

### Accessibility Resources
- [WebAIM](https://webaim.org/) - Web accessibility guidelines
- [A11y Project](https://www.a11yproject.com/) - Community-driven accessibility resources
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG22/quickref/) - Official WCAG reference

### Assistive Technology Guides
- [NVDA User Guide](https://www.nvaccess.org/documentation/)
- [VoiceOver User Guide](https://support.apple.com/guide/voiceover/welcome/mac)
- [Keyboard Navigation Basics](https://webaim.org/articles/keyboard/)

---

## ✅ Accessibility Statement

This portfolio is committed to providing an accessible experience for all users and strives to meet WCAG 2.2 Level AA standards.

**Our commitment**:
- ✅ Semantic HTML structure
- ✅ Full keyboard navigation support
- ✅ Screen reader compatibility
- ✅ High color contrast ratios
- ✅ Reduced motion support
- ✅ Responsive and mobile-friendly
- ✅ No time limits on interactions
- ✅ Clear focus indicators
- ✅ Alternative text for images
- ✅ Accessible interactive components

**Continuous improvement**: We regularly test and improve accessibility features based on user feedback and evolving standards.

---

**Last updated**: October 2024  
**Standards compliance**: WCAG 2.2 Level AA
