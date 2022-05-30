<script lang="ts">
 import Advice as genAdvice from "./advicegen.js"
  const advice = genAdvice().then(alert); 
 $:id = advice.slip_id
 $: text = advice.text
</script>
  Advice #{id}
  "{text}"
  
