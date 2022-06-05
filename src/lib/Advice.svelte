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
 <p>Advice #{id}</p>
  <p>"{adv}"</p>
</div>
<style lang="scss">
  @use "./vars" as *;
div {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40%;
  background-color: $DarkGrayishBlue;
  color: white;
}
</style>
  
  
  
