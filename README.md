# David Eynon – Developer Portfolio (React + Vite)

This is the source code for [davidreynon.com](https://drocpdp.github.io/davidreynon_react), a personal portfolio site built with React, Vite, and GitHub Pages. It features dynamic routing using slugs, responsive design, and is fully deployable via GitHub.

## 🚀 Live Site

[https://drocpdp.github.io/davidreynon_react](https://drocpdp.github.io/davidreynon_react)
(to be ported later)

## 📁 Features

- ⚛️ React 19 with TypeScript
- ⚡ Vite for fast development and builds
- 🔗 Slug-based routing (e.g. `/olympic`, `/popup`)
- 🖼️ Dynamic project loading from `projects.ts`
- 🎯 Pixel-perfect rebuild of original Angular version
- 📄 GitHub Pages deploy-ready (including 404.html routing workaround)

## 🛠 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 🏗 Build & Deploy

```bash
npm run build
cp dist/index.html dist/404.html
npm run deploy
```

## 🧱 File Structure

```
src/
├── components/
├── data/
├── pages/
├── main.tsx
├── App.tsx
public/
└── assets/
```

## 📦 Dependencies

- react, react-dom
- react-router-dom
- vite, typescript
- gh-pages
- sass

## 👨‍💻 Author

David Eynon  
[LinkedIn](https://www.linkedin.com/in/daveqa)  
[GitHub](https://github.com/drocpdp)

## 📝 License

MIT
