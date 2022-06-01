export default function Advice() {
  let adv = [];
fetch("https://api.adviceslip.com/advice").then(r => r.json()).then(adv.push)
return adv;
}