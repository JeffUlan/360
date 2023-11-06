<template>
    <div>
      <heads/>
      <verification/>
      <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/header.vue";
    import verification from "~/components/doctor/verification.vue";
    import foots from "~/components/footer.vue";

  
    export default {
      components: {heads,verification,foots},
    }
    
    </script>
    <style>
   
  </style>