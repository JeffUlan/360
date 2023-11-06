<template>
    <div>
      <heads/>
      <voicecall/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/doctor/doctorheader.vue";
  import voicecall from "~/components/doctor/doctorvoicecall.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,voicecall,foots},
  }
  
  </script>
  