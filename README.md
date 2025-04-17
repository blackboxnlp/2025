# BlackboxNLP Website

## Folder Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── logo.svg
├── src/
│   ├── components/
│   │   ├── BaseHead.astro
|   |   └── ...
│   ├── config/
│   │   └── site_config.json.ts
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   |   ├── index.astro
|   └── styles/
│       └── global.css
└── package.json
```

- The `public/` directory is where you place static assets that will be served directly.
- The `src/` directory is where your Astro components, pages, and styles live.
- The `src/components/` directory is where you can create reusable components. These generally don't need adjustments, but you can add or remove components as needed.
- The `src/config/` directory is where the main configuration file for the website is located. Modifying it will change the contents of the website.
- The `src/layouts/` directory is where the main layout file for the website is located. This file is used to wrap the content of each page in a consistent layout, and does not need to be modified in general.
- The `src/pages/` directory is where the main content of the website is located. Each `.astro` file in this directory corresponds to a separate page on the website, while `.mdx` files are Markdown files that can be used for mainly textual content (e.g. the Call for Papers).

To learn more about the folder structure of an Astro project, refer to [the Astro guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

Running the website locally requires an installation of [Node.js](https://nodejs.org/en/download/). We recommend using the latest LTS version. You can check if you have Node.js installed by running `node -v` in your terminal.

If you don't have Node.js installed, you can use a version manager like [nvm](https://github.com/nvm-sh/nvm) to install it. This allows you to easily switch between different versions of Node.js.

To run the website locally, you need to install the dependencies and then start the development server. You can do this by running the following commands in your terminal:

```bash
npm install
npm run dev
```

This will start a local development server at `http://localhost:4321`, where you can view the website in your browser and edit it interactively.

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |