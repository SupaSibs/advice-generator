<script lang="ts">
 import Attribution from "./lib/Attribution.svelte"
  import AdviceGen from './lib/Advice.svelte'
	
</script>
<div>
<AdviceGen />
</div>
  <Attribution />
    <style lang="scss">
   @use "./lib/vars" as *;
div {
   background-color: $DarkBlue;
    min-height: 100vh;
       display: flex;
  justify-content: center;
  align-items: center;
  } 
    </style>