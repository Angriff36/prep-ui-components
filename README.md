# Prep Chef UI Components

**Standalone UI component library for kitchen management interfaces**

This repository contains the core UI components for the Prep Chef application, designed specifically for professional kitchen environments.

## 🎯 Purpose

This is a **Bolt-compatible** standalone repository that mirrors the UI components from the main PrepBeta monorepo. It allows for independent UI design and development using tools like Bolt.

## 🚀 Quick Start

### Development Server
```bash
npm install
npm run design-system
```
Opens standalone demo at `http://localhost:3002`

### Standalone Demo
```bash
npm run demo
```
Serves static demo using Python HTTP server

## 📁 Structure

```
src/
├── components/          # React components
├── styles/             # CSS and styling
└── index.ts           # Main exports

dev/
├── standalone-preview.html  # Interactive demo
└── demo.py                 # Python server script
```

## 🔄 Integration with Main App

This repository is mirrored from `PrepBeta/packages/ui-components/`. 

### Sync Workflow:
1. **Design here** using Bolt or direct editing
2. **Copy changes** back to main PrepBeta repo
3. **Build and test** integration in main app
4. **Deploy** via main app pipeline

## 🎨 Available Components

- **Kitchen Cards**: Event cards, prep item cards, recipe cards
- **Interactive Controls**: Buttons, inputs, timers, progress bars  
- **Status Indicators**: Temperature monitors, progress indicators
- **Layout Components**: Responsive grids, containers, panels
- **Form Elements**: Kitchen-optimized inputs and controls

## 🔧 Development

This package uses:
- React 18+ with TypeScript
- Tailwind CSS for styling  
- Vite for building and development
- Standalone HTML demos for quick iteration

## 📝 Notes

- Designed for touch interfaces (tablets/phones)
- Kitchen environment optimized (easy to clean, clear visibility)
- Responsive design for various screen sizes
- No backend dependencies in standalone mode

## 🔥 Ready for Bolt

Import this repository directly into Bolt for visual design work:
```
https://github.com/Angriff36/prep-ui-components
```