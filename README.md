# Using Vite to build web app

[![language][code-shield]][code-url]
[![language-top][code-top]][code-url]
![code-size][code-size]

Example of database to create `Vite`(quickly) web app using popular js modules and framewords such as react, vuejs, svelte, ...

## How to

### Create a web app with vite

Go to your database root folder and type

```bash
 npm init vite your-app-name
 ```

 Then select your preferred web framework (and then javascript or typescript):

 ```bash
 Select a framework: › - Use arrow-keys. Return to submit.
❯  vanilla
    vue
    react
    preact
    lit
    svelte
```

It will create a folder with your app name (ie. `your-app-name`).

Go to this folder and install npm modules

```bash
cd your-app-name
npm install
```

### Develop and test web app with node

You can type

```bash
npm run dev
```

A node http server will start at http://localhost:3000

You coud now develop your web app.

### Deploy to 4D server

You must configure `Vite` to deploy on 4D `WebFolder`.

To do so edit `vite.config.js` and fill `build.outDir` with relative path.

```js
export default defineConfig({
  ...,
  build: { outDir: "../WebFolder" }
})
```

Then type

```bash
npm run build
```

You could now open your browser and navigate to your 4D server url (for instance http://localhost)

## More 

[Vite website](https://vitejs.dev)

Vite in 100s

[![Youtube video](https://img.youtube.com/vi/KCrXgy8qtjM/mqdefault.jpg)](https://www.youtube.com/watch?v=KCrXgy8qtjM)


[<img src="https://mesopelagique.github.io/quatred.png" alt="mesopelagique"/>](https://mesopelagique.github.io/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[code-shield]: https://img.shields.io/static/v1?label=language&message=4d&color=blue
[code-top]: https://img.shields.io/github/languages/top/mesopelagique/example-4d-vite.svg
[code-size]: https://img.shields.io/github/languages/code-size/mesopelagique/example-4d-vite.svg
[code-url]: https://developer.4d.com/
