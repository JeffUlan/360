<template>
    <div>
      <heads/>
      <voicecall/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import voicecall from "~/components/patient/patientvoicecall.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,voicecall,foots},
  }
  
  </script>
  