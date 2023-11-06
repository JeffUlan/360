<template>
    <div>
      <heads/>
      <invoiceview/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import invoiceview from "~/components/patient/invoiceview.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,invoiceview,foots},
  }
  
  </script>
  