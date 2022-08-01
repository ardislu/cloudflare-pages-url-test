# cloudflare-pages-url-test

When run locally, the `fetch` function does not accept `URL` objects as a resource. After running:
```
npx wrangler pages dev .
```

Visiting http://localhost:8788/ returns an error (/api throws an `Invalid URL` error).

However when the same code is deployed to Cloudflare Pages, it works.

## Workaround

Manually stringify any `URL` objects passed to `fetch`: 
```javascript
const exampleUrl = new URL('https://example.com');

await fetch(exampleUrl); // Throws an "Invalid URL" error when testing locally but not when deployed
await fetch(exampleUrl.toString()); // Works both locally and when deployed
```
