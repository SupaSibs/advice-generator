export default async function Advice() {
  const fetch = await fetch("https://api.adviceslip.com/advice");
  const advice = await fetch.json()
  return advice;
}