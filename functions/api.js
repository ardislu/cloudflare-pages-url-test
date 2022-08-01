export async function onRequestGet() {
  const exampleUrl = new URL('https://example.com');

  const stringResponse = await fetch(exampleUrl.toString()); // Works both locally and when deployed
  const urlResponse = await fetch(exampleUrl); // Throws an "Invalid URL" error when testing locally but not when deployed

  return new Response(`stringResponse: ${stringResponse}\nurlResponse: ${urlResponse}`);
}