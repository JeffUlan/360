<template>
    <div>
      <heads/>
      <bookingsuccess/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import bookingsuccess from "~/components/patient/bookingsuccess.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,bookingsuccess,foots},
  }
  
  </script>
  