<script lang="ts">
  import Pattern from "../assets/pattern-divider-desktop.svg";
  import PatternMobile from "../assets/pattern-divider-mobile.svg";
  console.log(window.innerWidth)
  $: deviceWidth = window.innerWidth;
  let Divider = Pattern;

console.log(Divider)
  let advice; let fetcher; let res;
 let adv; let id;
async function generateAdvice() {

fetcher = await fetch("https://api.adviceslip.com/advice")
  advice = await fetcher.json()
  adv = advice.slip.advice
  id = advice.slip.id
}
  generateAdvice()
  console.log(advice)
if (deviceWidth < 600) {
  Divider = Pattern
  console.log(Divider)
}
</script>
<div>
 <p id="id">Advice #{id}</p>
  <p id="adv">"{adv}"</p>
  <img alt="pattern" src={Divider}>
  <button on:click={generateAdvice}>
New advice
  </button>
</div>
<style lang="scss">
  @use "./vars" as *;
  img[alt="pattern"] {
  max-width: 100%;
  margin: 10px;
  }
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50%;
  max-height: 50%;
  background-color: $DarkGrayishBlue;
  color: white;
  max-width: 50%;
  #adv {
  font-size: $FontQuote;
  color:whiten;
  text-align: center;
  }
  #id {
  color: $NeonGreen;
  letter-spacing: 3px;
  }
}
  @media screen and (max-width: 700) {
  div {
  min-height: 70%;
  max-height: 70%
  }
  }
</style>
  
  
  
