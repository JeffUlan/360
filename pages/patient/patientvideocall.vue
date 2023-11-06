<template>
    <div>
      <heads/>
      <videocall/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import videocall from "~/components/patient/patientvideocall.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,videocall,foots},
  }
  
  </script>
  