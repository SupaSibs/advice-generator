export default async function Advice() {
  const fetch = await fetch("https://api.adviceslip.com/advice");
  return await fetch.json();
}