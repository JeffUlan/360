<template>
    <div>
      <heads/>
      <editprescription/>
      <foots/>
    </div>
    </template>
    
  <script>
    import heads from "~/components/header.vue";
    import editprescription from "~/components/doctor/editprescription.vue";
    import foots from "~/components/footer.vue";

  
    export default {
      components: {heads,editprescription,foots},
    }
    
    </script>
    <style>
   
  </style>