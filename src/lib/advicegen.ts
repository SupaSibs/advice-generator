export default function Advice() {
let advi;
fetch("https://api.adviceslip.com/advice").then(r => r.json()).then(adv => {
    advi = adv;
   // console.log(advi);
  window.advi = advi
  })
  return window.advi
}