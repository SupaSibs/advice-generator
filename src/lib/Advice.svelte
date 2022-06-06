<script lang="ts">
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

</script>
<div>
 <p id="id">Advice #{id}</p>
  <p id="adv">"{adv}"</p>
  <button on:click={generateAdvice}>
New Advice
  </button>
</div>
<style lang="scss">
  @use "./vars" as *;
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
  
  
  
