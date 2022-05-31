<script lang="ts">
 import Advice from "./advicegen.ts"
  let advice;
function generateAdvice() {
advice = JSON.stringify(Advice());
}
  generateAdvice()
  console.log(advice)

 
</script>
  Advice #{adv}
  "{adv}"
  
