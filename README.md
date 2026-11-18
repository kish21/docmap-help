# docmap help

The help website for **All-in-One Markdown Viewer** (docmap), the VS Code extension
[`kish21.markdown-as-web-page`](https://marketplace.visualstudio.com/items?itemName=kish21.markdown-as-web-page).

Every feature has one card: what it does, who it helps, **where to find it**, how to try it in three steps, and a
screenshot from the real extension.

## How it is built

Plain HTML pages, one stylesheet (`style.css`) and a small search script (`search.js` + `features.js`). No build step,
no site generator, no outside fonts, trackers or scripts. GitHub Pages serves the files as they are.

To view it locally, open `index.html` in a browser, or serve the folder (for example `python -m http.server`) so the
search works the same as online.

## Adding or changing a feature

1. Add or edit its card (`<article class="card" id="…">`) on the right section page.
2. Add or edit its line in `features.js`, so the search finds it.
3. Screenshots go in `img/`.

## License

MIT — see [LICENSE](LICENSE).
