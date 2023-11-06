<template>
    <div>
      <heads/>
      <checkout/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import checkout from "~/components/patient/checkout.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,checkout,foots},
  }
  
  </script>
  