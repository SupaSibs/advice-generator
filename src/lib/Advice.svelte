<script lang="ts">
 import Advice from "./advicegen.ts"
  let advice;
 let adv; let id;
function generateAdvice() {
 advice = Advice()
  adv = advice
  id = advice
}
  generateAdvice()
  console.log(advice)

</script>
  Advice #{id}
  "{adv}"
  
