<script lang="ts">
 import Advice from "./advicegen.ts"
  let advice;
 let adv; let id;
async function generateAdvice() {

  
 advice = Advice()
  setTimeout(5000, () => null)
  adv = advice.slip.advice
  id = advice.slip.id;
}
  generateAdvice()
  console.log(advice)

</script>
  Advice #{id}
  "{adv}"
  
