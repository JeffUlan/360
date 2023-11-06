<template>
    <div>
      <heads/>
      <vsuccess/>
      <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/header.vue";
    import vsuccess from "~/components/doctor/vsuccess.vue";
    import foots from "~/components/footer.vue";

  
    export default {
      components: {heads,vsuccess,foots},
    }
    
    </script>
    <style>
   
  </style>