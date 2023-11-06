<template>
    <div>
      <heads/>
      <chat/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import chat from "~/components/patient/patientchat.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,chat,foots},
  }
  
  </script>
  