<script lang="ts">
 import Attribution from "./lib/Attribution.svelte"
  import AdviceGen from './lib/Advice.svelte'
	
</script>
<div>
<AdviceGen />
    <Attribution />
</div>

    <style lang="scss">
   @use "./lib/vars" as *;
div {
 font-family: $Font;
   background-color: $DarkBlue;
    min-height: 100vh;
       display: flex;
  justify-content: center;
  align-items: center;
      flex-direction: column;
  } 
    
    </style>