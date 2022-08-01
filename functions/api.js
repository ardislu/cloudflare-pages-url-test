export async function onRequestGet() {
  const exampleUrl = new URL('https://example.com');

  await fetch(exampleUrl.toString()); // Works both locally and when deployed
  await fetch(exampleUrl); // Throws an "Invalid URL" error when testing locally but works when deployed

  return new Response(`Both responses completed without throwing an error.`);
}