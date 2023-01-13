# cloudflare-pages-url-test

## Update January 12, 2023

This issue has been fixed! 🎉 The bug described below is no longer applicable to `wrangler`.

---

When run locally, the `fetch` function does not accept `URL` objects as a resource. After running:
```
npx wrangler pages dev .
```

Visiting http://localhost:8788/api returns an error (/api throws an `Invalid URL` error).

However when the same code is deployed to Cloudflare Pages, it works: https://cloudflare-pages-url-test.pages.dev/api

## Workaround

Manually stringify any `URL` objects passed to `fetch`: 
```javascript
const exampleUrl = new URL('https://example.com');

await fetch(exampleUrl); // Throws an "Invalid URL" error when testing locally but not when deployed
await fetch(exampleUrl.toString()); // Works both locally and when deployed
```
