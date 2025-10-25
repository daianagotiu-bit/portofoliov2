# Accessibility Testing Checklist

Use this checklist to verify all accessibility features are working correctly.

## ✅ Keyboard Navigation Tests

### Skip Link
- [ ] Press Tab on page load
- [ ] Skip link appears at top of page
- [ ] Press Enter on skip link
- [ ] Focus moves to main content

### Navigation
- [ ] Tab through all nav links
- [ ] Each link has visible focus indicator (teal outline)
- [ ] Enter key activates links
- [ ] Current page shows aria-current indicator

### Carousel
- [ ] Tab to carousel
- [ ] Press Right Arrow → moves to next image
- [ ] Press Left Arrow → moves to previous image
- [ ] Press Home → jumps to first image
- [ ] Press End → jumps to last image
- [ ] Focus indicator visible on active slide
- [ ] Navigation buttons disabled at start/end

### Tabs (Enterprise page)
- [ ] Tab to first tab button
- [ ] Right Arrow → moves to next tab
- [ ] Left Arrow → moves to previous tab
- [ ] Home → jumps to first tab
- [ ] End → jumps to last tab
- [ ] Content changes when tab changes
- [ ] Focus indicator visible on active tab

### General Navigation
- [ ] Tab through entire page in logical order
- [ ] Shift+Tab moves backwards
- [ ] No keyboard traps (can always Tab away)
- [ ] All buttons and links are reachable
- [ ] Enter/Space activates buttons

## 🎧 Screen Reader Tests

### Using VoiceOver (Mac)
1. Enable: Cmd + F5
2. Basic commands:
   - **VO + A**: Read everything
   - **VO + Right Arrow**: Next item
   - **VO + H**: Next heading
   - **VO + Cmd + H**: Headings list
   - **VO + U**: Rotor menu

### Using NVDA (Windows)
1. Download from nvaccess.org
2. Basic commands:
   - **Down Arrow**: Next item
   - **H**: Next heading
   - **Insert + F7**: Elements list
   - **Insert + Space**: Focus/Browse mode toggle

### Tests to Perform
- [ ] Navigate by headings (H key)
- [ ] Navigate by landmarks (D key)
- [ ] Use skip link - announces "Skip to main content"
- [ ] Carousel announces "Image X of Y" when navigating
- [ ] Tab changes announce new tab name
- [ ] All images have descriptions or are marked decorative
- [ ] Links announce their purpose
- [ ] Buttons announce their action

## 🎨 Visual Tests

### Focus Indicators
- [ ] Tab through page - teal outline appears on each element
- [ ] Outline is 3px thick and visible
- [ ] Outline has 2px offset from element
- [ ] Visible on all interactive elements:
  - [ ] Navigation links
  - [ ] Buttons
  - [ ] Work cards
  - [ ] Carousel controls
  - [ ] Tab buttons
  - [ ] Back to top button

### Color Contrast
- [ ] Check text is readable
- [ ] Use browser DevTools → Lighthouse → Accessibility
- [ ] Should score 90+ on accessibility
- [ ] No contrast warnings

### Zoom & Reflow
- [ ] Zoom to 200% (Cmd/Ctrl + Plus)
- [ ] No horizontal scrolling
- [ ] All content still readable
- [ ] No overlapping text
- [ ] Interactive elements still clickable

## 🎭 Motion Tests

### Reduced Motion
1. **Mac**: System Preferences → Accessibility → Display → Reduce motion
2. **Windows**: Settings → Ease of Access → Display → Show animations
3. **Browser DevTools**: 
   - Open DevTools
   - Cmd/Ctrl + Shift + P
   - Type "Emulate CSS prefers-reduced-motion"

### Tests
- [ ] Enable reduced motion preference
- [ ] Reload page
- [ ] Animations are disabled or very subtle
- [ ] Smooth scroll disabled
- [ ] Carousel still works but without transitions
- [ ] Page is still usable

## 🔍 Automated Tests

### Lighthouse (Chrome DevTools)
1. Open page in Chrome
2. Press F12 for DevTools
3. Go to Lighthouse tab
4. Select "Accessibility" category
5. Click "Analyze page load"

**Target Score**: 95-100

### axe DevTools Extension
1. Install from Chrome Web Store
2. Open DevTools → axe DevTools tab
3. Click "Scan ALL of my page"
4. Review any issues

**Target**: 0 violations

### WAVE Browser Extension
1. Install from wave.webaim.org
2. Click WAVE icon in browser
3. Review results in sidebar

**Target**: 0 errors, minimal alerts

## 📱 Mobile Tests

### Touch Targets
- [ ] All buttons at least 44x44px
- [ ] Adequate spacing between links
- [ ] Easy to tap without zooming
- [ ] No accidental taps

### Mobile Navigation
- [ ] Nav is readable and accessible
- [ ] Buttons are large enough
- [ ] Text is readable at base size
- [ ] Experience cards expand on tap
- [ ] Carousel works with swipe (if enabled)

## 🐛 Common Issues to Check

### HTML Validation
- [ ] Run through [W3C Validator](https://validator.w3.org/)
- [ ] No errors (warnings are okay)

### ARIA Issues
- [ ] No duplicate IDs
- [ ] aria-labelledby points to existing IDs
- [ ] aria-controls points to existing IDs
- [ ] No invalid ARIA attributes
- [ ] ARIA roles are valid

### Keyboard Traps
- [ ] Can Tab away from every element
- [ ] Can navigate out of carousel
- [ ] Can navigate out of tabs
- [ ] Can close any modals/overlays (if added)

## ✨ Quick Test Procedure

**5-Minute Test**:
1. ✅ Tab through entire homepage
2. ✅ Test skip link
3. ✅ Test carousel with keyboard
4. ✅ Navigate to Enterprise page
5. ✅ Test tabs with keyboard
6. ✅ Run Lighthouse audit

**15-Minute Test**:
- All of above plus:
7. ✅ Test with screen reader (read 1-2 sections)
8. ✅ Test zoom to 200%
9. ✅ Test reduced motion
10. ✅ Run WAVE scan

**Comprehensive Test**:
- Complete all sections of this checklist
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on multiple devices (Desktop, Tablet, Mobile)
- Test with multiple assistive technologies

---

## 📊 Success Criteria

### Minimum Requirements (Must Pass)
- ✅ Lighthouse accessibility score: 95+
- ✅ axe DevTools: 0 critical violations
- ✅ All keyboard navigation works
- ✅ Skip link functional
- ✅ No color contrast failures
- ✅ Zoom to 200% without horizontal scroll

### Excellent Accessibility (Target)
- ✅ Lighthouse score: 100
- ✅ axe DevTools: 0 violations
- ✅ WAVE: 0 errors
- ✅ Full screen reader compatibility
- ✅ Perfect keyboard navigation
- ✅ Reduced motion support
- ✅ Clear focus indicators everywhere

---

## 🔗 Quick Links

- [WCAG Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [W3C HTML Validator](https://validator.w3.org/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Keyboard Testing Guide](https://webaim.org/articles/keyboard/)
- [Screen Reader Testing Guide](https://webaim.org/articles/screenreader_testing/)

---

## 📝 Notes

- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on different devices (Desktop, Tablet, Mobile)
- Test with real assistive technology when possible
- Regular testing is important - test after any changes
- User feedback is valuable - ask real users with disabilities

**Remember**: Automated tools catch ~30-40% of issues. Manual testing is essential!
