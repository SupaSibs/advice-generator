<script lang="ts">
 import Advice from "./advicegen.js"
function generateAdvice() {
Advice().then(a => window.advice = a); 
}
 $:id = window.advice;
 //$:text = window.advice.text;
</script>
  Advice #{id}
  "{id}"
  
