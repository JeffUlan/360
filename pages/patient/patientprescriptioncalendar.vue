<template>
    <div>
      <heads/>
      <patientprescriptioncalendar/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import patientprescriptioncalendar from "~/components/patient/patientprescriptioncalendar.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,patientprescriptioncalendar,foots},
  }
  
  </script>
  