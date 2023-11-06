<template>
    <div>
      <heads/>
      <cost/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/header.vue";
  import cost from "~/components/cost.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,cost,foots},
  }
  
  </script>
  