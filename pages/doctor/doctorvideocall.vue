<template>
    <div>
      <heads/>
      <videocall/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/doctor/doctorheader.vue";
  import videocall from "~/components/doctor/doctorvideocall.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,videocall,foots},
  }
  
  </script>
  