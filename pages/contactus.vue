<template>
    <div>
      <heads/>
      <contactus/>
      <foots/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/header.vue";
    import contactus from "~/components/contactus.vue";
    import foots from "~/components/footer.vue";
  
   export default {
     components: {heads,contactus,foots},
   }
   
  </script>
  <style>
  
  </style>
   