# My Portfolio - React Version

This is a React.js conversion of the original jQuery-based portfolio website. All features, views, and responsive design have been preserved.

## Features

- ✅ Dark/Light theme switcher
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Multiple pages (Home, About, Projects, Blog, Contact, Tools)
- ✅ LinkedIn Post Generator tool
- ✅ Contact form with email functionality
- ✅ Smooth animations (AOS)
- ✅ Image carousels (Owl Carousel)
- ✅ Video lightbox (Fancybox)
- ✅ PWA support

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable React components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── Preloader.jsx
│   ├── ThemeSwitcher.jsx
│   ├── BackToTop.jsx
│   ├── Breadcrumb.jsx
│   └── LinkedInPostEditor.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   ├── Tools.jsx
│   └── ...
├── contexts/        # React contexts
│   └── ThemeContext.jsx
├── data/           # Data constants
│   └── constants.js
├── utils/          # Utility functions
│   └── loadScripts.js
├── App.jsx         # Main app component with routing
└── main.jsx        # Entry point
```

## Technologies Used

- **React 18** - UI library
- **React Router** - Routing
- **Vite** - Build tool
- **Bootstrap** - CSS framework
- **AOS** - Animation library
- **Owl Carousel** - Carousel plugin
- **Fancybox** - Lightbox plugin

## Key Changes from Original

1. **jQuery to React**: All jQuery code has been converted to React hooks and components
2. **Component-based Architecture**: HTML pages converted to React components
3. **React Router**: Client-side routing instead of multiple HTML files
4. **Context API**: Theme management using React Context
5. **Modern Build System**: Vite instead of traditional bundlers

## Assets

All assets (images, CSS, JS libraries) remain in the `assets/` directory and are served as static files.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Author

E Pabitra
