<script lang="ts">
 import Advice from "./advicegen.ts"
  let advice;
 let adv; let id;
function generateAdvice() {
 advice = Advice().then(x => advice = x)
  adv = advice.slip.advice
  id = advice.slip.id
}
  generateAdvice()
  console.log(advice)

</script>
  Advice #{id}
  "{adv}"
  
