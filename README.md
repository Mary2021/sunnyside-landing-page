
# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Desktop design preview](#desktop-design-preview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Read more of starting with Vite](#getting-started-with-vite)

## Overview
My challenge was to build out Sunnyside agency landing page and get it looking as close to the design as possible. Designs could be found inside the `/design` folder and Style Guide in file style-guide.md.

### The challenge

Users should be able to:

- View the optimal layouts for many screen sizes. 
- See hover states for all interactive elements on the page

### Desktop design preview

![](./design/desktop-preview.jpg)


### Links

- Github repo: [https://github.com:Mary2021/sunnyside-landing-page.git](https://github.com:Mary2021/sunnyside-landing-page.git)
- Live URL: [https://mary2021.github.io/sunnyside-landing-page/](https://mary2021.github.io/sunnyside-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- This project was bootstrapped with [Vite](https://vitejs.dev/guide/). [Read more](#getting-started-with-Vite)

### Useful resources
- [HTML5 Semantic Tags](https://www.bitdegree.org/learn/https://www.bitdegree.org/learn/html5-semantic-tags#:~:text=HTML5%20semantic%20tags%20define%20the%20purpose%20of%20the%20element.,find%20the%20required%20information%20faster.) - This helped me better understand of the aim of HTML semantics.
- [the Folder Structure for React Project](https://www.xenonstack.com/insights/reactjs-project-structure#:~:text=Components%20are%20the%20building%20blocks,widely%20used%20in%20the%20project.) - This article explains the Folder Structure for React Project. 
- [Re-render a React Component on Window Resize](https://www.pluralsight.com/guides/re-render-react-component-on-window-resize) - This article explains how to add an event listener for the resize event.
- [Build A Responsive React JS Website](https://www.youtube.com/watch?v=1_Cu-yMQru8) - Clint Briley Code Commerce video channe has very good tutorials for begginers. 
- [The Markdown Guide](https://www.markdownguide.org/) - Get more help with writing markdown.


## Author

- Website - [Mary P](https://github.com/Mary2021)


# Getting Started with Vite

Run `npm create vite@latest my-react-app -- --template react` to start a React app template.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Vite requires Node.js version 18+ or 20+. 

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

The page will reload when you make changes.\

### `npm run build`

By default, the build output will be placed at dist. You may deploy this dist folder to any of your preferred platforms.

### `npm run preview`

The vite preview command will boot up a local static web server that serves the files from dist at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment.

You may configure the port of the server by passing the --port flag as an argument.


```json
{
  "scripts": {
    "preview": "vite preview --port 8080"
  }
}
```

Now the preview command will launch the server at http://localhost:8080.

### Deployment

[https://vitejs.dev/guide/static-deploy.html#github-pages](https://vitejs.dev/guide/static-deploy.html#github-pages)

Set base in vite.config.js:

```js
export default defineConfig({
  ....
  base: '/reponame/'
})
```
