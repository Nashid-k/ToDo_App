
# ToDo App

A simple ToDo app built with **TypeScript** and **Snowpack**.

## Features

- **TypeScript**: Strongly typed programming language that helps you write more robust and scalable JavaScript code.
- **Snowpack**: A fast, modern build tool for the web that improves the development experience by providing instant reloads and optimized builds.
- **Development Mode**: Run the app locally with fast reloads on code changes.
- **Production Build**: Bundle and optimize the app for production-ready deployment.

## Available Scripts

### `npm start`

Runs the app in the development mode.

- Open `http://localhost:8080` to view it in the browser.
- The page will reload if you make edits.
- You will also see any lint errors in the console.

### `npm run build`

Builds a static copy of your site to the `build/` folder.

- Your app is ready to be deployed!
- **For the best production performance**: Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.

### `npm run lint`

Checks the code for any linting errors.

- Uses [ESLint](https://eslint.org/) to enforce coding standards and ensure consistency across the codebase.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and **Create Snowpack App (CSA)** strives for the same. You can easily configure Snowpack with custom plugins or tools if needed.

---

### What is Snowpack?

**Snowpack** is a modern build tool designed to be faster and simpler than traditional bundlers. It’s optimized for web development by allowing you to load JavaScript files in the browser without having to bundle them first, resulting in faster startup times and more efficient development.

#### Key Features of Snowpack:

- **Instant Reloads**: Snowpack uses a fast development server that reloads pages instantly when changes are made to files.
- **No Bundling in Development**: Snowpack doesn't require bundling during development, so it's faster and more efficient.
- **Optimized for Modern Web**: Snowpack works with modern JavaScript features (like ES Modules) out of the box and supports TypeScript, JSX, and CSS.
- **Plugin Ecosystem**: Snowpack’s plugin ecosystem allows you to add bundlers like Webpack or Rollup when you need production-level optimizations.

---

### Setting Up Your Project

To get started with your Snowpack TypeScript project:

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start the Development Server**

   ```bash
   npm start
   ```

   This will open your ToDo app in the browser at `http://localhost:8080`.

3. **Build the Project**

   ```bash
   npm run build
   ```

   This will create a static version of your app in the `build/` folder, which can then be deployed to a web server.

4. **Lint Your Code**

   ```bash
   npm run lint
   ```

   This ensures your code adheres to the specified coding style and catches potential issues early.

---

