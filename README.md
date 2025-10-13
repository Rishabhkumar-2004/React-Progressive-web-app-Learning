# React Progressive Web App Learning 🚀

A learning / demo project to explore how to build a Progressive Web App (PWA) using React. This repository contains code, configuration, and examples to help you understand and experiment with PWA features in a React-based app.

---

## Table of Contents
- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Prerequisites](#prerequisites)
- [PWA Concepts Demonstrated](#pwa-concepts-demonstrated)
- [Future Work / To-Do](#future-work--to-do)  

---

## About

This project is a learning exercise to build a Progressive Web App (PWA) using React. It aims to demonstrate key PWA capabilities such as:

- Offline support / caching  
- Service workers  
- Web app manifest  
- Add to Home Screen (A2HS) behavior  
- Responsive, fast-loading UI  

You can use this as a boilerplate or reference for your own PWA projects.

---

## Features

- React-based UI  
- Offline-first caching via service worker  
- Configured web manifest (icons, theme colors, display modes)  
- “Add to Home Screen” support  
- Responsive design  
- Example of updating cache strategy  
- Simple demo UI to showcase online / offline behavior  

---

## Tech Stack

- **React**  
- JavaScript / JSX  
- HTML, CSS  
- Service Worker (via Workbox or custom script)  
- Web App Manifest  
- Build tooling via `npm` / `create vite@latest my-react-app` (or custom)  


---

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher recommended)  
- npm (or yarn) 

---

# PWA Concepts Demonstrated
-->Some of the concepts this repo helps you explore:

- Registering a service worker

- Caching strategies: stale-while-revalidate, cache-first, fallback to offline

- Handling updates / versioning of service worker

- Web App Manifest: name, icons, display mode, theme colors

- Detecting offline / online status

- Prompting “Add to Home Screen”

- Handling fallback routes in single-page apps

# Future Work / To-Do

- Improve caching strategies (e.g. runtime caching, API responses)

- Add tests (unit, integration)

- Add fallback offline page

- More robust update flow / “new version available” prompt

- Better examples / sample pages

- Performance optimizations (Lighthouse audits)

- Support for push notifications

