<script lang="ts">
 import Advice from "./advicegen.ts"
  let advice;
function generateAdvice() {
advice = JSON.stringify(Advice());
}
  generateAdvice()
  console.log(advice)
  $:[id, adv] = advice;
</script>
  Advice #{id}
  "{adv}"
  
