<script lang="ts">
  import Pattern from "../assets/pattern-divider-desktop.svg";
  import PatternMobile from "../assets/pattern-divider-mobile.svg";
  import Dice from "../assets/icon-dice.svg"
  console.log(window.innerWidth)
  let Divider = PatternMobile;
$: {if (window.innerWidth > 600) {
  Divider = Pattern
  console.log(Divider + " New divider")
}
    else {
      Divider = PatternMobile
        console.log(Divider + " New divider")
    }
   }
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

</script>
<div>
 <p id="id">Advice #{id}</p>
  <p id="adv">"{adv}"</p>
  <img alt="pattern" src={Divider}>
  <button on:click={generateAdvice}>
<img src={Dice} alt="dice" />
  </button>
</div>
<style lang="scss">
  @use "./vars" as *;
  img[alt="pattern"] {
  max-width: 100%;
  margin: 10px;
  }
button {
  border-radius: 50%;
  border: none;
  background-color: $NeonGreen;
  height: 45px;
  width: 45px;
  position: relative;
  top: 20px;
}
  img[alt="dice"] {
  max-wdidth: 50%;
  max-height: 50%;
  
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
  
  
  
