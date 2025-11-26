# TourHero FAQ Components

This project includes two comprehensive FAQ components for the TourHero website:

## Components

### 1. HomepageFaq Component (`src/components/HomepageFaq.tsx`)
A compact FAQ section designed for homepage integration with the top 10 most important questions.

**Features:**
- Accordion-style expand/collapse functionality
- Only one FAQ open at a time
- Smooth animations and transitions
- Mobile responsive design
- Accessibility features (ARIA labels, keyboard navigation)
- "View All FAQs" button linking to full FAQ page

### 2. FullFaqPage Component (`src/components/FullFaqPage.tsx`)
A comprehensive FAQ page with all questions organized by categories.

**Features:**
- Search functionality across all content
- Collapsible category sections
- Table of contents sidebar with smooth scrolling
- Social sharing and print functionality
- Back to top button
- Mobile responsive design
- Progressive disclosure of information

## Implementation

### Colors and Styling
The components use custom Tailwind CSS colors defined in `tailwind.config.js`:
- `text-primary`: #1f2937 (dark gray for primary text)
- `text-secondary`: #6b7280 (medium gray for secondary text)
- `background`: #ffffff (white background)
- `border`: #e5e7eb (light gray borders)
- `hover`: #f3f4f6 (light gray hover states)

### Integration
The `HomepageFaq` component has been integrated into the main `App.tsx` file, replacing the previous FAQ section. The `FullFaqPage` component can be used as a standalone page or integrated with a routing solution.

### Routing
A simple `FaqRouter` component is provided to demonstrate basic routing between the homepage FAQ and full FAQ page. For production use, consider implementing React Router or your preferred routing solution.

## Usage

### Homepage FAQ
```tsx
import HomepageFaq from './components/HomepageFaq';

// Use in your component
<HomepageFaq />
```

### Full FAQ Page
```tsx
import FullFaqPage from './components/FullFaqPage';

// Use as a standalone page
<FullFaqPage />
```

## Accessibility Features
- Semantic HTML structure
- ARIA labels and controls
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement (works without JavaScript)

## Customization
The components are built with Tailwind CSS and can be easily customized by:
- Modifying the color scheme in `tailwind.config.js`
- Adjusting spacing and typography classes
- Adding or removing FAQ items in the component data arrays
- Customizing animations and transitions

## Performance
- Lazy loading for large content sections
- Efficient state management
- Optimized animations using CSS transitions
- Minimal dependencies