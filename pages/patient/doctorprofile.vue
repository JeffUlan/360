<template>
    <div>
      <heads/>
      <doctorprofile/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import doctorprofile from "~/components/doctor/doctorprofile.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,doctorprofile,foots},
  }
  
  </script>
  