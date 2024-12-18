# GreenHomes Assessment

## Project Description

The **GreenHomes Application** is a modern, eco-conscious website focused on creating awareness about sustainable housing and promoting modular, energy-efficient homes. The app provides a glimpse into the company's mission and story with clean animations, reusable components, and modern aesthetics.

With a focus on accessibility, responsiveness, and sustainability, this project showcases how technology and design can work together to share a greener vision of the future.

---

## Features
- **Mission Statement Section**: Displays the company's mission using scroll-activated animations powered by Framer Motion.
- **Company Story Section**: Engages users with a visual representation of the GreenHomes journey.
- **Responsive Design**: Fully optimized for all screen sizes (mobile-first approach).
---

## Technologies Used

This project is built using the following technologies and tools:
- **Frontend:**
    - [React](https://reactjs.org/) (v18.3.1): A JavaScript library for building user interfaces.
    - [TailwindCSS](https://tailwindcss.com/) (v3.4.16): A utility-first CSS framework for fast styling.
    - [Framer Motion](https://www.framer.com/motion/) (v11.15.0): A library for declarative animations.
    - [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) (v9.14.0): For scroll event detection in animations.

- **Tooling:**
    - [Vite](https://vitejs.dev/) (v6.0.1): A next-generation build tool for fast frontend development.
    - [ESLint](https://eslint.org/) (v9.15.0): To maintain consistent code quality.
    - [PostCSS](https://postcss.org/) (v8.4.49): For transforming CSS with JavaScript.

- **Assets:**
    - Images for mission and story sections stored locally in the `/assets` folder.

---

## Project Structure

The folder structure follows a clean and modular approach:

```plaintext
📦 project-root
├── public/                  # Static assets
├── src/                     # Source code
│   ├── assets/              # Images and other assets
│   ├── components/          # Reusable React components
│   ├── pages/               # Website pages
│   ├── App.jsx              # App entry component
│   └── index.jsx            # ReactDOM render entry
│   └── main.jsx             # ReactDOM render entry
├── .eslintrc                # ESLint configuration
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite-specific configuration
└── README.md                # Project documentation (You're here!)
```

## Scripts

The following npm scripts are already defined in the `package.json`:

- `npm run dev`: Run the development server with hot reloading.
- `npm run build`: Create an optimized production build.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to check your code for linting issues.

---
