export default function Advice() {
  const adviceFetch = fetch("https://api.adviceslip.com/advice");
  const advice = adviceFetch.then(r => r.json())
  let obj = {}
   
  advice.then(a => window.adv = a);
  return [window.adv.slip, window.adv.id];
}