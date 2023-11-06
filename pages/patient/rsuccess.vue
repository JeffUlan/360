<template>
    <div>
      <heads/>
      <rsuccess/>
      <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/header.vue";
    import rsuccess from "~/components/patient/rsuccess.vue";
    import foots from "~/components/footer.vue";

  
    export default {
      components: {heads,rsuccess,foots},
    }
    
    </script>
    <style>
   
  </style>