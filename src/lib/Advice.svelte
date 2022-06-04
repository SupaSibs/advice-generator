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
  Advice #{id}
  "{adv}"
  
