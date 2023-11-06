<template>
    <div>
      <heads/>
      <booking/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import booking from "~/components/patient/booking.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,booking,foots},
  }
  
  </script>
  